<template>
  <header>
    <div class="container">
      <h1 class="logo">Contactos</h1>
    </div>
  </header>

  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f9f9f9;
  color: #222;
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;
}

header {
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}
</style>
