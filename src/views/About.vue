<template>
  <h1>{{ title }}</h1>

  <p>
    <button @click="getAnswer">{{ click }}</button>
    <button @click="clearAnswer">Clear</button>
  </p>
  <p>
    The answer is: {{ answer }}
  </p>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'

const title = 'About'
const click = 'Get an Answer'
const answer = ref('')

defineProps({
  title: String,
  answer: String
})

function getAnswer() {
  fetch('https://yesno.wtf/api', 
    { method: 'GET' }
  )
  .then((response) => response.json())
  .then((data) => {
    console.log(data),
    console.log(data.answer),
    answer.value = data.answer
  })
}

function clearAnswer() {
  answer.value = ''
}
</script>

<style scoped>
a {
  color: #000000;
}
</style>