let hamIcon = document.querySelector("#ham-icon");
function toggleMenu() {
  // FIND IF MENU IS SHOWN OR HIDDEN
  let expandedMenu = document.querySelector(".expanded-menu");
  let currentStatus = expandedMenu.style.display;
  // IF SHOWN, HIDE IT; IF HIDDEN, SHOW IT.
  if (currentStatus === "block") {
    expandedMenu.style.display = "none";
  } else {
    expandedMenu.style.display = "block";
  }
}

hamIcon.addEventListener("click", toggleMenu);
