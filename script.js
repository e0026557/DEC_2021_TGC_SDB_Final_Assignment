document.addEventListener("DOMContentLoaded", () => {
  // Get collapse button
  const collapseBtn = document.querySelector("#navbar-button");
  // Get additional Navlinks (outside of collapse button)
  const addnavbar = document.querySelector(".navbar-text");

  // switch variable to keep track of clicks
  let click = true;

  // Toggle additional navlinks to disappear when collapse button is clicked
  collapseBtn.addEventListener("click", () => {
    if (click === true) {
      // console.log("turn off");
      addnavbar.style.display = "none";
      click = false;
    } else {
      // console.log("turn on");
      addnavbar.style.display = "block";
      click = true;
    }
  });
});
