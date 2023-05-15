
<script>
	import { onMount } from 'svelte';
	import { closeWindow, toggleDarkMode, windowButtons } from '../lib/ui/windowButtons.js';
	import AppList from '$lib/apps/AppList.svelte';
  
	onMount(() => {
	  windowButtons();
	});

	// todo: {#await promise} during loading screen 
	// open apps with Event Dispatcher?
  
	</script>
		
	<!-- app click behavior = show div
	{#if appIsClicked.ID = 1}
		<!-- <Quest />
	{/if} -->
	
	<div class="row">
	  <div id="mainWindow" class="window main-window">
		<div class="window-bar">
		  <div class="window-button toggle-dark-btn">光</div>
		  <div class="window-title">oren.quest</div>
		  <div class="window-button close-button" data-window="#mainWindow">X</div>
		</div>
	
		<ul class="window-info">
		  <li>6 items</li>
		  <li>3.8 MB in disk</li>
		</ul>
	
		<div class="row app-row" style="justify-content:flex-start">
			<AppList />
		</div>
	
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
		min-width: 20rem;
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
</style>