<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { client } from '../../tina/__generated__/client'

interface Photo {
  id: string;
  title: string;
  body?: any;
  imgSrc?: string | null | undefined;
}

const photos = ref<Photo[]>([])

onMounted(() => {
  fetchGalleries()
})

const fetchGalleries = async () => {
  const galleriesResponse = await client.queries.galleryConnection()

  const galleries = galleriesResponse.data.galleryConnection.edges
    ?.map((edge) =>
      edge?.node ? {
        id: edge.node.id,
        title: edge.node.title,
        body: edge.node.body,
        imgSrc: edge.node.imgSrc,
      } as Photo : undefined
    )
    .filter((gallery: Photo | undefined): gallery is Photo => gallery !== undefined) ?? []

  photos.value= galleries
}
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <div
      v-for="photo of photos"
      :key="photo.id"
      class="lg:max-w-[30vw]"
    >
      <p>{{ photo.title }}</p>
      <img
        v-if="photo.imgSrc"
        :src="photo.imgSrc"
        :alt="photo.body"
      />
    </div>
  </div>
</template>