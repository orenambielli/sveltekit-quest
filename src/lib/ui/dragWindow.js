export function makeWindowDraggable(window) {
    let isDragging = false;
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;
    
    window.addEventListener("mousedown", startDragging);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("mousemove", dragWindow);
  
    function startDragging(event) {
      isDragging = true;
      mouseOffsetX = event.clientX - window.offsetLeft;
      mouseOffsetY = event.clientY - window.offsetTop;
    }
  
    function stopDragging() {
      isDragging = false;
    }
  
    function dragWindow(event) {
      if (!isDragging) return;
  
      const x = event.clientX - mouseOffsetX;
      const y = event.clientY - mouseOffsetY;
      
      window.style.left = x + "px";
      window.style.top = y + "px";
    }
  }
  