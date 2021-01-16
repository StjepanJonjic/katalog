<template>
  <div>
    <app-header></app-header>
  <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'
import naslovna from './components/naslovna.vue'
import login from './components/login.vue'
import register from './components/register.vue'


export default {
  components:{
    'app-header': header,
    'naslovna': naslovna,
    'login': login,
    'register': register

  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
