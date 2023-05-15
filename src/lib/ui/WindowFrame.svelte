<script>
import { onMount } from 'svelte';
import { closeWindow, toggleDarkMode, windowButtons } from '$lib/ui/windowButtons.js';
export let id;
</script>

<div class="row">
    <div id="mainWindow" class="window main-window">
        <div class="window-bar">
            <div class="window-button" style="opacity:0%;">X</div>
            <div class="window-title">              </div>
            <div class="window-button close-button" data-window="{id}">X</div>

            <slot />

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