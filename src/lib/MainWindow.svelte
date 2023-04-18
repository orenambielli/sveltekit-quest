<script>
    import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
  
    let mode = '光';
    let windows;
  
    function toggleMode() {
        mode = mode === '黒' ? '光' : '黒';
        windows.forEach(window => {
            window.classList.toggle('toggle-dark');
        });
    }
  
    onMount(() => {
      const appRow = document.querySelector('.app-row');
      windows = document.querySelectorAll('.window');
  
      appRow.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        const windowId = target.dataset.target;
        const window = document.getElementById(windowId);
  
        if (window) {
          window.classList.toggle('hidden');
        }
      });
  
      const closeButtons = document.querySelectorAll('.close-button');
      closeButtons.forEach(button => {
        button.addEventListener('click', () => {
          const windowId = button.dataset.window;
          const window = document.querySelector(windowId);
          window.classList.add('hidden');
        });
      });
    });

  </script>
  
  <div id="mainWindow" class="window main-window {mode} {mode === '黒' ? 'toggle-dark' : ''}">
    <div class="window-bar">
      <div on:click={() => toggleMode()} on:keydown={() => toggleMode()} class="window-button">{mode}</div>
      <div class="window-title">oren.quest</div>
      <div on:click={() => toggleMode()} on:keydown={() => toggleMode()} class="window-button close-button" data-window="#mainWindow">X</div>
    </div>
  
    <ul class="window-info">
      <li>5 items</li>
      <li>3.8 MB in disk</li>
    </ul>
  
    <div class="row app-row" style="justify-content:flex-start">
        
        <Icon />

    </div>
  </div>
  
  <style>
    .window {
      background-color: #fff;
      color: #000;
      border: solid black 2px;
      cursor: default;
      list-style: none;
      min-height: 16rem;
      min-width: 10rem;
      max-width: 25rem;
      margin: 0.5rem;
    }
  
    .window-bar {
      display: flex;
      justify-content: space-between;
      background: repeating-linear-gradient(0deg, #fff, #000 4px, #fff 4px, #000 8px);
      margin: 2px 0;
    }
  
    .window-button {
      background-color: #fff;
      font-size: 1rem;
      font-weight: bold;
      border: solid black 1px;
      margin: 0.25rem;
      padding: 0.2rem .4rem 0.3rem 0.4rem;
      cursor: pointer;
    }
  
    .window-title {
      background-color: #fff;
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      padding: 0.5rem;
    }
  
    .window-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      border: solid black 1px;
      list-style: none;
      margin: 0 0 3px 0;
      padding: 0 0.5rem;
    }
  
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
    }

    .app-screen {
        display: block;
        position: absolute;
        background-color: #000;
        color: #fff;
        border: double #fff 8px;
        max-width: 250px;
        max-height: 200px;
        text-align: right;
        cursor: default;
        margin: 15% 10%;
        overflow: hidden;
  }

    .hidden {
        display: none;
    }

    .toggle-dark {
        filter: invert(1);
    }

</style>
