<template>
  <div class="container">
    <div class="row">
      <label>email</label>
      <pv-input-text id="email" v-model="email"></pv-input-text>
    </div>
    <br />
    <div class="row">
      <label>password</label>
      <pv-input-text id="username" v-model="password"></pv-input-text>
    </div>
    <pv-button @click="login()">login</pv-button>
      <pv-button @click="logout()">logout</pv-button>
  </div>
</template>

<script>
import {AuthApiService} from "@/services/aut-api.service.js";

export default {
  name: 'main-login',
  data() {
    return {
      email: '',
      password: '',
        userApiService: new AuthApiService()
    }
  },
  methods: {
      login(){
          let storage = sessionStorage;
          storage.setItem('email',this.email)
          //storage.setItem('password',this.password)

          let body ={
              email: this.email,
              password: this.password
          }

          this.userApiService.login(body).then(response=>{
              storage.setItem('jwt',response.data.accessToken)
          })
      },
      logout(){
          let storage = sessionStorage;
          storage.removeItem('password')
         // storage.clear()
      }

  },
    created() {
        let storage = sessionStorage;
        this.email = storage.getItem('email')
        this.password = storage.getItem('password')
    }

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.row {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
