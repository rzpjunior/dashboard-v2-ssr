<template>
    <div :class="{ loader: true, fadeout: !isLoading }"> <img style="margin-top: 15%" src="https://dashboard.edenfarm.tech/assets/images/eden-side.png"></div>
</template>

<script>
    export default {
        name: "SplashScreen",
        props: ["isLoading"]
    };
</script>

<style>
    .loader {
        background-color:white;
        bottom: 0;
        color: white;
        display: block;
        font-size: 32px;
        left: 0;
        overflow: hidden;
        padding-top: 10vh;
        position: fixed;
        right: 0;
        text-align: center;
        top: 0;
    }

    .fadeout {
        animation: fadeout 2s forwards;
    }

    @keyframes fadeout {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
</style>
