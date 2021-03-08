<template>
    <v-app teal>
        <!--<SplashScreen :isLoading="isLoading"></SplashScreen>-->
        <div v-if="getStatusLogin && !isLoading">
            <NavBar v-if="!isLoading" v-show="getStatusLogin"/>
        </div>
        <v-main v-if="!isLoading" >
            <Breadcrumbs v-if="$route.meta.breadcrumbs"/>
            <transition name="fade">
            <router-view />
            </transition>
        </v-main>
    </v-app>
</template>

<script>
    import NavBar from "../components/menu/Navbar";
    import SplashScreen from "../components/SplashScreen";
    import PopupDialog from "../components/PopupDialog";
    import Breadcrumbs from "../components/Breadcrumbs";

    export default {
        name: "App",
        components: {
            PopupDialog,
            SplashScreen,
            NavBar,
            Breadcrumbs
        },
        data() {
            return { isLoading: true };
        },
        computed: {
            getStatusLogin: function () {
                if(this.$store.getters.isLoggedIn !== ''){
                    return true
                }else{
                    return false
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false;
            }, 50);
        },
        watch: {
            '$route' (to, from) {
                document.title = to.meta.title ? 'Dashboard - '+ to.meta.title : 'EdenFarm'|| 'EdenFarm'
            }
        },
    };
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>