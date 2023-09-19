<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref<boolean>(false)

const openMenu = (action: boolean) => {
  isMenuOpen.value = action;
}

const menuLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Blog',
    url: '/blog'
  }
]
</script>

<template>
  <div>
    <nav>
      <button role="button" @click="()=>openMenu(true)" v-if="!isMenuOpen">
        Open Menu
      </button>
      <button role="button" @click="()=>openMenu(false)" v-else>
        Close Menu
      </button>
      <ul v-if="isMenuOpen">
        <li v-for="link of menuLinks">
          <a :href="link.url">{{link.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
