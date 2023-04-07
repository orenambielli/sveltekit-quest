<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';
    
    let currentPage = '';
    let currentTime = new Date();

    function updateTime() {
      currentTime = new Date();
    }

    const invalId = setInterval(updateTime, 1000);
    
    const unsubscribe = page.subscribe(value => {
      currentPage = value.path;
    });

    onMount(() => {
      invalId;
    });
    
    onDestroy(() => {
      unsubscribe();
    });

  </script>
  
  <nav class="navbar">
      <div class="navbar-left">
        <a href="/" class:active={currentPage === '/'}>Home</a>
        <a href="/about" class:active={currentPage === '/about'}>About</a>
        <a href="/contact" class:active={currentPage === '/contact'}>Contact</a>
      </div>
      <div class="navbar-right">
        <span class="time">{currentTime.toLocaleTimeString()}</span>
      </div>
  </nav>
  
  <style>
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-family: 'Silkscreen', monospace;
      font-size: 1rem;
      text-transform: uppercase;
    }
    
    .navbar-left {
      display: flex;
      align-items: center;
    }
    
    .navbar-left a {
      color: #fff;
      text-decoration: none;
      margin-right: 1rem;
    }
    
    .navbar-left a.active {
      color: #0f0;
      text-decoration: underline;
    }
    
  </style>
  