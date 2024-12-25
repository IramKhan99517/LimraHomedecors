function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

new Swiper('.carousel', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { clickable: true },
});
const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
};
