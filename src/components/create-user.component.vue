<template>
  <div>
    <label>Create user v2</label>
    <div class="row">
      <label>name</label>
      <pv-input-text id="name" v-model="username"></pv-input-text>
    </div>
    <div class="row">
      <label>username</label>
      <pv-input-text id="username" v-model="password"></pv-input-text>
    </div>
    <div class="row">
      <label>email</label>
      <pv-input-text id="email" v-model="email"></pv-input-text>
    </div>
    <pv-button @click="create()">save</pv-button>
  </div>
</template>

<script>
import {UserApiService} from "@/services/user-api.service.js";
import router from "@/router.js";

export default {
  name: 'create-user',
  data() {
    return {
      username: '',
        password: '',
      email: '',
        userApiService : new UserApiService()
    }
  },
  methods: {
      async create() {
          const body = {
              username: this.username,
              password: this.password,
              email: this.email
          }

          const response = await this.userApiService.create(body)

          if(response.status === 201)
          { alert('User created');
              router.push('users');}
          else
              alert('Error creating user')
      }
  },
    created() {
        let storage = sessionStorage;
        this.email = storage.getItem('email')
    }
}
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 10% 0;
}
</style>
