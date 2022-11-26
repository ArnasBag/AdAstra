<script>
    import Navbar from './components/Navbar.vue'
    import WelcomeArea from './components/WelcomeArea.vue'

    export default{
        name: 'Home',
        components: {
            Navbar,
            WelcomeArea,
        }
    }
</script>

<template>
    <Navbar/>
    <WelcomeArea/>
</template>


