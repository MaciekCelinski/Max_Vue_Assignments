<template>
    <div class="col-xs-12 col-sm-6">
        <p>Details:</p>
        <p v-if="!server">Please select Server</p>
        <p v-else>Status: {{server.status}}</p>
        <button @click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>
    import {serverBuss} from "../../main";
    export default {
        data(){
            return {
                server:null
            }
        },
        created(){
            serverBuss.$on('showDetails', (server) => {
                this.server = server
            })
        },
        methods: {
            resetStatus(){
                this.server.status = "Normal"
            }
        }
    }
</script>

<style>

</style>
