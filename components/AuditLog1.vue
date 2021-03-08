<template>
    <div>
        <div class="title-table">
            <label class="label-title">
            Activites
            </label>
        </div>
        <v-data-table
            :headers="fields"
            :items="datas"
            :items-per-page="10"
            :mobile-breakpoint="0"
            no-data-text
        >
            <template v-slot:item="item">
                <tr>
                    <td>{{ item.item.function }} <br>
                        <span class="fs12" style="color: #768F9C"> {{ item.item.timestamp | moment("DD/MM/YYYY HH:mm:ss") }}</span>
                    </td>
                    <td>{{ item.item.staff ? item.item.staff.name : item.item.merchant.name }}</td>
                    <td>{{ item.item.staff ? item.item.staff.role.name : "-" }}</td>
                    <td>{{ item.item.note }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: 'AuditLog1',
        data() {
            return {
                fields: [
                    {
                        text:'ACTION',
                        sortable: false,
                    },
                    {
                        text:'USER',
                        sortable: false,
                    },
                    {
                        text:'ROLE',
                        sortable: false,
                    },
                    {
                        text:'NOTE',
                        sortable: false,
                    },
                ],
                datas:[]
            }
        },
        props: {
            id: "",
            type: ""
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
        },
        mounted(){
            this.render(this.id,this.type)
        },
    };
</script>