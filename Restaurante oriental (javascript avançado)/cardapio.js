const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    window.location.href = `detalhes.html?id=${id}`;
  });
});
