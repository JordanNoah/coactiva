<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>Top 10 Australian beaches</v-card-title>
                            <a class="btn" @click="toggleShow">set avatar</a>
							<my-upload field="img" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" v-model="show" :width="300" :height="300" url="/upload" :params="params" :headers="headers" img-format="png"></my-upload>
							<v-img :src="imgDataUrl"></v-img>
                        </v-img>
                        <v-card-text>
                            <v-text-field label="Nombres"></v-text-field>
                            <v-text-field label="Apellidos"></v-text-field>
                            <v-text-field label="Email"></v-text-field>
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
	import myUpload from 'vue-image-crop-upload'
    export default {
		data() {
            return {
                show: true,
			params: {
				token: '123456798',
				name: 'avatar'
			},
			headers: {
				smail: '*_~'
			},
            imgDataUrl: '', // the datebase64 url of created image,
            textSnalbar:''
            }
		},
		components: {
			'my-upload': myUpload
		},
		methods: {
			toggleShow() {
				this.show = !this.show;
			},
            /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
			cropSuccess(imgDataUrl, field){
                this.imgDataUrl = imgDataUrl;
                this.textSnalbar = field
			},
			/**
			 * upload success
			 *
			 * [param] jsonData  server api return data, already json encode
			 * [param] field
			 */
			cropUploadSuccess(jsonData, field){
                this.textSnalbar = field
                this.textSnalbar = jsonData
			},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
			cropUploadFail(status, field){
                this.textSnalbar = field
                this.textSnalbar = status
			}
		}
	}
</script>