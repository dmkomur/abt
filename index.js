const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery__img").forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        document.body.style.overflow = "hidden"; // блокируем скрол страницы
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = ""; // возвращаем скрол
});
