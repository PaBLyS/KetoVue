<template>
    <section class="block" v-if="status">
        <p class="text">The cookie settings on this website are set to 'allow all cookies' to give you the very best experience. Please click Accept Cookies to continue to use the site.</p>
        <div class="link-group">
            <nuxt-link to="/" class="link">privacy policy</nuxt-link>
            <button class="button" @click="editStatus">
                accept
                <svg version="1.1" class="check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 442.533 442.533" style="enable-background:new 0 0 442.533 442.533;" xml:space="preserve">
                    <g>
                        <path d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248
                            l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852
                            C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828
                            c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33
                            c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/>
                    </g>
                </svg>
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
    .check {
        height: 15px;
        width: 15px;
        margin-left: 8px;
    }
    .check path{
        fill: #fff;
    }
    .button:hover{
        color: #818181;
    }
    .button:hover .check path{
        fill: #818181;
    }
    .text {
        margin-bottom: 10px;
        line-height: 24px;
        font-size: 14px;
    }
    .link-group {
        display: flex;
        text-transform: uppercase;
        font-size: 13px;
    }
    .link {
        color: #818181;
        text-decoration: none;
    }
    .link:hover{
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
        font-weight: bold;
        letter-spacing: 1px;
    }
    .button:active{
        outline: none;
    }
</style>