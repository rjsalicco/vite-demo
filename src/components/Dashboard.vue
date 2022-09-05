<template>
  <h1>{{ msg }}</h1>

  <p>
    Dashboard
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>