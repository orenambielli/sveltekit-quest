<script>

  import { onMount, onDestroy } from 'svelte';
  
  let time = new Date();
  let interval;
  
  function updateTime() {
    time = new Date();
  }
  
  function blinkColon() {
    const colon = document.getElementById('colon');
    colon.style.visibility = colon.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }
  
  onMount(() => {
    interval = setInterval(blinkColon, 1000);
    updateTime();
  });
  
  onDestroy(() => {
    clearInterval(interval);
  });
  
  $: hours = time.getHours() % 12 || 12;
  $: minutes = time.getMinutes().toString().padStart(2, '0');
  $: timeString = `${hours}<span id="colon">:</span>${minutes}`;

</script>

<div class="clock">
  <span id="time" style="display: inline-block" >{@html timeString}</span>
</div>

<style>

  .clock {
      position: relative;
      color: #000;
      font-size: 1rem;
      padding: .25rem;
      z-index: 1;
  }

</style>
