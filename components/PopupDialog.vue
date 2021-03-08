<template>
    <v-dialog v-model="value" max-width="470px">
        <v-card class="Heiti pa-6" style="border-radius: 15px;">
            <v-row no-gutters style="text-align: start">
                <v-col cols="12">
                    <h3 class="fs25 second-color mt-1">{{ sendData.action }}</h3>
                </v-col>
                <v-col cols="12" class="mt-3">
                    <span class="fs16 mt-1">
                        Are you sure you want to {{ sendData.action }} this {{ sendData.valueName }}? <br>
                        {{ sendData.valueText }}
                    </span>
                </v-col>
                <v-col cols="12" v-if="sendData.status === '3'" class="pt-5">
                    <v-textarea
                            name="deletion_note"
                            v-model="deletion_note"
                            :rules="val_note_short"
                            counter="100"
                            required
                            outlined
                            class="pl-4 pt-0 pr-4 mt-0"
                    >
                        <template v-slot:label>
                            <div>
                                Deletion Note*
                            </div>
                        </template>
                    </v-textarea>
                </v-col>
            </v-row>

            <v-card-actions class="justify-end mt-5">
                <!-- <v-btn
                        class="rounded-xl mx-2"
                        color="#ffffff"
                        style="color: black;text-transform: capitalize;"
                        @click="close()"
                > -->
                <v-btn
                        rounded 
                        elevation="0" 
                        class="no-caps px-7"
                        style="background: #E6E9ED;color:#768F9C;height:45px"
                        @click="close()"
                >
                    No
                </v-btn>
                <div v-if="sendData.status === '1' || sendData.status === '2'">
                    <v-btn
                            class="px-7 ml-2 no-caps white--text" 
                            elevation="0"
                            rounded
                            style="background: #768f9c; height:45px"
                            @click="actions()"
                    >
                        Yes
                    </v-btn>
                </div>
                <div v-if="sendData.status === '3'">
                    <v-btn
                            class="px-7 ml-2 no-caps white--text" 
                            elevation="0"
                            rounded
                            style="background: #768f9c; height:45px"
                            @click="deleted()"
                    >
                        OK Delete
                    </v-btn>
                </div>
                <!--register / decline-->
                <div v-if="sendData.status === '4' || sendData.status === '5'">
                    <v-btn
                            class="px-7 ml-2 no-caps white--text" 
                            elevation="0"
                            rounded
                            style="background: #768f9c; height:45px"
                            @click="actions2()"
                    >
                        Yes
                    </v-btn>
                </div>

            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'PopupDialog',
        props: {
            value:'',
            sendData:{
                // type: Object,
            },
        },
        data () {
            return {
                deletion_note:'',
            }
        },
        methods: {
            close() {
                this.$emit('input', !this.value);
            },
            actions(){
                this.$http.put(this.sendData.urlPath,{})
                    .then(response => {
                        // this.$router.push('/finance/spt/term'); //tidak bisa path ke diri sendiri, harus di reload
                        this.$router.push(this.sendData.parentPath)
                    })
                    .catch(e => {
                        window.location.reload();
                        this.error = e.errors
                    });
            },
            deleted(){
                this.$http.put(this.sendData.urlPath,
                    {
                        deletion_note: this.deletion_note,
                    })
                    .then(response => {
                        window.location.reload(this.sendData.parentPath)
                    })
                    .catch(e => {
                        this.$router.push(this.sendData.parentPath);
                        this.error = e.errors
                    });
            },
            actions2(){
                this.$http.put(this.sendData.urlPath,
                    {
                        supplier_type_id : "65536",
                        address: this.sendData.address,
                        name: this.sendData.name,
                        phone_number: this.sendData.phone_number,
                        pic_name: this.sendData.pic_name,
                        pic_phone_number: this.sendData.pic_phone_number,
                        sub_district_id: this.sendData.sub_district_id
                    })
                    .then(response => {
                        // this.$router.push('/finance/spt/term'); //tidak bisa path ke diri sendiri, harus di reload
                        this.$router.push(this.sendData.parentPath)
                    })
                    .catch(e => {
                        // window.location.reload();
                        this.error = e.errors
                    });
            },
        },
    };
</script>
