<script setup>
const emit = defineEmits(["download"]);
</script>

<template>
	<section class="hero-center-section">
		<div class="container">
			<div class="hero-center-wrap">
				<h1 class="hero-center-title">
					Seamless
					<span class="primary-span">Connections,</span> Complete
					Control
				</h1>

				<p class="hero-center-description">
					X-Force Kit is a powerful all-in-one server management
					terminal. Manage SSH connections, transfer files via
					FTP/SFTP, and visualize your databases — all from a single,
					unified interface.
				</p>

				<div class="hero-center-button-wrap">
					<a
						href="#"
						class="button-primary"
						@click.prevent="emit('download')"
					>
						<span>Free Download</span>
						<svg
							class="button-arrow-icon"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 10h12m0 0l-4-4m4 4l-4 4"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<div class="note">*Available for macOS and Windows</div>
				</div>

				<div class="hero-center-image-wrapper">
					<div class="hero-center-image-wrap">
						<img
							src="/images/hero-dashboard.svg"
							alt="X-Force Kit Dashboard"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
