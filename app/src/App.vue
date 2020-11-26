<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <Composition user="a"/> -->
  <AntTest />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Composition from './components/Composition.vue'
import AntTest from './components/AntTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Composition,
    AntTest
  }
}
</script>
