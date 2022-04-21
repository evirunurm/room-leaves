<template>
	<main class="user-settings">
		<div class="user-wrapper">
			<h1 class="serif">{{ user["full_name"] + "'s" }} settings</h1>
			<form @submit.prevent="validateData" class="form-container" method="POST" id="settings-form">
				<div class="form-input">
					<label class="label" for="fullname">Full name</label>
					<p v-if="failedName" class="error-message">Your name can't be empty nor be longer than 150 chars</p>
					<input @input="checkSimilarityBD" :placeholder="user['full_name']" :value="user['full_name']"
							 id="fullname" name="fullname"
							 type="text">
				</div>
				<div class="form-input">
					<label class="label" for="settings-email">Email</label>
					<p v-if="failedEmail" class="error-message">Make sure you email follows the example@mail.com
						structure</p>
					<input @input="checkSimilarityBD" :placeholder="user.email" :value="user.email"
							 id="settings-email" name="email"
							 type="email">
				</div>
				<div class="form-input">
					<label class="label" for="address">Address</label>
					<p v-if="failedAddress" class="error-message">Your address can't be longer than 150 chars</p>
					<input @input="checkSimilarityBD" :placeholder="user.address" :value="user.address" id="address"
							 name="address" type="text"
							 maxlength="150">
				</div>
				<div class="form-input">
					<label class="required-label label" for="password">Confirm your password</label>
					<p v-if="failedPass" class="error-message">Check your password</p>
					<input id="password" name="password" type="password" minlength="6" maxlength="16">
				</div>
				<p class="change-pass"><a class="link" href="">Want to change your password?</a></p>
				<button @click="validateData" class="white">Save</button>
			</form>
		</div>

	</main>
</template>

<script>
import UserService from "@/services/UserService";

export default {
	name: "UserSettings",
	emits: ["notification"],
	data() {
		return {
			user: "",
			failedName: false,
			failedEmail: false,
			failedAddress: false,
			failedPass: false,
		}
	},
	methods: {
		async getUser() {
			try {
				let user = await UserService.get(localStorage.getItem("userId"));
				this.user = user.data;
			} catch (err) {
				console.log(err.message);
			}
		},
		checkSimilarityBD() {
			const name = document.getElementById("fullname").value;
			const email = document.getElementById("settings-email").value;
			const address = document.getElementById("address").value;
			if (name === this.user["full_name"] && email === this.user.email && (address === this.user.address || (!address && this.user.address === null))) {
				return false;
			} else {
				return true;
			}
		},
		validateData(e) {
			e.preventDefault()

			const name = document.getElementById("fullname").value;
			const email = document.getElementById("settings-email").value;
			const address = document.getElementById("address").value;
			const password = document.getElementById("password").value;

			// Validate data
			if (name === "" || name === undefined || name.length < 1) {
				this.failedName = true;
			} else {
				this.failedName = false;
			}

			if (email === "" || email === undefined || email.length < 1) {
				this.failedEmail = true;
			} else {
				this.failedEmail = false;
			}

			if (address.length > 150) {
				this.failedAddress = true;
			} else {
				this.failedAddress = false;
			}
			if (!this.failedName && !this.failedEmail && !this.failedAddress) {
				if (this.checkSimilarityBD()) {
					const form = document.getElementById("settings-form");
					this.submitForm(form);
				} else {
					this.sendNotification("Nothing to change here.");
				}
			} else {
				this.sendNotification("You must provide valid information.");
			}

		},
		async submitForm(form) {
			const data = {};
			Object.keys(form).forEach((key) => {
				if (form[key].name !== "" && form[key].name !== undefined) {
					data[form[key].name] = form[key].value;
				}
			});

			try {
				await UserService.update(this.user.id, data);
				this.sendNotification("Your profile has been updated successfully");
				await this.getUser();
			} catch (err) {
				if (err.response.status == 401) {
					this.failedPass = true;
				} else {
					console.log(err.message);
					this.sendNotification(err.message)
				}
			}

		},
		sendNotification(message) {
			this.$emit("notification", message)
		}
	},
	mounted() {
		this.getUser();
	}
}
</script>

<style scoped>

h1 {
	margin: 0 0 1.5rem 0;
}

.user-settings {
	margin: 0 var(--general-margin);
	display: flex;
	justify-content: center;
	margin-bottom: 1.5rem;
}

.user-wrapper {
	width: 100%;
	max-width: var(--general-max-width);
}

.form-input {
	display: flex;
	flex-direction: column;
	max-width: 300px;
}

.form-input input {
	border: 2px solid black;
	padding: 0.5em 1rem;
	color: var(--darkgreen);
}

.form-input input:focus {
	outline: 2px solid var(--pink);
}

.form-container {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.label {
	margin-bottom: 0.25rem;
}

.required-label:after {
	content: " *";
	color: var(--lightgreen);
}


button {
	margin: 2rem 0 1rem 0;
	max-width: 200px;
}

.error-message {
	color: rgba(200, 0, 0);
	font-size: 0.9rem;
}


.link {
	color: var(--lightgreen);
	text-decoration: none;
}

.change-pass {
	margin-top: 0.5rem;
}

.link:hover {
	text-decoration: underline;
}

</style>