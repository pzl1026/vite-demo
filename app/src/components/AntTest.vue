<template>
  <a-row :gutter="16">
    <a-col :span="4">
      <a-input-search
        v-model:value="searchName"
        placeholder="输入name"
        style="width: 200px; height: 50px;"
        @search="searchUser"
        enter-button
      />
    </a-col>
    <a-col :span="4">
      <a-input-search
        v-model:value="state2.user.name"
        style="width: 200px; height: 50px;"
        placeholder="输入name"
        @search="onSearch"
      >
        <template #enterButton>
          <a-button @click="addUser">
            添加
          </a-button>
        </template>
      </a-input-search>
    </a-col>
    <a-col :span="24">
      <a-list size="small" bordered :data-source="state.users">
        <template #renderItem="{ item, index }">
          <a-list-item @click="removeUser(index)">{{ item.name }}</a-list-item>
        </template>
        <template #header>
          <div>点击删除</div>
        </template>
        <template #footer>
          <div>Footer</div>
        </template>
      </a-list>
    </a-col>
  </a-row>
</template>

<script>
import { Input, Row, Col, List, Avatar} from 'ant-design-vue';
import { useFetchUsers, useDelUser, userAddUser, useSearchUser } from '../compositions';
import {onMounted} from 'vue';
const AInputSearch = Input.Search;
const AListItem = List.Item;
const AListItemMeta = List.Item.Meta;

export default {
  components: {
    AInputSearch,
    AList: List,
    AListItem,
    AListItemMeta,
    AAvatar: Avatar,
    ARow: Row,
    ACol: Col
  },

  setup() {
    const {state, getUsers} = useFetchUsers();
    const {removeUser} = useDelUser(state);
    const {state2, addUser} = userAddUser(state);
    const {searchName, searchUser} = useSearchUser(state);
    onMounted(getUsers);

    return {
      state,
      getUsers,
      removeUser,
      state2,
      addUser,
      searchName,
      searchUser
    }
  }
}
</script>