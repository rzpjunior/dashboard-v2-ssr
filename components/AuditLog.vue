<template>
    <v-dialog v-model="openDialog" max-width="1280" persistent >
        <v-card
                v-if="loading"
                color="primary"
        >
            <v-card-text>
                Please Wait
                <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
        <v-card
                v-if="!loading"
                class="pa-3"
        >
            <v-subheader class="mb-5">
                <h2>History</h2>
                <v-spacer></v-spacer>
                <div style="text-align: right;margin-right:-25px;margin-top:-30px">
                    <v-btn
                            icon
                            @click="closeDialog"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
            </v-subheader>

            <v-data-table
                    :headers="table.fields"
                    :items="datas"
                    :items-per-page="10"
                    :mobile-breakpoint="0"
                    no-data-text
            >
                <template v-slot:item="item">
                    <tr>
                        <td>{{ item.item.function }}</td>
                        <td>{{ item.item.timestamp | moment("DD/MM/YYYY HH:mm:ss") }}</td>
                        <td>{{ item.item.staff ? item.item.staff.name : item.item.merchant.name }}</td>
                        <td>{{ item.item.staff ? item.item.staff.role.name : "-" }}</td>
                        <td>{{ item.item.note }}</td>
                    </tr>
                </template>

            </v-data-table>

        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'AuditLog',
        data() {
            return {
                table: {
                    fields: [
                        {
                            text:'ACTION',
                            width: "20%",
                            sortable: false,
                        },
                        {
                            text:'TIMESTAMP',
                            width: "10%",
                            sortable: false,
                        },
                        {
                            text:'USER',
                            width: "10%",
                            sortable: false,
                        },
                        {
                            text:'ROLE',
                            width: "20%",
                            sortable: false,
                        },
                        {
                            text:'NOTE',
                            width: "15%",
                            sortable: false,
                        },
                    ],
                },
                datas:[],
                openDialog:false,
                loading:false,
            }
        },
        methods:{
            async render(id,type){
               await this.$http.get("/audit_log",{params:{
                        perpage:10000,
                        embeds:'staff_id__role_id,merchant_id',
                        conditions:'ref_id.e:'+id +'|type:'+ type,
                    }}).then(response => {
                   this.loading = false;
                   this.datas = response.data.data
                    if(this.datas === null){
                        this.datas = []
                    }
                });
            },
            closeDialog(){
                this.loading = false;
                this.datas = [];
                this.openDialog = false;
            }
        },
        mounted(){
            this.$root.$on('auditLogs', data => {
                this.openDialog = data.open;
                this.render(data.id,data.type)
            });
        },
        watch: {
            'openDialog': {
                handler: function (val) {
                    this.loading = true
                },
                deep: true
            },
        },
    };
</script>