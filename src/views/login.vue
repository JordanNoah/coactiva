<template>
    <v-content>
        <v-parallax class="complete" src="https://beta.incubie.com/images/geometric-bg--dark.jpg">
            <v-container fill-height fluid>
                <v-row justify="center" align="start">
                    <v-col cols="4">
                        <v-img src="http://derconsultec.com/img/derconsult-logo-movil-white.png" contain position="top center" class="mb-8"></v-img>
                        <v-card class="my-4">
                            <v-card-title class="pa-0">
                                <v-tabs fixed-tabs dark>
                                    <v-tab @click="state=true;resetForm();">SIGN UP</v-tab>
                                    <v-tab @click="state=false;resetForm2();">LOG IN</v-tab>
                                </v-tabs>
                            </v-card-title>
                            <div v-if="state==false">
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col>
                                                    <v-text-field v-model="email" :rules="emailUserRules" label="Email/User Name" requierd></v-text-field>
                                                    <v-text-field v-model="password" :rules="[v => !!v || 'Contraseña es requerido']" label="Contraseña" required></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-btn block outlined color="success" :disabled="!valid" @click="sendCredentialLog()">LOG IN</v-btn>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-btn x-small text>Olvidaste tu contraseña?</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-actions>
                                </v-form>
                            </div>
                            <div v-if="state==true">
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col>
                                                    <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                                                    <v-text-field v-model="userName" :rules="userRules" label="User name" required></v-text-field>
                                                    <v-text-field v-model="password" :rules="passwordRules" label="Contraseña" required></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-btn block outlined color="success" :disabled="!valid" @click="sendCredentialSign()">SIGN IN</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-actions>
                                </v-form>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
    </v-content>
</template>
<script>
export default {
    data(){
        return{
            state:true,
            email:'',
            valid:true,
            validS:true,
            emailUserRules:[
                v => !!v || 'Email/User Name es requerido'
            ],
            emailRules:[
                v => !!v || 'E-mail es requerido',
                v => /.+@.+\..+/.test(v) || 'E-mail no es valido'
            ],
            userName:'',
            userRules:[
                v => !!v || 'User name es requerido'
            ],
            password:'',
            passwordRules:[
                v => !!v || 'Contraseña es requerido'
            ],
            snackbar:false
        }
    },
    methods:{
        sendCredentialSign(){
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        sendCredentialLog(){
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        resetForm(){
            this.$refs.form.reset()
        },
        resetForm2(){
            this.$refs.form.reset()
        }
    }
}
</script>
<style scope>
    .complete{
        height: 100%!important;
    }
    html::-webkit-scrollbar{
        display: none;
    }
</style>