<script>
	import { onMount } from 'svelte';
	
	export let menuItems;
	
	let activeDropdown = null;
	
	function toggleDropdown(event) {
	  const dropdown = event.target.nextElementSibling;
	  if (dropdown.style.display === "block") {
		dropdown.style.display = "none";
	  } else {
		hideDropdown();
		dropdown.style.display = "block";
		activeDropdown = dropdown;
	  }
	}
	
	function hideDropdown() {
	  if (activeDropdown) {
		activeDropdown.style.display = "none";
		activeDropdown = null;
	  }
	}
	
	onMount(() => {
	  document.addEventListener('click', (event) => {
		if (!event.target.closest('.dropdown')) {
		  hideDropdown();
		}
	  });
	});
  </script>
  
  <div class="navbar">
	<img src="/images/icons/sleepy-off.png" style="height: 16px; width: 16px; margin: .5rem 1rem 0 2rem" alt="sleepy" />
	{#each menuItems as item}
	  <div class="dropdown">
		<button class="button" on:click={toggleDropdown}>{item.label}</button>
		<div class="dropdown-content" style="display: none">
		  {#each item.items as subItem}
			<a class="link" href={subItem.link} on:click={hideDropdown}>{subItem.label}</a>
		  {/each}
		</div>
	  </div>
	{/each}
  </div>
  

  <style>

	.navbar {
		display: inline-flex;
		position: absolute;
		background-color: #fff;
		height: 30px;
		width: 100%;
		max-width: 800px;
	}

	.dropdown {
		display: inline-block;
		position: relative;
		height: 100%;
		min-width: 3rem;
	}
  
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #fff;
		z-index: 1;
	}
  
	.button {
		display: inline-block;
		background-color: #fff;
		border: none;
		font-family: Silkscreen, monospace;
		font-size: 1rem;
		color: #000;
		text-align: center;
		text-decoration: none;
		height: 100%;
		margin: 0;
		padding: .25rem;
		cursor: default;
	}
  
	.button:hover {
		background-color: #adadad;
	}
  
	.link {
		display: block;
		font-size: 1rem;
		color: #000;
		text-decoration: none;
		padding: .5rem;
		min-width: 5rem;
	}
  
	.link:hover {
		background-color: #adadad;
	}

  </style>
  