<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.{{counter}}</p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  setup(props) {
    console.log(props, 'ddd') // { user: '' }

    const counter = ref(0);

    counter.value++

    let repositories = []
    const getUserRepositories = async () => {
      repositories = await fetchUserRepositories(props.user)
    }

    return {
      repositories,
      getUserRepositories, // functions returned behave the same as methods,
      counter
    }
  }
}
</script>
