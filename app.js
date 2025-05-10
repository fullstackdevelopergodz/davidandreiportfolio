(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
document.querySelector('.btn-con .main-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
    }
});