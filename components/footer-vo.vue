<template>
	<footer>
		<div>
			<h5>Pablo Alejandro Perdomo</h5>
			<div class="description">
				<span>Magister en control de procesos industriales.</span>
				<span>Universidad del Cauca.</span>
				<span>Desarrollador de software.</span>
				<span class="location">Popayán, Cauca</span>
			</div>
		</div>
		<div>
			<div class="social">
				<span><a href="#">Linkedin</a></span>+
				<span><a href="#">Github</a></span>+
				<span><a href="#">Stackoverflow</a></span>
			</div>		
		</div>
	</footer>
</template>

<script>
export default {
	name: 'VoFooter'
}
</script>

<style lang="css" scope>
footer {
	margin-top: 20px;
	display: flex;
	font-family: 'Big Shoulders Display', cursive;
	font-size: 18px;
	flex-direction: row;
	color: white;
	min-width: 100%;
	padding: 40px 40px;
	background-color: #15323A;
}
footer > div {
	width: 50%;
	padding: 10px;
	display: flex;
	flex-direction: column;
}
footer h5 {
	font-size: 24px;
	font-weight: bold; 
	padding: 0px 0px 30px 0px;
}
footer .social a {	
	padding: 5px 30px;
	color: white;
	width: 100%;
	text-decoration: none;
}
footer .social a:hover {
	background: #133039;
	color: white;	
	text-decoration: none;
}
.description {
	display: flex;
	flex-direction: column;
}
.social {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}
.location {
	margin: 10px 0px;
	color: #64777D;
}
footer div:nth-child(2) {
	text-align: right;
	justify-content: right;
	align-content: right;
}
</style>

