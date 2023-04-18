<!-- Popup.svelte -->
<div class="popup" style="display: {visible ? 'block' : 'none'};">
    <div class="popup-header">
      <h2>{title}</h2>
      <button on:click={() => hidePopup(id)}>Close</button>
    </div>
    <div class="popup-content">
      {#if content}
        {content}
      {:else}
        <p>No content to display</p>
      {/if}
    </div>
  </div>
  
  
  <style>
    .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
  
    .popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 1rem;
    }
  
    .popup-content {
      background-color: #fff;
      padding: 1rem;
    }
  </style>
  
  <script>
    export let id;
    export let title = 'Popup';
    export let content;
    export let visible = false;
  
    function hidePopup(id) {
      // Call a function from the parent component to hide the popup
    }
  </script>
  