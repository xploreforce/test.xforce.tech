<script setup>
const emit = defineEmits(['download']);
</script>

<template>
	<section class="cta-section">
		<div class="container">
			<div class="cta-main-wrap">
				<div class="cta-wrap">
					<div class="grid-cta">
						<div class="cta-title-wrap">
							<h2 class="text-gradient no-margin-bottom">
								Everything you need, in one app
							</h2>
							<a href="#" class="button-primary" style="margin-top: 1.5rem" @click.prevent="emit('download')">
								<span>Download now</span>
								<svg class="button-arrow-icon" viewBox="0 0 20 20" fill="none">
									<path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
						</div>
						<div class="cta-counter-wrap">
							<div class="cta-counter-item">
								<p class="no-margin-bottom">Protocols supported — SSH, FTP, SFTP</p>
								<h2 class="cta-counter-title">3<span class="cta-counter-title-span">+</span></h2>
							</div>
							<div class="cta-counter-item">
								<p class="no-margin-bottom">Platforms — macOS and Windows</p>
								<h2 class="cta-counter-title">2<span class="cta-counter-title-span">x</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div class="cta-decoration one"></div>
				<div class="cta-decoration two"></div>
			</div>
		</div>
	</section>
</template>
