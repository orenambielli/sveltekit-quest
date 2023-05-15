<script>
    import AppIcon from './AppIcon.svelte';

    let apps = [

        {
            id: 'Home',
            icon: '../images/icons/sys-icon.png',
        },
        {
            id: 'Foundry',
            icon: '../images/icons/dnd-icon.png'
        },
        {
            id: 'Profile',
            icon: '../images/icons/make-icon.png'
        },
        {
            id: 'Games',
            icon: '../images/icons/woh-icon.png'
        },
        {
            id: 'Todo',
            icon: '../images/icons/notes-icon.png'
        },
        {
            id: 'Void',
            icon: '../images/icons/afterdark-icon.png'
        }

    ];
</script>

{#each apps as app}
    <AppIcon 
        title={app.id}
        icon={app.icon}
        alt={app.id} />
{/each}