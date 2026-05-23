<script setup>
const emit = defineEmits(['download']);

const values = [
	{
		icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
		title: 'Quality First',
		desc: 'We obsess over building reliable, polished tools. Every feature is tested across platforms and edge cases before release.',
	},
	{
		icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
		title: 'Security Focused',
		desc: 'Network security is in our DNA. All connections use industry-standard encryption, and your credentials never leave your device.',
	},
	{
		icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
		title: 'Developer-Centric',
		desc: 'Built by developers for developers. We understand the daily workflow of managing servers, databases, and deployments.',
	},
];
</script>

<template>
	<section class="about-hero">
		<div class="container">
			<h1 class="text-gradient">Powering the future of server management</h1>
			<p>
				XForce Tech is a technology team focused on network tools and security research.
				We build high-quality solutions that empower developers and system administrators
				to work more efficiently and securely.
			</p>
		</div>
	</section>

	<section class="about-section">
		<div class="container">
			<div class="section-title text-center">
				<h2 class="text-gradient no-margin-bottom">Why choose X-Force Kit?</h2>
			</div>

			<div class="about-grid">
				<div v-for="(v, i) in values" :key="i" class="about-card">
					<div class="about-card-icon" v-html="v.icon"></div>
					<h3>{{ v.title }}</h3>
					<p class="no-margin-bottom">{{ v.desc }}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section-spacing">
		<div class="container">
			<div class="cta-banner">
				<h2 class="text-gradient">Ready to streamline your workflow?</h2>
				<p>Download X-Force Kit today and manage all your servers from a single interface.</p>
				<a href="#" class="button-primary" @click.prevent="emit('download')">
					<span>Free Download</span>
					<svg class="button-arrow-icon" viewBox="0 0 20 20" fill="none">
						<path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</a>
				<div class="note">* No credit card required. Cancel anytime.</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.about-card-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	margin-bottom: 1.25rem;
}
.about-card-icon :deep(svg) {
	width: 32px;
	height: 32px;
	color: var(--color--primary-1);
}
</style>
