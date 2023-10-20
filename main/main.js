const btn = document.querySelector(".Scroll");

const scrollFunction = () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
} else {
    btn.style.display = "none";
}
};

window.onscroll = () => scrollFunction();

btn.onclick = function () {
window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
});
};
