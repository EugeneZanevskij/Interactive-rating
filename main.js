const ratingCard = document.querySelector(".rating-card");
const thankCard = document.querySelector(".thank-card");
const submitBtn = document.getElementById("btn-submit");
const btns = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");
const error = document.querySelector(".error");

submitBtn.addEventListener("click", () => {
    if (rating.innerText !== ""){
        thankCard.classList.remove("hidden");
        ratingCard.classList.add("hidden");
    } else {
        error.classList.remove("hidden");
    }
});

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        rating.innerText = btn.innerText;
    });
});