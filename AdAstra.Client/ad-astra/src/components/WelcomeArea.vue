<script>
import Button from './Button.vue'

export default{
    name: 'WelcomeArea',
    components: {
        Button,
    }
}

</script>

<template>
    <div class="welcome-area">
        <div class="welcome-text">
            <h1 class="welcome-greeting">Welcome to <span class="logo">Ad Astra</span></h1>
            <div class="welcome-description-container">
                <p class="welcome-description">A social network for aspiring and professional astrophotographers to share exciting space photos.</p>
                <Button text="Get started"/>
                <h3 style="color: white; display: inline; margin-right: 30px;">or</h3>
                <Button text="Log in"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .welcome-area{
        display: flex;
        justify-content: left;
        align-items: center;
        height: 100%;
        background: url('../assets/images/moon2.png');
        background-repeat: no-repeat;
        background-position: 100% 50%;
        background-size:contain;
    }

    .welcome-text{
        margin-left: 5%;
        margin-bottom: 10%;
    }

    .welcome-greeting{
        font-size: 3rem;
    }

    .welcome-description-container{
        width: 80%;
    }

    .welcome-description{
        margin-top: 5%;
        margin-bottom: 20px;
        color: white;
        font-size: 1.1rem;
    }

    .logo{
        color: #8338ec;
        font-size: 3rem;
    }

    h1{
        color: white;
    }
</style>