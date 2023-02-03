<template>
    <h2>{{ customMsg }}</h2>
    <p data-textid="counter" >{{counter}}</p>
    <button v-on:click="increment">increment</button>
    <button v-on:click="decrement">decrement</button>
</template>

<script>
export default {
    //name: "counter",
    props: {
        msg: String,
        initial_counter: {
            type: Number,
            default: 100,
            //required: true,
            validator(value){
                return value > 0
            }
        },
    },
    data() {
        return {
            counter: this.initial_counter,
        }
    },

    methods: {
      increment() { this.counter++; },
      decrement() { if(this.counter > 0) this.counter--; }  
    },
    computed: {
        customMsg() {
            return this.msg ? this.msg : "Counter";
        }
    }
}
</script>

<style scoped>
p {
    font-size: 40px;
}
</style>