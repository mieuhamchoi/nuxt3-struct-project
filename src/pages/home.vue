<template>
    <h1>Hello Home</h1>
    <MyComponent/>
    <img src="@assets/favicon.ico">
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</template>

<script>
import MyComponent from '@components/my-component.vue';
export default {
    components: {
        MyComponent,
    },
    computeds: {
    },
    created() {
    }
}
</script>
