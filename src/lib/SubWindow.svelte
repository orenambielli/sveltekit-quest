<script>
</script>
  
  <div id="subWindow" class="window">
    <div class="window-bar">
      <div class="blank-lol"></div>
      <div class="window-title"><b>o.q</b></div>
      <div class="window-button close-button" data-window="#subWindow"><b>X</b></div>
    </div>
  
    <div class="row app-row" style="justify-content:flex-start">
      <!-- Content goes here -->
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
      margin: 0.25rem;
      font-weight: bold;
      border: solid black 1px;
      padding: 0.25rem 0.45rem;
      cursor: pointer;
    }
  
    .window-title {
      background-color: #fff;
      margin: 0;
      padding: 0.5rem;
    }
  
    .row {
        display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
    }

</style>
