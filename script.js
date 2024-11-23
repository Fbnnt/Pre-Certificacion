const botonDeLikes = document.querySelectorAll(".section2-btn")
const section1Btn = document.getElementById("section1-btn")

section1Btn.addEventListener("click", () => {
    alert("Aplicando Filtros...")
})

botonDeLikes.forEach(button => {
    button.addEventListener("click", () => {
        const LikesCount = button.parentElement.querySelector(".section2-count")
        LikesCount.textContent = parseInt(LikesCount.textContent) + 1;
    })
});