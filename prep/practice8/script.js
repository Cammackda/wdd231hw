const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal"); // Assume you have a button to open the modal
const closeModalButton = document.querySelector(".close-button");

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  // close the modal when user clicks outside of the .modal-content
  if (event.target === modal) {
    closeModal();
  }
});
// allow the escape key to close the modal as well.
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});