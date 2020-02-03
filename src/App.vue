<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>
<script>
import axios from 'axios'
import * as CryptoJS from 'crypto-js'
export default {
  mounted(){
    this.checkSession()
    this.getData()
  },
  methods:{
    checkSession(){
      var token = localStorage.getItem('token')
      if(token==null){
        if(this.$route.name!='login'){
          this.$router.push('login')
        }        
      }else{
        if(this.$route.name=='login' || this.$route.name==null){
          this.$router.push('index/perfil')
        }
      }
    },
    getData(){
        var token = localStorage.getItem('token')
        var decrypt  = CryptoJS.AES.decrypt(token, 'raph3')
        var originalText = decrypt.toString(CryptoJS.enc.Utf8)
        const params = new URLSearchParams
        params.append('token',originalText)
        axios({
          method:"post",
          url:"http://localhost/coactiva/metodos/login/userData.php",
          data:params
        }).then((res) => {
          this.$store.commit('saveData',res.data[0])
        })
    }
  }
}
</script>