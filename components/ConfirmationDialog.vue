<template>
    <v-dialog
            v-model="sendData.model"
            persistent
            max-width="470px"
            >
            <v-card class="Heiti" style="border-radius: 15px;">
                <v-card-title>
                <span class="fs25 second-color mt-1">{{sendData.title}}</span>
                </v-card-title>
                <v-card-text>
                    <span class="fs16 mt-1">{{sendData.text}}</span>
                    <pre>{{sendData.data}}</pre>
                </v-card-text>
                <v-card-actions class="pb-4">
                <v-spacer></v-spacer>
                <v-btn 
                    rounded 
                    elevation="0" 
                    class="no-caps px-7" 
                    @click="sendData.model = false"
                    style="background: #E6E9ED;color:#768F9C;height:45px"
                >No</v-btn>
                <v-btn 
                class="px-7 ml-2 no-caps white--text" 
                @click="actions()" 
                elevation="0"
                rounded
                style="background: #768f9c; height:45px"
                >Yes</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>
<script>
import Vue from 'vue'
export default {
    props: {
        sendData:{
            // type: Object,
        },
    },
    methods: {
        successToast() {
            Vue.$toast.open({
                position: 'top-right',
                message: 'Data has been saved successfully',
                type: 'success',
            });
        },
        errorToast(data) {
            for (var key in data) {
                Vue.$toast.open({
                    position: 'top-right',
                    message: data[key],
                    type: 'error',
                });
            }
        },
        errorServerToast() {
            Vue.$toast.open({
                position: 'top-right',
                message: 'Internal Server Error',
                type: 'error',
            });
        },
        actions(){
            let self = this
            if (this.sendData.post) {
                this.$http.post(this.sendData.urlPath,this.sendData.data)
                .then(response => {
                    this.$router.push(this.sendData.nextPath+response.data.data.id)
                    this.successToast()
                })
                .catch(e => {
                    self.$root.$emit('event_error', e.errors)
                    // this.errorToast(e.errors)
                    this.sendData.model = false
                });
            } else if (this.sendData.status) {
                this.$http.put(this.sendData.urlPath,this.sendData.data)
                .then(response => {
                    self.$root.$emit('event_success', true)
                    this.sendData.model = false
                    this.successToast()
                })
                .catch(e => {
                    this.errorServerToast()
                    this.sendData.model = false
                });
            } else {
                this.$http.put(this.sendData.urlPath,this.sendData.data)
                .then(response => {
                    this.$router.push(this.sendData.nextPath)
                    this.successToast()
                })
                .catch(e => {
                    self.$root.$emit('event_error', e.errors)
                    // this.errorToast(e.errors)
                    this.sendData.model = false
                });
            }
        },
    },

}
</script>