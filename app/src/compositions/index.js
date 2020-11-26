import {ref, reactive} from 'vue';

const data = [
  {
    id: 0,
    name: 'lqn'
  },{
    id: 1,
    name: 'ydd',
  },{
    id: 2,
    name: 'ylh',
  },{
    id: 3,
    name: 'szm',
  },{
    id: 4,
    name: 'pzl',
  }
];

export function useFetchUsers() {
  const state = reactive({
    users: []
  });
  const getUsers = () => {
    state.users = data;
  };

  return {
    state,
    getUsers
  };
};

export function useDelUser(state) {
  const removeUser = function (index) {
    state.users = state.users.filter((user, idx) => idx !== index);
  }
  return {
    removeUser
  }
};

export function userAddUser (state) {
  const state2 = reactive({
    user: {
      name: ''
    }
  });
  const addUser = () => {
    const user = Object.assign({}, state2.user);
    state.users.push(user);
    state2.user.name = '';
  };

  return {
    state2,
    addUser
  }
}

export function useSearchUser(state) {
  const searchName = ref();
  const searchUser = () => {
    if (searchName.value.trim()) {
      state.users = state.users.filter(m => m.name == searchName.value);
    } else {
      state.users = data;
    }
  };

  return {
    searchName,
    searchUser
  }
}