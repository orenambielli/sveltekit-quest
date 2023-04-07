
function windowBehavior() {

  // assigns icons as clickable, matches icon to target window 
  const appRow = document.querySelector('.app-row');
  appRow.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    const windowId = target.dataset.target;
    const window = document.getElementById(windowId);

    // opens the window
    if (window) {
        window.style.display = 'block'; 
      }});

  // once close button is clicked, looks for nearest .window class and hides it
  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const windowId = button.dataset.window;
      const window = document.querySelector(windowId);
      window.style.display = 'none';
    });
  });
}

windowBehavior();