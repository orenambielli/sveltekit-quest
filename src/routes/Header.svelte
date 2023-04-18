<script>
    import DropdownMenu from '../lib/DropdownMenu.svelte';
    import Clock from '../lib/Clock.svelte';

    const menuItems = [
        { label: 'File', items: [
            { label: 'New', link: 'https://www.google.com' },
            { label: 'Save', link: 'https://www.mozilla.org' },
            { label: 'Exit', link: 'https://www.bing.com' }
        ]},
        { label: 'About', items: [
            { label: 'More...', link: 'https://www.ai.com' }
        ]}
    ];
</script>

<nav>
    <div class="menu">
      <DropdownMenu {menuItems} />
    </div>
    <div>
      <Clock />  
    </div>
</nav>

<style>

    nav {
      display: flex;
      justify-content: space-between;
      max-width: 800px;
    }

</style>