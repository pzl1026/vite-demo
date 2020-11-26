import { ref, reactive, computed } from 'vue'

export const useUserRepositories = () => {
  const repositories = reactive({
    stus: []
  }); 
  const getUserRepositories = () => {
    repositories.stus = [
      {
        id:0,
        name: 'a',
        age: 10
      },
      {
        id:1,
        name: 'b',
        age: 20
      },
      {
        id:2,
        name: 'c',
        age: 30
      }
    ]
  }

  return {
    repositories,
    getUserRepositories
  };
}

export const add2 = (name, arr) => {
  arr.push(name);
  console.log(arr,'asss');
  return arr;
}

export function useRepositoryNameSearch(repositories) {
  let searchQuery = ref('')
  // searchQuery = toRaw(searchQuery);
  console.log(9988)
  // const repositoriesMatchingSearchQuery = () => {
  //   console.log(repositories, 'repositories')
  //   let v = repositories.value.filter(repository => {
  //     return repository.name == searchQuery.value;
  //   });
  //   console.log(v, 'vvv');
  //   return v;
  // };

  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(repository => {
      return repository.name.includes(searchQuery.value)
    })
  })
  console.log(repositoriesMatchingSearchQuery, ';repositoriesMatchingSearchQuery')

  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}

export function useAddUser(repositories) {
  let state2 = reactive({
    stu: {
      id: '',
      name: '',
      age: ''
    }
  });

  function addStu (e) {
    e.preventDefault();
    const stu = Object.assign({}, state2.stu);
    repositories.stus.push(stu);
    state2.stu.id = '';
    state2.stu.name = '';
    state2.stu.age = '';
  }

  return {
    state2,
    addStu
  }
}