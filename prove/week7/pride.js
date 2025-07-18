document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("quoteList");
  const button = document.getElementById("loadBtn");
  const localKey = "pride-prejudice";

  function renderQuotes(quotes) {
    list.innerHTML = "";
    quotes.forEach(q => {
      const li = document.createElement("li");
      li.textContent = q;
      list.appendChild(li);
    });
  }

  function loadFromLocalStorage() {
    const stored = localStorage.getItem(localKey);
    if (stored) {
      const quotes = JSON.parse(stored);
      renderQuotes(quotes);
      button.style.display = "none";
      return true;
    }
    return false;
  }

  if (!loadFromLocalStorage()) {
    button.addEventListener("click", async () => {
      try {
        const response = await fetch("quotes.json");
        if (!response.ok) throw new Error("Failed to load quotes.json");
        const data = await response.json();

        // Find "Pride and Prejudice" book object
        const prideBook = data.books.find(book => book.title === "Pride and Prejudice");

        if (prideBook && prideBook.quotes && prideBook.quotes.length) {
          renderQuotes(prideBook.quotes);
          localStorage.setItem(localKey, JSON.stringify(prideBook.quotes));
          button.style.display = "none";
        } else {
          list.innerHTML = "<li>No quotes found for Pride and Prejudice.</li>";
        }
      } catch (err) {
        console.error(err);
        list.innerHTML = "<li>Error loading quotes.</li>";
      }
    });
  }
});

