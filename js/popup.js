const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.querySelector(".overlay");

console.log("openModalButtons:", openModalButtons);
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("openModalsButtons");
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  console.log("openModal");
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
