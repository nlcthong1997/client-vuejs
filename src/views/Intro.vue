<template>
	<div class="intro">
		<div class="intro-card">
		  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
		    <template v-slot:header>Bank</template>

		    <template v-slot:lead>
		      Chào mừng bạn đến với ngân hàng của chúng tôi
		    </template>

		    <hr class="my-4">

		    <p>
		      	<router-link to="/login">
		      		<b-button variant="warning">Đăng nhập</b-button>
		      	</router-link>
		    </p>
		  </b-jumbotron>
		</div>  
	</div>
</template>

<style>
	.intro {
		margin-top: 50px;
	}
	.intro-card {
		margin: auto;
		width: 80%;
	}
</style>