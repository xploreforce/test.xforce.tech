<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const emit = defineEmits(["download"]);
const mobileOpen = ref(false);

const toggleMobile = () => {
	mobileOpen.value = !mobileOpen.value;
};

const closeMobile = () => {
	mobileOpen.value = false;
};
</script>

<template>
	<div class="navbar">
		<div class="container">
			<div class="grid-nav">
				<RouterLink to="/" class="nav-logo" @click="closeMobile">
					<img src="/images/logo.svg" alt="Xplore Force" />
				</RouterLink>

				<nav :class="['nav-menu', { open: mobileOpen }]">
					<RouterLink
						to="/"
						class="nav-link"
						active-class="active"
						@click="closeMobile"
						:exact="true"
						>Home</RouterLink
					>
					<RouterLink
						to="/about"
						class="nav-link"
						active-class="active"
						@click="closeMobile"
						>About</RouterLink
					>
					<div class="nav-dropdown">
						<div class="nav-dropdown-toggle nav-link">
							<span>Pages</span>
							<div class="nav-dropdown-icon"></div>
						</div>
						<div class="nav-dropdown-list">
							<RouterLink
								to="/pricing"
								class="nav-dropdown-link"
								@click="closeMobile"
								>Pricing</RouterLink
							>
							<RouterLink
								to="/eula"
								class="nav-dropdown-link"
								@click="closeMobile"
								>EULA</RouterLink
							>
							<a
								href="#"
								class="nav-dropdown-link"
								@click.prevent="
									emit('download');
									closeMobile();
								"
								>Download</a
							>
						</div>
					</div>
				</nav>

				<div class="right-nav"></div>
			</div>
		</div>
	</div>
</template>
