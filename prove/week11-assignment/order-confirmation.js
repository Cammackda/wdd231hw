/* Get the customer first and last name and generate a thank-you message that includes their name */

const params = new URLSearchParams(window.location.search);
const firstName = params.get("firstName");
const lastName = params.get("lastName");

document.querySelector("#thankYouMessage").textContent =
  `Thank you, ${firstName} ${lastName}!`;
