<script>

    const icons = [
      {
        url: 'oren.quest',
        imgSrc: '../images/icons/sys-icon.png',
        alt: 'oren.quest',
        text: '~/.Home'
      },
      {
        url: 'accept.oren.quest',
        imgSrc: '../images/icons/dnd-icon.png',
        alt: 'Foundry',
        text: 'Foundry'
      },
      {
        url: 'accept.oren.quest',
        imgSrc: '../images/icons/make-icon.png',
        alt: 'error',
        text: 'Profile'
      },
      {
        url: 'accept.oren.quest',
        imgSrc: '../images/icons/woh-icon.png',
        alt: 'error',
        text: 'Games'
      },
      {
        url: 'accept.oren.quest',
        imgSrc: '../images/icons/notes-icon.png',
        alt: 'Todo List',
        text: 'Todo'
      },
      {
        url: 'accept.oren.quest',
        imgSrc: '../images/icons/afterdark-icon.png',
        alt: 'Void',
        text: 'Void'
      },

    ];
</script>

<div class="icon-list">
    {#each icons as icon}
        <a href={icon.url}>
            <div class="icon-container">
                <img src={icon.imgSrc} alt={icon.alt} class="icon" data-target={icon.text.toLowerCase() + 'Window'} />
                <div class="icon-text">{icon.text}</div>
            </div>
        </a>
    {/each}
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
	filter: invert(1);
	-webkit-filter: invert(1);
}

.icon-text {
	font-size: .7rem;
	color: #AA2654;
}

img {
    display: block;
}
</style>