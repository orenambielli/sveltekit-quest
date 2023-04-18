<div id="todoWindow" class="app-screen">
    <div class="window-bar">
        <div class="window-button" style="opacity:0;"><b>:)</b></div>
        <div class="window-title"><b>Notepad</b></div>
        <div class="window-button close-button" data-window="#todoWindow"><b>X</b></div>
    </div>
    
    <div>
        <ul class="window-contents">
            <li>---------------------------------</li>
            <pre style="font-size: .6rem">  ______             __         ___      __
       /_  __/___     ____/ /___     / (_)____/ /_
        / / / __ \   / __  / __ \   / / / ___/ __/
       / / / /_/ /  / /_/ / /_/ /  / / (__  ) /_
      /_/  \____/   \__,_/\____/  /_/_/____/\__/ 
      <br></pre>
      
            <li>---------------------------------</li>
            <li>*Ender 3v2 calibration</li>
            <li>*The Polished Ocean one-shot</li>
            <li>*HPL essays</li>
            <li>*Stable Diffusion local setup</li>
            <li>*DM screen organization</li>
            <li>*Netplay on Steam Deck</li>
            <li>*pico-8 minigame</li>
      
          </ul>
    </div>
</div>

<style>

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

.window-button {
    background-color: #fff;
    margin: .25rem;
    font-weight: bold;
    border: solid black 1px;
    padding: 0.15rem .3rem;
    cursor: pointer;
}

.window-contents {
    font-size: .8rem;
    border: solid black 1px;
    margin: 0 0 3px 0;
    padding: 1rem .5rem;
}

</style>