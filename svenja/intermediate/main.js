let santaPic = document.querySelectorAll(".santa");

santaPic.forEach(function (santa, ind) {
    santa.addEventListener('click', function () { this.style.opacity = 0; });
});