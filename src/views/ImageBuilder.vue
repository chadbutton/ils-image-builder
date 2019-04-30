<template>
  <div class="ibuilder">
    <ImageBuilder />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import ImageBuilder from '@/components/ImageBuilder.vue'

export default {
  name: 'ibuilder',
  components: {
    ImageBuilder
  }
}

</script>
