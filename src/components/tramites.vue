<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="list" sort-by="calories" class="elevation-1">
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Coactivados</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="700px">
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" outlined dark class="mb-2" v-on="on" @click="dialog!=dialog">+ Nuevo Coactivado</v-btn>
                                </template>
                                <v-card outlined>
                                    <v-card-title>
                                        <span class="headline">Añadir</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-text-field v-model="tituloCredit" label="No. de titulo de crédito"></v-text-field>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-menu v-model="menu2" :close-on-content-click="false" :nudge-top="0" transition="scale-transition" min-width="290px">
                                                        <template v-slot:activator="{ on }">
                                                            <v-text-field v-model="computedDateFormatted" label="Fecha de emisión" readonly v-on="on"></v-text-field>
                                                        </template>
                                                        <v-date-picker no-title v-model="date" locale="es" @input="menu2 = false"></v-date-picker>
                                                    </v-menu>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-text-field v-model="razonSocial" label="Razón social"></v-text-field>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-select v-model="secreAboga" label="Secretario/Abogado" :items="abogados" item-text="nombres" item-value="id"></v-select>
                                                </v-col>
                                                <v-col cols="5">
                                                    <v-text-field v-model="regCont" label="Registro único de contribuyentes"></v-text-field>
                                                </v-col>
                                                <v-col cols="4">
                                                    <v-text-field v-model="cedRepre" label="Cedula del representante"></v-text-field>
                                                </v-col>
                                                <v-col cols="3">
                                                    <v-text-field v-model="cantTot" label="Cantidad total"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="nomRepre" label="Nombre representante legal"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field v-model="emaDes" label="Email Destinatario"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog= !dialog">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="guardar">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <v-btn small class="mr-2" @click="editItem(item)">edit</v-btn>
                        <v-btn small @click="deleteItem(item)">delete</v-btn>
                    </template>
                    <template v-slot:no-data>
                        <span>Sin registros</span>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            headers:[{text:"Titulo de credito",value:"tituloCredit"},{text:"Fecha",value:"computedDateFormatted"},{text:"Razon Social",value:"razonSocial"},{text:"Abogado/Secretario",value:"secreAboga",sortable:false}],
            list:[],
            abogados:[],
            dialog:false,
            date: new Date().toISOString().substr(0, 10),
            menu2:'',
            ///informacion a enviar 
            tituloCredit:'',
            razonSocial:'',
            secreAboga:'',
            regCont:'',
            cedRepre:'',
            cantTot:'',
            nomRepre:'',
            emaDes:'',
            snakbarText:''
        }
    },
    mounted: function(){
        this.listarAbogados()
    },
    computed:{
        computedDateFormatted () {
            return this.formatDate(this.date)
        },
    },
    methods:{
        formatDate (date) {
            if (!date) return null
                const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        guardar(){
            const params = new URLSearchParams
            params.append('tituloCredit',this.tituloCredit)
            params.append('computedDateFormatted',this.computedDateFormatted)
            params.append('razonSocial',this.razonSocial)
            params.append('secreAboga',this.secreAboga)
            params.append('regCont',this.regCont)
            params.append('cedRepre',this.cedRepre)
            params.append('cantTot',this.cantTot)
            params.append('nomRepre',this.nomRepre)
            params.append('emaDes',this.emaDes)

            axios({
                method:"post",
                url:"http://localhost/coactiva/metodos/tramite/guardar.php",
                data:params
            }).then((res) => {
                if(res.data!="0"){
                    window.open('http://localhost/coactiva/pdf/documents/index.php?id='+res.data[0].id, '_blank');
                }
            })
        },
        listarAbogados(){
            axios({
                url:"http://localhost/coactiva/metodos/abogados/list.php"
            }).then((res)=>{
                this.abogados=res.data
            })
        }
    }
}
</script>