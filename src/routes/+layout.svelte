<script>

  import Header from './Header.svelte';
  import './styles.css';

</script>
  
  <div class="app">
    <div class="container">
    <Header />
  
    <main>
      <slot />
    </main>
  
    <footer>
      <a href="https://oren.quest" style="bottom: 0; position: absolute; margin: 2rem;">:wq!</a>
    </footer>
    </div>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

    .app {
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
    }
  
    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    footer a {
      font-weight: bold;
    }
  
  </style>
  