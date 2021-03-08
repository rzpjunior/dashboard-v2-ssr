<template>
    <section>
        <v-navigation-drawer enable-resize-watcher :permanent="modeDesktop" v-model="drawer" app color="#F6FBF6" height="100%" :dark="true">
            <div class="pt-5"/>
            <v-list class="Heiti fs13">
                <v-list-item>
                    <img src="/img/eden-logo.png" width="80%" height="80%" class="pl-md-4">
                </v-list-item>
                <div class="pt-6"/>
                <v-list-item color="#4ABFB2" to="/Home">
                    <v-list-item-icon class="p-icon-nav" style="margin-right:25px">
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="fs13">Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-group group="inventory"  v-privilege="'ivt'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>mdi-layers</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Inventory</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/inventory/product" v-privilege="'prd'" >
                            <v-list-item-content class="p-icon-nav"> Product </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                        <v-list-item to="/inventory/product-tag" v-privilege="'pta'" >
                            <v-list-item-content class="p-icon-nav"> Product Tag</v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'pta'">
                        <v-list-item to="/inventory/uom" v-privilege="'uom'">
                            <v-list-item-content class="p-icon-nav"> UOM </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'uom'">
                        <v-list-item to="/inventory/category" v-privilege="'ctg'">
                            <v-list-item-content class="p-icon-nav"> Category </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'ctg'">
                    </div>
                </v-list-group>


                <v-list-group group="price"  v-privilege="'user'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>monetization_on</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Price</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/price/product"  v-privilege="'uom'">
                            <v-list-item-content class="p-icon-nav"> Product Price </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'uom'">
                        <v-list-item to="/price/set"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Price Set </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                    </div>
                </v-list-group>


                <v-list-group group="customer"  v-privilege="'user'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>face</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Customer</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/customer/merchant"  v-privilege="'arc'">
                            <v-list-item-content class="p-icon-nav"> Main Outlet </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'arc'">
                        <v-list-item to="/customer/branch"  v-privilege="'arc'">
                            <v-list-item-content class="p-icon-nav"> Outlet </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'arc'">
                        <v-list-item to="/customer/agent"  v-privilege="'arc'">
                            <v-list-item-content class="p-icon-nav"> Agent </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'arc'">
                        <v-list-item to="/customer/archetype"  v-privilege="'arc'">
                            <v-list-item-content class="p-icon-nav"> Archetype </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'arc'">
                        <v-list-item to="/customer/tag"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Customer Tag </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                        <v-list-item to="/customer/prospect-customer"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Prospect Customer </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                    </div>
                </v-list-group>


                <v-list-group group="sales"  v-privilege="'user'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>shopping_cart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Sales</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/sales/person"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Sales Person </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                    </div>
                </v-list-group>

                <v-list-group group="promotion"  v-privilege="'promotion'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>confirmation_number</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Promotion</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/promotion/voucher"  v-privilege="'vou'">
                            <v-list-item-content class="p-icon-nav"> Voucher </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'vou'">
                    </div>
                </v-list-group>

                <v-list-group group="purchase">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>mdi-cart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Purchase</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/purchase/supplier"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Supplier </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                        <v-list-item to="/purchase/supplier_type"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Supplier Type </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                        <v-list-item to="/purchase/prospective/supplier"  v-privilege="'prd'">
                            <v-list-item-content class="p-icon-nav"> Prospective Supplier </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                    </div>
                </v-list-group>

                <v-list-group group="warehouse">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>store</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Warehouse</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/warehouse/stock"  v-privilege="'stc'">
                            <v-list-item-content class="p-icon-nav"> Stock </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'prd'">
                    </div>
                </v-list-group>


                <v-list-group group="user"  v-privilege="'user'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>supervised_user_circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">User</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/user/role"  v-privilege="'rol'">
                            <v-list-item-content class="p-icon-nav"> Role </v-list-item-content>
                            <v-list-item-icon>
                                <v-icon v-text="'settings'"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'rol'">
                        <v-list-item to="/user/user"  v-privilege="'usr'">
                            <v-list-item-content class="p-icon-nav"> User </v-list-item-content>
                            <v-list-item-icon>
                                <v-icon v-text="'settings'"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'usr'">
                    </div>
                </v-list-group>

                <v-list-group group="configuration"  v-privilege="'app'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>settings_applications</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Configuration</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/configuration/application" >
                            <v-list-item-content class="p-icon-nav"> Application </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                        <v-list-item to="/configuration/area" >
                            <v-list-item-content class="p-icon-nav"> Area </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                        <!--
                            note:
                            kalau pakai "/configuration/area/policy" akan membuka tab "/configuration/area"
                        -->
                        <v-list-item to="/configuration/area_policy" >
                            <v-list-item-content class="p-icon-nav"> Area Policy </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                        <v-list-item to="/configuration/wrt" >
                            <v-list-item-content class="p-icon-nav"> WRT </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                        <v-list-item to="/configuration/warehouse" >
                            <v-list-item-content class="p-icon-nav"> Warehouse </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                        <v-list-item to="/configuration/user_profile" >
                            <v-list-item-content class="p-icon-nav"> User Profile </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                    </div>
                </v-list-group>

                <v-list-group group="finance"  v-privilege="'fin'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>receipt</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Finance</v-list-item-title>
                    </template>
                    <div style="box-shadow: inset 3px 2px 20px #e4e4e4;">
                        <v-list-item to="/finance/payment"  v-privilege="'uom'">
                            <v-list-item-content class="p-icon-nav"> Payment Method </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar" v-privilege="'uom'">
                        <v-list-item to="/finance/spt/term" >
                            <v-list-item-content class="p-icon-nav"> Sales Term </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                        <v-list-item to="/finance/term" >
                            <v-list-item-content class="p-icon-nav"> Purchase Term </v-list-item-content>
                        </v-list-item>
                        <hr class="mx-9 hr-navbar">
                    </div>
                </v-list-group>
            </v-list>

        </v-navigation-drawer>

        <v-app-bar app color="#FAFAFA" flat class="Heiti fs14">
            <!-- <v-app-bar-nav-icon v-if="!modeDesktop" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
            <v-btn icon v-on="on" v-if="!modeDesktop" @click.stop="drawer = !drawer">
                <img src="/icon/menu.png">
            </v-btn>
            <v-toolbar-title class="fs14">{{routeName}}</v-toolbar-title>
            <div class="flex-grow-1 men" ></div>
            <v-btn
                v-if="modeDesktop"
                class="no-caps fs14"
                text
                name="logout-btn"
                color="#768F9C"
                @click="signoutButtonPressed"
                >
                <span class="fs13">Logout</span> 
                    <v-icon right>
                        power_settings_new
                    </v-icon>
            </v-btn>
            
            <v-card-actions v-else @click.stop="drawerRight = !drawerRight">
                <v-list-item style="margin-right:-28px">
                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        alt=""
                        src="/img/avatar.png"
                    ></v-img>
                    </v-list-item-avatar>
                    <!-- <div>
                        <div class="fs14">Dindin Mahpudin</div>
                        <div class="fs12" style="color:#768F9C">Tech Dev</div>
                    </div> -->
                    <v-menu offset-y >
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <img src="/icon/polygon.png">
                        </v-btn>
                    </template>
                    <v-list>
                            <v-list-item  :to="'/user/user/detail/'">
                                <v-list-item-content>
                                    <v-list-item-title>My Profile</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item  @click="signoutButtonPressed">
                                <v-list-item-content>
                                    <v-list-item-title>Logout</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item>
            </v-card-actions>
            
        </v-app-bar>
    </section>
</template>
<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            selectedItem: 1,
            drawer: null,
            drawerRight: null,
            dark_mode:false,
            me:{},
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
            modeDesktop : null
        }),
        methods: {
            signoutButtonPressed() {
                this.$store.dispatch('logout');
                localStorage.removeItem('priv')
                this.$router.push({ name: "LoginView" });
            },
            darkMode(){
                let value
                value = localStorage.getItem('dark_mode')

                if(value === 'true'){
                    localStorage.removeItem('dark_mode')
                    localStorage.setItem('dark_mode','false')
                    this.$vuetify.theme.dark = false
                    this.dark_mode=false
                }else if(value === 'false' || value === null){
                    localStorage.removeItem('dark_mode')
                    localStorage.setItem('dark_mode','true')
                    localStorage.setItem('dark_mode','true')
                    this.$vuetify.theme.dark = true
                    this.dark_mode=true
                }
            }
        },
        mounted(){
            this.me = this.$store.state.staff
            window.onresize = () => {
                if (window.screen.width > 1024) {
                    this.modeDesktop = true
                } else {
                    this.modeDesktop = false
                }
            }
        },
        created () {
            let value = localStorage.getItem('dark_mode')
            if(value === 'false' || value === null){
                this.$vuetify.theme.dark = false
                this.dark_mode = false
            }else if (value === 'true'){
                this.$vuetify.theme.dark = true
                this.dark_mode = true
            }
            if (window.screen.width > 1024) {
                this.modeDesktop = true
            } else {
                this.modeDesktop = false
            }
        },
        beforeCreate() {
            if (window.screen.width > 1024) {
                this.modeDesktop = true
            } else {
                this.modeDesktop = false
            }
        },
        computed: {
            routeName() {
                return this.$route.meta.title;
            }
        }
    };
</script>
<style scoped>
/* background v-list active */
.v-list .v-list-item--active {
    color: inherit;
    background-image: url(/img/bg_navbar.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
/* padding icon */
.p-icon-nav {
    padding-left:20px; 
}
</style>