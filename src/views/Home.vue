<template>
	<div class="home">
		<div class="container">
			<b-row>
				<b-col sm="3">
					<LeftMenu />
				</b-col>
				<b-col sm="9">
					<RightContent />
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>

import axios from 'axios';
import LeftMenu from '@/components/LeftMenu.vue'
import RightContent from '@/components/RightContent.vue'

export default {
	name: 'home',
	data() {
		return {
			auth: false
		}
	},
	mounted() {
		let user = localStorage.getItem('user');
		axios.get('http://localhost:5000/api/home/', {
			headers: {
				'x-access-token': user.access_token,
				'x-refesh-token': user.refresh_token
			}
		})
          .then(res => {
            //   if (res.data.authenticated) {
            //   	localStorage.setItem('user', JSON.stringify(res.data));
            //   	this.$router.push('/home');
            //   } else {
            //   	localStorage.removeItem('user');
          		// this.$router.push('/');
            //   }
            console.log('ressssss', res.data);
          })
          .catch(err => {
          	console.log(err);
          })
	},
	components: {
	    LeftMenu, RightContent
	}
}

</script>

<style>
	.home .container {
		margin-top: 50px;
	}
</style>