let images, modalImage, imageModal, modalInstance, currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modalInstance.show();
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    modalImage.src = images[currentIndex].src;
}

function closeModal() {
    modalInstance.hide();
}

document.addEventListener("DOMContentLoaded", function () {
    images = document.querySelectorAll(".photo");
    modalImage = document.getElementById("modalImage");
    imageModal = document.getElementById("imageModal");
    modalInstance = new bootstrap.Modal(imageModal);

    // Attach event listeners to images
    images.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    document.querySelector(".left-btn").addEventListener("click", () => changeImage(-1));
    document.querySelector(".right-btn").addEventListener("click", () => changeImage(1));

    document.querySelector(".modal-body").addEventListener("click", function (event) {
        let clickX = event.clientX;
        let windowWidth = window.innerWidth;

        if (clickX < windowWidth / 2) {
            changeImage(-1);
        } else {
            changeImage(1);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (imageModal.classList.contains("show")) {
            if (event.key === "ArrowLeft") {
                changeImage(-1);
            } else if (event.key === "ArrowRight") {
                changeImage(1);
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    });
});
