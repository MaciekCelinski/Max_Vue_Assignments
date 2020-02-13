<template>
	<div class="container">
		<form>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

					<form>
                        <FullName v-model="fullName"/>
						<div class="form-group">
							<label for="email">Email address</label>
							<input v-model.once="email" type="email" class="form-control" id="email"
							       aria-describedby="emailHelp" placeholder="Enter email">
							<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
								else.</small>
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input v-model="password" type="password" class="form-control" id="password"
							       placeholder="Password">
						</div>

                        <div class="form-group">
                            <label>
                                <input type="radio" value="yes" v-model="storeData">Yes
                            </label>
                            <label>
                                <input type="radio" value="no" v-model="storeData">No
                            </label>
                        </div>

<!--						<div class="form-check">-->
<!--							<input v-model="storeData" type="checkbox" class="form-check-input" id="storeData">-->
<!--							<label class="form-check-label" for="storeData">Store Data</label>-->
<!--						</div>-->
						<button @click.prevent="submitData()" type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</form>
		<hr>
		<div v-if="showData" class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>Your Data</h4>
					</div>
					<div class="panel-body">
						<p>Full Name: {{fullName.firstName}} {{fullName.lastName}}</p>
						<p>Mail: {{email}}</p>
						<p>Password: {{password}}</p>
						<p>Store in Database?: {{storeData ? "Yes" : "No"}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import FullName from "./FullName.vue";
    export default {
        data() {
            return {
                // fullName: 'Mac Cel',
                fullName: {},
                email: "",
                password: "",
                storeData: "no",
                showData: false
            }
        },
        methods: {
            submitData() {
                this.storeData === "yes" ? this.showData = true : this.showData = false
            }
        },
        components: {
           FullName
        }
    }
</script>

<style>
</style>
