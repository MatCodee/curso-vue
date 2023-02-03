<template>
<!--
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter msg="Entrando" v-bind:initial_counter="15"/>
  <Counter v-bind:initial_counter=100 />
  -->
  <Indecision/>
</template>

<script>
import Counter from "@/components/Counter";
import Indecision from "@/components/Indecision";
export default {
  name: 'App',
  components: {
    //Counter,
    Indecision,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
