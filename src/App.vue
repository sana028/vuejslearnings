<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from './base/Navbar.vue';

</script>

<template>
 <div>
  <NavbarComponent />
 </div>
<main>
    <RouterView/>
  </main>

</template>

<style scoped>

main{
  display:flex;
  justify-self: center;
  align-items: center;
  align-content: center;
  padding-top: 20px;
  justify-content: center;
  flex-direction: column;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
