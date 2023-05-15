<script>
  export let isVisible = false;
</script>

<div class="{isVisible ? 'visible' : 'hidden'}">
  <h1>{app.title}</h1>
  <p>Welcome to the home page!</p>
  <button on:click={() => (isVisible = false)}>Close</button>
</div>