<template>
	<div>
		<div class="form-group">
			<label>First Name</label>
			<input type="text"
			       class="form-control"
			       v-model="value.firstName"
			       placeholder="Enter Fist Name"
			       @input="nameChanged()">
		</div>
		<div class="form-group">
			<label>Last Name</label>
			<input type="text"
			       class="form-control"
			       v-model="value.lastName"
			       placeholder="Enter Last Name"
			       @input="nameChanged()">
		</div>
	</div>
</template>

<script>
    export default {
        name: "FullName",
        props: ['value'],
        methods: {
            nameChanged() {
                this.$emit('input', this.value)
            }
        },
    }
</script>

<style scoped>

</style>
