<template>
    <section class="block" v-if="status">
        <p class="text">The cookie settings on this website are set to 'allow all cookies' to give you the very best
            experience. Please click Accept Cookies to continue to use the site.</p>
        <div class="link-group">
            <nuxt-link to="/" class="link">privacy policy</nuxt-link>
            <button class="button" @click="editStatus">
                accept ✔
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "customCookieSetting",
        data() {
            return {
                status: true
            }
        },
        methods: {
            editStatus() {
                this.status = false;
            }
        }
    }
</script>

<style scoped>
    .block {
        width: 368px;
        max-width: 85vw;
        position: fixed;
        left: 15px;
        bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 10px 15px;
        background: rgba(20, 20, 20, 0.9);
        z-index: 99;
        color: #fff;

    }

    .button:hover {
        color: #818181;
    }

    .button:hover .check path {
        fill: #818181;
    }

    .text {
        margin-bottom: 10px;
        line-height: 24px;
        font-size: 12px;
    }

    .link-group {
        display: flex;
        text-transform: uppercase;
        font-size: 13px;
    }

    .link {
        color: #818181;
        text-decoration: none;
        font-size: 12px;
    }

    .link:hover {
        color: #fff;
    }

    .button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
        text-transform: uppercase;
        margin-left: 10px;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .button:active {
        outline: none;
    }
</style>