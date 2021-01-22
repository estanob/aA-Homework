document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const sFPlaces = document.getElementById("list-container");
  sFPlaces.addEventListener("submit", e => {
    e.preventDefault();
  })

  const sFPlaceNameInputEl = document.getElementById("sf-places-input")
  const favoriteInput = sFPlaceNameInputEl.value;
  sFPlaceNameInputEl.value = '';

  const ul = document.getElementById("sf-places");
  const li = document.createElement("li");
  li.textContent = favoriteInput;

  ul.appendChild(li);
  // --- your code here!



  // adding new photos

  // --- your code here!



});
