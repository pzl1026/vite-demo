<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <Composition user="a"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Composition from './components/Composition.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Composition
  }
}
</script>
