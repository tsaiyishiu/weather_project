<template>
		<div class="message_board">
			<div class="banner">
				<h1>Message Board</h1>
			</div>
			<div >
				<b-button variant="outline-warning">Home</b-button>
			</div>
			<div class="message_form">
					<label for="name">Name</label>
					<input v-model="input.messageName" type="text" id="name">
					<label for="comment">Comment</label>
					<textarea v-model="input.messageComment" name="comment" id="comment" cols="30" rows="10"></textarea>
			</div>
			<div class="send">
					<input v-on:click='handleSubmit' type="submit" value="submit">
			</div>
		</div>
</template>
<script>
export default {
	data(){
		return{
			input:{
				messageName:'name',
				messageComment:'哈囉',
			}	
		}
	},
	methods:{
		handleSubmit:function(){
			// const data = {
			// 	messageName: this.input.messageName,
			// 	messageComment: this.input.messageComment,
			// }
			console.log(this.input)
			// console.log(data)
		}
	}
}
</script>
<style lang="scss">
		.message_board{
				.banner{
						h1{
								height: 150px;
								display: flex;
								align-items: center;
								justify-content: center;
								background: #FDC830;  /* fallback for old browsers */
								background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
								background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
						}
				}
				.message_form{
						margin: 0 200px 0 200px;
						label{
								display: block;
								color: #c6a8a8;
								font-size: 25px;
								text-align: center;
								padding-top: 50px;
						}            
						input:nth-child(2){
								width: 100%;
								font-size: 30px;
						}
						textarea:nth-child(4){
								width: 100%;
								height: 200px;
								font-size: 30px;
						}
				}
				.send{
						input{
								margin: 15px 0 0 200px;
						}
				}
		}
</style>