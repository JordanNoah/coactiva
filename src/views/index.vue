<template>
  <v-content>
    <v-row no-gutters>
        <v-navigation-drawer v-model="menuDrawer" absolute temporary>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Jordan Josue Ubilla Mendoza
              </v-list-item-title>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list>
            <v-list-item-group>
              <router-link to="abogados">
                <v-list-item :to="{ name: 'abogados'}">
                  <v-list-item-content>
                    <v-list-item-title>
                      <i class="fas fa-user-tie mx-2"></i>
                      Abogados
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="tramites">
                <v-list-item :to="{ name: 'tramites'}">
                  <v-list-item-content>
                    <v-list-item-title>
                      <i class="fas fa-copy"></i>
                      Tramites
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <router-link to="configuracion">
                <v-list-item :to="{ name: 'configuracion'}">
                  <v-list-item-content>
                    <v-list-item-title>
                      <i class="fas fa-cogs mx-2"></i>
                      Configuraciones
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      <v-col>
        <v-app-bar dark color="#00365F">
          <v-app-bar-nav-icon @click.stop="menuDrawer = !menuDrawer"></v-app-bar-nav-icon>
          <v-img src="http://derconsultec.com/img/derconsult-logo-movil-white.png" class="mb-2" contain aspect-ratio="2" height="50%" position="end left"></v-img>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark depressed fab v-on="on">
                JU
              </v-btn>
            </template>
            <v-list>
              <router-link to="perfil">
                <v-list-item>
                  <v-list-item-title>Mi cuenta</v-list-item-title>
                </v-list-item>
              </router-link>
              <router-link to="/login">
                <v-list-item>
                  <v-list-item-title>Cerrar Session</v-list-item-title>
                </v-list-item>
              </router-link>
            </v-list>
          </v-menu>
        </v-app-bar>
        <router-view class="view two"></router-view>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  data(){
    return{
      menuDrawer:false
    }
  }  
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
