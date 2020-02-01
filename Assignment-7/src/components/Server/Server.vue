<template>
	<li class="list-group-item selected" @click="showDetails">
		Server #{{server.id}}
	</li>
</template>

<script>
    import {serverBuss} from "../../main";

    export default {
        name: "Server.vue",
        props: ["server"],
        methods: {
            showDetails() {
                serverBuss.$emit('showDetails', this.server)
            }
        }
    }
</script>

<style scoped>
.selected {
	cursor: pointer;
	text-align: center;
}
</style>