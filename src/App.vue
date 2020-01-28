<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="2">
        <v-navigation-drawer width="100%" permanent>
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
      </v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  
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
