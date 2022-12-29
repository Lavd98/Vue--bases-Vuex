<template>
    <h1>Counter en Vuex</h1>
    <h2>Direct Acces: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment" >+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">+Random</button>

    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>

    <h2>Direct getter: {{ $store.getters.squareCount }}</h2>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {

    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },

    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
        },
        ...mapActions('counter', ['incrementRandomInt']),
        // ...mapActions('counter', {
        //     randomInt: 'incrementRandomInt'
        // })
    }
        

}
</script>