<script>
    export let app;
  </script>

<div class="icon-container">
  <img src={app.icon} class="icon" alt={app.alt} />
  <div class="icon-text">{app.title}</div>
</div>

<style>
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: inline-block;
    text-align: center;
    width: 4rem;
    margin: 1.25rem .66rem;
    cursor: default;
  }

  .icon {
      height: 3rem;
      width: 3rem;
      margin: auto;
  }

  .icon-container:hover {
    -webkit-filter: invert(1);
    filter: invert(1);
  }

  .icon-text {
    font-size: .7rem;
    color: #AA2654;
  }
</style>