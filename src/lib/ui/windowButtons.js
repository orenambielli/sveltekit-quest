export function closeWindow(windowId) {
  const window = document.querySelector(windowId);
  window.style.display = 'none';
}

export function toggleDarkMode() {
  const windows = document.querySelectorAll('.window');
  windows.forEach((window) => {
    window.classList.toggle('toggle-dark');
  });
  
  const toggleButton = document.querySelector('.toggle-dark-btn');
  
  if (toggleButton.textContent === '光') {
    toggleButton.textContent = '黒';
  } else {
    toggleButton.textContent = '光';
  }
}


export function windowButtons() {
  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const windowId = button.dataset.window;
      closeWindow(windowId);
    });
  });

  const toggleButton = document.querySelector('.toggle-dark-btn');
  toggleButton.addEventListener('click', toggleDarkMode);
}

