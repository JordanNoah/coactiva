<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card outlined>
                        <v-img class="white--text align-end" height="200px" src="@/assets/fondoUser.jpg">
                            <v-card-title class="pa-0">
								<v-container>
									<v-row no-gutters>
										<v-col cols="2">
											<div>
												<v-card outlined height="170px" width="170px">
													<div class="imgUser" v-if="$store.state.userData.length==0">
														<image-uploader :preview="true" :className="['fileinput', { 'fileinput--loaded': hasImage }]" capture="environment" :debug="1" doNotResize="gif" :autoRotate="true" outputFormat="verbose" @input="setImage">
															<label for="fileInput" slot="upload-label">
																<span class="upload-caption">
																	<i class="fas fa-camera-retro mx-1"></i>
																	{{hasImage ? "Cambiar" : "Subir"}}
																</span>
															</label>
														</image-uploader>
													</div>
													<div v-if="$store.state.userData.length!=0">
														<v-img :src="$store.state.userData.image" class="imgExist">
															<image-uploader :preview="true" :className="['fileinput', { 'fileinput--loaded': hasImage }]" capture="environment" :debug="1" doNotResize="gif" :autoRotate="true" outputFormat="verbose" @input="setImage">
															<label for="fileInput" slot="upload-label">
																<span class="upload-caption">
																	<i class="fas fa-camera-retro mx-1"></i>
																	{{!hasImage ? "Cambiar" : "Subir"}}
																</span>
															</label>
														</image-uploader>
														</v-img>
													</div>
												</v-card>
											</div>
										</v-col>
									</v-row>
								</v-container>
							</v-card-title>
                        </v-img>
                        <v-card-text>
                            <v-text-field v-model="nombreCuenta" label="Nombres"></v-text-field>
                            <v-text-field v-model="apellidosCuenta" label="Apellidos"></v-text-field>
                            <v-text-field v-model="emailCuenta" label="Email"></v-text-field>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-end">
                            <v-btn outlined color="error">Cancelar</v-btn>
                            <v-btn outlined color="success">Guardar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>        
</template>

<script>
    export default {
		data(){
			return{
				show: true,
				textSnalbar:'',
				hasImage: false,
				image: this.$store.state.userData.image,
				nombreCuenta:this.$store.state.userData.nombres,
				apellidosCuenta:this.$store.state.userData.apellidos,
				emailCuenta:this.$store.state.userData.email,
			}
		},
		methods: {
			setImage: function(output) {
				this.hasImage = true
				this.image = output
			}
		}
	}
</script>
<style>
#fileInput {
  display: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img-preview{
	height: -webkit-fill-available;
	width: 100%;
}
.imgUser label{
	position: absolute;
	width: 100%;
	bottom: 0px;
	cursor: pointer;
	background:rgba(2,1,0,0.7343312324929971);
	color: #fff;
	left: 0px;
}
.imgExist label{
	position: absolute;
	width: 100%;
	bottom: 0px;
	cursor: pointer;
	background:rgba(2,1,0,0.7343312324929971);
	color: #fff;
	left: 0px;
}
</style>