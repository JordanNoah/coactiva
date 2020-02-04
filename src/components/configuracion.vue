<template>
    <v-content>
        <!---->
            <v-snackbar top :color="snackbarColor" v-model="snackbarStatus">{{ snackbarText }}<v-btn dark text @click="snackbarStatus = false"> Cerrar </v-btn></v-snackbar>
        <!---->
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            <v-tabs>
                                <v-tab @click="pestana=1">REQUERIMIENTO DE PAGO VOLUNTARIO</v-tab>
                                <v-tab @click="pestana=2">AUTO DE PAGO</v-tab>
                                <v-tab @click="pestana=3">OFICIO</v-tab>
                            </v-tabs>
                        </v-card-title>
                        <v-card-text>
                            <div v-show="pestana==1">
                                <div class="toolbarEditor2"></div>
                                <ckeditor :editor="editor" v-model="rqpagvol" @ready="onReady2"></ckeditor>
                            </div>
                            <div v-show="pestana==2">
                                <div class="toolbarEditor3"></div>
                                <ckeditor :editor="editor" v-model="insEcu" @ready="onReady3"></ckeditor>
                            </div>
                            <div v-show="pestana==3">
                                <div class="toolbarEditor4"></div>
                                <ckeditor :editor="editor" v-model="oficio" @ready="onReady4"></ckeditor>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-footer padless class="stikcy py-2">
            <v-row no-gutters>
                <v-col cols="12">
                    <v-btn outlined class="mx-3" color="error"> Cancelar </v-btn>
                    <v-btn outlined color="success" @click="saveConfig()"> Guardar </v-btn>
                </v-col>
            </v-row>
        </v-footer>
    </v-content>
</template>
<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import axios from 'axios'
export default {
    data(){
        return {
            rqpagvol:'',
            insEcu:'',
            oficio:'',
            snackbarText:'',
            snackbarStatus:false,
            snackbarColor:'',
            editor: DecoupledEditor,
            pestana:1
        }
    },
    mounted: function(){
        this.traerConfig()
    },
    methods:{
        onReady2( editor )  {
            var toolbar = document.getElementsByClassName("toolbarEditor2")
            toolbar[0].appendChild( editor.ui.view.toolbar.element )
        },
        onReady3( editor )  {
            var toolbar = document.getElementsByClassName("toolbarEditor3")
            toolbar[0].appendChild( editor.ui.view.toolbar.element )
        },
        onReady4( editor )  {
            var toolbar = document.getElementsByClassName("toolbarEditor4")
            toolbar[0].appendChild( editor.ui.view.toolbar.element )
		},
        traerConfig(){
            axios({
                url:"http://localhost/coactiva/metodos/config/general.php"
            }).then((res)=>{
                if(res.data!="0"){
                    this.rqpagvol=res.data[0]["rqpagvol"]
                    this.insEcu=res.data[0]["insEcu"]
                    this.oficio=res.data[0]["oficio"]
                }
            })
        },
        saveConfig(){
            const params = new URLSearchParams
            params.append("caratula",this.caratula)
            params.append("rqpagvol",this.rqpagvol)
            params.append("insEcu",this.insEcu)
            params.append("oficio",this.oficio)

            axios({
                method:"post",
                url:"http://localhost/coactiva/metodos/config/changeConfig.php",
                data:params
            }).then((res) => {
                if(res.data=="1"){
                    this.snackbarColor = "success"
                    this.snackbarText = "Guardado Exitoso!!!"
                    this.snackbarStatus = true
                }else{
                    this.snackbarText = "Contacte con RAPH3"
                    this.snackbarStatus = true
                }
            })
        }
    }
}
</script>
<style scope>
    .stikcy{
        position: sticky!important;
        bottom: 0px;
    }
    .ck-content{
        border: 1px solid rgba(169,169,169,0.49343487394957986) !important;
    }
</style>