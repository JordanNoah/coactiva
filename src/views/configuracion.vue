<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Caratula</span>
                        </v-card-title>
                        <v-card-text>
                            <div class="toolbarEditor"></div>
                            <ckeditor :editor="editor" v-model="oficio" :config="editorConfig" @ready="onReady"></ckeditor>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            <span class="headline">REQUERIMIENTO DE PAGO VOLUNTARIO</span>
                        </v-card-title>
                        <v-card-text>
                            <div class="toolbarEditor2"></div>
                            <ckeditor :editor="editor" v-model="rqpagvol" :config="editorConfig" @ready="onReady2"></ckeditor>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            <span class="headline">INSTITUTO ECUATORIANO DE SEGURIDAD SOCIAL</span>
                        </v-card-title>
                        <v-card-text>
                            <div class="toolbarEditor3"></div>
                            <ckeditor :editor="editor" v-model="insEcu" :config="editorConfig" @ready="onReady3"></ckeditor>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            <span class="headline">OFICIO</span>
                        </v-card-title>
                        <v-card-text>
                            <div class="toolbarEditor4"></div>
                            <ckeditor :editor="editor" v-model="oficio" :config="editorConfig" @ready="onReady4"></ckeditor>
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
            caratula:'',
            rqpagvol:'',
            insEcu:'',
            oficio:'',
            snackbarText:'',
            editor: DecoupledEditor,
            editorConfig: {
			}
        }
    },
    mounted: function(){
        this.traerConfig()
    },
    methods:{
        onReady( editor )  {
            var toolbar = document.getElementsByClassName("toolbarEditor")
            toolbar[0].appendChild( editor.ui.view.toolbar.element )
        },
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
                    this.caratula=res.data[0]["caratula"]
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
                this.oficio = res.data
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