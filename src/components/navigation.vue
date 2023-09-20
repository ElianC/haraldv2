<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref<boolean>(false)

const openMenu = (action: boolean) => {
  isMenuOpen.value = action;
}

const menuLinks = [
  // {
  //   name: 'Home',
  //   url: '/',
  // },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Photo Gallery',
    url: '/gallery'
  }
]
</script>

<template>
  <div>
    <nav class="flex justify-between items-end p-4 container mx-auto uppercase">
      <span class="text-xl ">John Doe</span>
      <ul v-if="true" class="flex gap-8">
        <li v-for="link of menuLinks">
          <a :href="link.url">{{link.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
