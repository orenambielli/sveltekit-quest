
<script></script>

<svelte:head>
	<title>oren.quest</title>
	<meta name="description" content="Svelte demo desktop" />
</svelte:head>

<div class="row">
    <div id="sad-face">:(</div>
    <div id="mainWindow" class="window main-window toggle-dark" style="display: block;">
  
      <div class="window-bar">
        <label id="modeSwitch" class="btn" for="mode-button" data-window="#mainWindow">光</label>
        <div class="window-title"><b>oren.quest</b></div>
        <label class="btn close-button" for="close-button" data-window="#mainWindow">X</label>
      </div>
  
      <ul class="window-info">
        <li>6 items</li>
        <li>3.8 MB in disk</li>
      </ul>
  
      <div class="row app-row" style="justify-content:flex-start">
          
        <a href="https://oren.quest">
          <div class="icon-container">
            <img src="/images/icons/sys-icon.png" class="icon" alt="system icon">
            <div class="icon-text">~/.Main</div>
          </div>
        </a>

        <a href="https://accept.oren.quest">
          <div class="icon-container">
            <img src="/images/icons/dnd-icon.png" class="icon" alt="wizard icon">
            <div class="icon-text">Foundry</div>
          </div>
        </a>

        <!-- https://www.linkedin.com/in/orenambielli -->
          <div id="openError" class="icon-container">
            <img src="/images/icons/make-icon.png" class="icon" alt="make icon" data-target="errorWindow">
            <div class="icon-text">Profile</div>
          </div>

          <div id="openGames" class="icon-container">
            <img src="/images/icons/woh-icon.png" class="icon" alt="horror icon" data-target="gamesWindow">
            <div class="icon-text">Games</div>
          </div>

          <div id="openTodo" class="icon-container">
            <img src="/images/icons/notes-icon.png" class="icon" alt="notes icon" data-target="todoWindow">
            <div class="icon-text">To do</div>
          </div>

          <div id="openStars" class="icon-container">
            <img src="/images/icons/afterdark-icon.png" class="icon" alt="notes icon" data-target="starsWindow">
            <div class="icon-text">Void</div>
          </div>

        </div>
    </div>

    <div id="errorWindow" class="window sub-window popup-0 toggle-dark" style="display: none;">
      <div class="window-bar">
        <div class="btn" style="opacity:0;">:)</div>
          <div class="window-title"><b>$AAAA</b></div>
        <label class="btn close-button" for="close-button" data-window="#errorWindow">X</label>
      </div>
      <ul class="window-contents">
        <li><pre>
       
       
     erro ██▓ r
          ▒▓▒ 
          ░▒  
          ░x0   
           ░  
           ░  
         </pre></li>
      </ul>
    </div>

    <div id="gamesWindow" class="window sub-window popup-2 toggle-dark" style="display: none;">
      <div class="window-bar">
        <div class="btn" style="opacity:0;">:)</div>
          <div class="window-title"><b>Not Configured</b></div>
        <label class="btn close-button" for="close-button" data-window="#gamesWindow">X</label>
      </div>
      <ul class="window-contents">
        <li><pre>
          ██╗ █████╗  █████╗  █████╗ 
         ███║██╔══██╗██╔══██╗██╔══██╗
         ╚██║╚██████║╚██████║╚██████║
          ██║ ╚═══██║ ╚═══██║ ╚═══██║
          ██║ █████╔╝ █████╔╝ █████╔╝
          ╚═╝ ╚════╝  ╚════╝  ╚════╝ 
                                     
         </pre></li>
         <li>Donkey Kong is a registered trademark of Nintendo of America Inc.</li>
      </ul>
    </div>

    <div id="todoWindow" class="window sub-window popup-1 toggle-dark" style="display: none;">
      <div class="window-bar">
        <div class="btn" style="opacity:0;">:)</div>
          <div class="window-title"><b>Notepad</b></div>
        <label class="btn close-button" for="close-button" data-window="#todoWindow">X</label>
      </div>
  
      <ul class="window-contents">
        <li>-------------------------------</li>
        <pre style="font-size: .6rem">    ______             __         ___      __
   /_  __/___     ____/ /___     / (_)____/ /_
    / / / __ \   / __  / __ \   / / / ___/ __/
   / / / /_/ /  / /_/ / /_/ /  / / (__  ) /_
  /_/  \____/   \__,_/\____/  /_/_/____/\__/ 
  <br></pre>
  
        <li>-------------------------------</li>
        <li>*Ender 3v2 calibration</li>
        <li>*The Polished Ocean one-shot</li>
        <li>*HPL essays</li>
        <li>*Stable Diffusion local setup</li>
        <li>*DM screen organization</li>
        <li>*Netplay on Steam Deck</li>
        <li>*pico-8 minigame</li>
  
      </ul>
  
    </div>
  
    <div id="starsWindow" class="app-screen" style="display: none; max-height: 100%; max-width: 100%;">
      <label class="btn close-button" for="close-button" data-window="#starsWindow">X</label>
        <div style="position:absolute; bottom:0;">*.stars</div>
        <img src="/images/starfield.gif" alt="stars">
    </div>

    <script src="/js/toggleDarkMode.js"></script>
    <script src="/js/windowBehavior.js"></script>
</div>