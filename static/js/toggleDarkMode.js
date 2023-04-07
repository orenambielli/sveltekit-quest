
function toggleDarkMode() {
  
  // toggle dark mode for anything inside the windows
  const modeSwitch = document.getElementById("modeSwitch");
  modeSwitch.addEventListener("click", () => {
    const windows = document.getElementsByClassName("toggle-dark");
    for (let i = 0; i < windows.length; i++) {
      windows[i].style.filter = windows[i].style.filter === "invert(1)" ? "none" : "invert(1)";
    }
    modeSwitch.textContent = modeSwitch.textContent === "光" ? "黒" : "光";
  });
}

toggleDarkMode();