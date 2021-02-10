<template>
	<header>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">Vision Online</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
	
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item @click="redirect('/')" href="#">Ejercicio 1</b-nav-item>
					<b-nav-item @click="redirect('/shapes')" href="#">Ejercicio 2</b-nav-item>
					<b-nav-item @click="redirect('/data')" href="#">Datos</b-nav-item>
				</b-navbar-nav>
	
				<b-navbar-nav class="ml-auto">	
					<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>
	
					<b-nav-item-dropdown right>
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>			
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</header>
</template>

<script>
export default {
	name: 'HeaderVo',
	methods: {
		redirect: function (dir) {
	  		this.$router.push(dir);
		}
	}
}
</script>

<style lang="css" scope>
header {
	margin-bottom: 10px;
}
</style>
