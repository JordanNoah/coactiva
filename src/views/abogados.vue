 <template>
    <v-container>
        <v-snackbar top v-model="retroAlimentacion" :color="colorRetro">{{snackText}}</v-snackbar>
        <v-dialog v-model="abogadoAction" persistent max-width="400px">
            <v-card>
                <v-card-title>
                  <span class="headline">{{(this.editAbogado.length==0)?("Añadir"):("Editar")}} Abogado</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col cols="12"><v-text-field clearable :rules="prNombRules" required v-model="prNomb" hide-details label="Primer nombre" outlined dense></v-text-field></v-col>
                                <v-col cols="12"><v-text-field clearable :rules="sgNombRules" required v-model="sgNomb" hide-details label="Segundo nombre" outlined dense></v-text-field></v-col>
                                <v-col cols="12"><v-text-field clearable :rules="prApelliRules" required v-model="prApelli" hide-details label="Primer Apellido" outlined dense></v-text-field></v-col>
                                <v-col cols="12"><v-text-field clearable :rules="sgApelliRules" required v-model="sgApelli" hide-details label="Segundo Apellido" outlined dense></v-text-field></v-col>
                                <v-divider></v-divider>
                                <v-col cols="12"><v-text-field prepend-inner-icon="far fa-id-card" clearable :rules="ciAboRules" required v-model="ciAbo" counter="10" label="Numero de Cedula" outlined dense></v-text-field></v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="resetDialog()">Cerrar</v-btn>
                    <v-btn color="indigo" text @click="action()" :disabled="!valid">{{(this.editAbogado.length==0)?("Guardar"):("Editar")}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="12" class="d-flex justify-end">
                <v-btn depressed dark color="indigo" @click="editAbogado=[];abogadoAction=true">
                    + Añadir
                </v-btn>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="fab fa-searchengin" label="Buscar" single-line hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="list">
                        <template v-slot:item.action="{ item }">
                            <v-btn outlined color="primary" small class="mr-2" @click="editItem(item)"><i class="fas fa-pencil-alt"></i></v-btn>
                            <v-btn outlined color="error" small @click="deleteItem(item)"><i class="far fa-trash-alt"></i></v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            //talbe
            headers:[{text:"Nombres",value:"nombres"},{text:"Apellidos",value:"apellidos"},{text:"Cedula",value:"identificacion"},{text:"Opciones",value:"action",sortable:false}],
            //snackbar
            retroAlimentacion:false,
            colorRetro:'',
            snackText:'',
            //dialog abogado
            valid:true,
            abogadoAction:false,
            search:'',
            list:[],
            editAbogado:[],
            prNomb:'',
            prNombRules: [
                v => !!v || 'Name is required',
                v => (v && v.length > 0) || 'Name must be less than 00 characters',
            ],
            sgNomb:'',
            sgNombRules: [
                v => !!v || 'Name is required',
                v => (v && v.length > 0) || 'Name must be less than 10 characters',
            ],
            prApelli:'',
            prApelliRules: [
                v => !!v || 'Name is required',
                v => (v && v.length > 0) || 'Name must be less than 10 characters',
            ],
            sgApelli:'',
            sgApelliRules: [
                v => !!v || 'Name is required',
                v => (v && v.length > 0) || 'Name must be less than 10 characters',
            ],
            ciAbo:'',
            ciAboRules: [
                v => !!v || 'La cedula es requerida',
                v => (v && v.length == 10) || 'La cedula debe ser de 10 digitos',
            ],
            //
        }
    },
    mounted: function(){
        this.llenarTable()
    },
    methods: {
        action(){
            if(this.$refs.form.validate()){
                const params = new URLSearchParams()
                params.append('prNomb',this.prNomb)
                params.append('sgNomb',this.sgNomb)
                params.append('prApelli',this.prApelli)
                params.append('sgApelli',this.sgApelli)
                params.append('ciAbo',this.ciAbo)
                if(this.editAbogado.length!=0){
                    params.append('id',this.editAbogado.id)
                }
                axios({
                    method:"post",
                    url:"http://localhost/coactiva/metodos/abogados/guardar.php",
                    data:params
                }).then((res) => {
                    if(res.data==1){
                        this.abogadoAction=false
                        this.retroAlimentacion=true
                        this.colorRetro='success'
                        this.snackText='Guardado Correctamente'
                        this.$refs.form.reset()
                        this.llenarTable()
                    }
                    if(res.data==2){
                        this.abogadoAction=false
                        this.retroAlimentacion=true
                        this.colorRetro='success'
                        this.snackText='Modificado Correctamente'
                        this.$refs.form.reset()
                        this.editAbogado=[]
                        this.llenarTable()
                    }
                })
            }
        },
        resetDialog(){
            this.$refs.form.reset()
            this.abogadoAction = false
            this.editAbogado = []
        },
        llenarTable(){
            axios({
                url:"http://localhost/coactiva/metodos/abogados/list.php"
            }).then((res)=>{
                this.list=res.data
            })
        },
        editItem(item){
            this.editAbogado = item
            this.prNomb = this.editAbogado.nombres.split(" ")[0]
            this.sgNomb = this.editAbogado.nombres.split(" ")[1]
            this.prApelli = this.editAbogado.apellidos.split(" ")[0]
            this.sgApelli = this.editAbogado.apellidos.split(" ")[1]
            this.ciAbo = this.editAbogado.identificacion
            this.abogadoAction=true
        }
    }
}
</script>