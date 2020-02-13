<template>
	<div>
		<div class="form-group">
			<label for="firstName">First Name</label>
			<input type="text" class="form-control" id="firstName"
			       :value="firstName" aria-describedby="nameHelp" placeholder="Enter Fist Name" @input="nameChanged(true, $event)">
		</div>
		<div class="form-group">
			<label for="lastName">Last Name</label>
			<input type="text" class="form-control" id="lastName"
			       :value="lastName" aria-describedby="nameHelp" placeholder="Enter Last Name" @input="nameChanged(false, $event)">
		</div>
	</div>
</template>

<script>
    export default {
        name: "FullName",
        props:['value'],
        data() {
            return {
                fullName: ""
            }
        },
	    methods:{
            nameChanged(isFirst, event){
				let name = "";
				if (isFirst) {
				    name= event.target.value + " " + this.lastName
				} else {
                    name= this.firstName + " " + event.target.value
				}
				this.fullName = name
				this.$emit('input', this.fullName)
            }
	    },
	    computed: {
            firstName() {
                return this.value.split(" ")[0]
            },
		    lastName(){
                return this.value.split(" ")[1]
		    }
	    }
    }
</script>

<style scoped>

</style>