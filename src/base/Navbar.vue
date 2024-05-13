<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded=false aria-label="Toggle navigation" @click="showToggle()">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="isToggleClicked ? ' collapse navbar-collapse show' : 'collapse navbar-collapse hide'" ref="el" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink :to="{name:'BuiltInComponent'}" class="nav-link">BuiltInComponent</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name:'BuiltInAttribute'}" class="nav-link">BuiltInAttribute</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name:'ComponentInstance'}" class="nav-link">Instance</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name:'VueDirectives'}" class="nav-link">Directives</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name:'Todo'}" class="nav-link">To Do</RouterLink>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>

import { RouterLink } from 'vue-router';
export default {
    name:'NavbarComponent',
    data(){
        return{
            isToggleClicked:false,
        }
    },
    methods:{
        showToggle(){
            this.isToggleClicked = !this.isToggleClicked;
            if(this.isToggleClicked){
                 this.$refs.el.class="collapse navbar-collapse"
            }
        }
    }
}
</script>
<style scoped>
.bg-body-tertiary{
    background-color: rgb(68 23 143) !important;
    color: white !important;
}
.nav-link{
    color: white;
}

.navbar-brand{
    color:white;
}
</style>

