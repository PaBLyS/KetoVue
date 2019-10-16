<template>
    <b-container fluid class="header-sticky">
        <b-container>
            <b-row>
                <NuxtLink to="/" class="underline">HOME</NuxtLink>
                <NuxtLink to="/catalog" class="underline">CATALOG</NuxtLink>
                <NuxtLink to="/about-us" class="underline">ABOUT US</NuxtLink>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        name: "customHeaderSticky"
    }
</script>

<style scoped>
    .header-sticky {
        height: 45px;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        background: #232323;
        z-index: 999;
    }

    .header-sticky a {
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: .05em;
        margin: 0 50px 0 0;
    }

    .header-sticky a:hover {
        text-decoration: none;
    }
</style>
