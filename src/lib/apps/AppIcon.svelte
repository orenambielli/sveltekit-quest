<script>
  import WindowFrame from '$lib/ui/WindowFrame.svelte';
  export let icon;
  export let alt;
  export let title;
</script>

<div class="icon-container">
  <img src={icon} class="icon" alt={alt} />
  <div>{title}</div>
</div>

<style>
.icon-container {
  display: inline-block;
  align-items: center;
  text-align: center;
  font-size: .7rem;
  color: #AA2654;
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

</style>