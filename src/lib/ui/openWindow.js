
export function openWindow(event) {
    const target = event.target.closest('.icon-container');
    if (!target) return;

    const windowId = target.dataset.target;
    const popupWindow = document.querySelector(`#${windowId}`);

    if (popupWindow) {
        const { style } = popupWindow;
        style.display = style.display === 'block' ? 'none' : 'block';
    }
}