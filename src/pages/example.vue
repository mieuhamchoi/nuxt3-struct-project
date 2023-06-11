<template>
  <h1>Hello Home</h1>
  <Example />
  <img src="@assets/favicon.ico" />
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <span>Store: {{ counter }}</span>
</template>

<script lang="ts">
import { ExampleStore } from  '../stores/Example.store';
import Example from '@components/example.vue';
export default {
  components: {
    Example,
  },
  computed: {
    counter() {
      return ExampleStore().counter;
    },
  },
  async created() {
    //console.log("this.ExampleStore", ExampleStore().counter)
    let result = await ExampleStore().getData();
    console.log("result", result)
  },
};
</script>
