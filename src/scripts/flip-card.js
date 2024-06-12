function flipCard(event) {
    let card = event.target.closest(".card");
    card.classList.toggle("is-flipped");
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", flipCard);
  });