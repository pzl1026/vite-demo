<template>
    <div>
      <form>
        <input type="text" v-model="state2.stu.id">
        <input type="text" v-model="state2.stu.name">
        <input type="text" v-model="state2.stu.age">
        <input type="submit" @click="addStu">
      </form>
     
      <button @click="search">搜索</button>
      <ul>
        <li v-for="(item, index) in repositories.stus" :key="item.id" @click="remStu(index)">{{item.name}}</li>
      </ul>
    </div>
</template>

<script>
import {useUserRepositories, add2,  useRepositoryNameSearch, useAddUser} from '../api/respositories';
import { ref, onMounted, watch, toRefs, computed, reactive, toRaw } from 'vue'

export default {
  name: 'Composition',
  props: {
    msg: String,
    id: Number
  },
  setup (props) {
    const { user } = toRefs(props)
    let name = ref('');
    const { repositories, getUserRepositories } = useUserRepositories(user);
    const { state2, addStu } = useAddUser(repositories);
    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories);
    onMounted(getUserRepositories) // on `mounted` call `getUserRepositories`
    const search = () => {
      return repositoriesMatchingSearchQuery;
    }

    function remStu (index) {
      repositories.stus = repositories.stus.filter((stu, idx) => idx !== index);
    }

    // let state2 = reactive({
    //   stu: {
    //     id: '',
    //     name: '',
    //     age: ''
    //   }
    // });

    // function addStu (e) {
    //   e.preventDefault();
    //   const stu = Object.assign({}, state2.stu);
    //   repositories.stus.push(stu);
    //   state2.stu.id = '';
    //   state2.stu.name = '';
    //   state2.stu.age = '';
    // }

    return {
      repositories, repositoriesMatchingSearchQuery,
      getUserRepositories,
      name,
      searchQuery,
      search,
      remStu,
      state2,
      addStu
      // repositoriesMatchingSearchQuery
    }
  }
}
</script>