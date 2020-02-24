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
	computed: {
		
	},
	mounted() {
		let user = JSON.parse(localStorage.getItem('user'));
		if (user == null) {
      localStorage.removeItem('user');
			this.$router.push('/');
		} else {
      axios.get('http://localhost:5000/api/home/', {
        headers: {
          'x-access-token': user.access_token,
          'x-refresh-token': user.refresh_token
        }
      })
      .then(res => {
        console.log('Respond|home|mounted: ', res);
        this.auth = true
      })
      .catch(err => {
        console.log('Error|home|mounted: ', err);
        this.$router.push('/login');
      })
    }
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