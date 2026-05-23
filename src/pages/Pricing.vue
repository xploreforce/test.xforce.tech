<script setup>
const emit = defineEmits(['download']);

const plans = [
	{
		name: 'Monthly Personal',
		desc: 'Flexible month-to-month subscription for individual use.',
		price: '¥16.5',
		period: '/ per month',
		popular: false,
		features: [
			'All core features',
			'SSH, FTP, SFTP support',
			'Database management',
			'Flexible payment',
			'Latest updates',
		],
	},
	{
		name: 'Yearly Personal',
		desc: 'Best value for individual developers and administrators.',
		price: '¥169',
		period: '/ per year',
		popular: true,
		features: [
			'Everything in Monthly',
			'Save over 14% annually',
			'Priority support',
			'All future updates',
			'Cost-effective long-term',
		],
	},
	{
		name: 'Yearly Enterprise',
		desc: 'For teams and commercial projects with advanced needs.',
		price: '¥399',
		period: '/ per year',
		popular: false,
		features: [
			'Everything in Personal',
			'Commercial use license',
			'Team deployment',
			'Dedicated support',
			'Custom configuration',
		],
	},
];
</script>

<template>
	<section class="pricing-section">
		<div class="container">
			<div class="pricing-hero">
				<h1 class="text-gradient">Pricing plans</h1>
				<p>Choose the plan that fits your needs. All plans include full access to core features.</p>
			</div>

			<div class="grid-pricing">
				<div
					v-for="(plan, i) in plans"
					:key="i"
					:class="['pricing-card', { popular: plan.popular }]"
				>
					<div v-if="plan.popular" class="pricing-popular-badge">Most Popular</div>
					<div class="pricing-plan-name">{{ plan.name }}</div>
					<div class="pricing-plan-desc">{{ plan.desc }}</div>
					<div class="pricing-price">{{ plan.price }}</div>
					<div class="pricing-price-period">{{ plan.period }}</div>

					<div class="pricing-features-title">Features:</div>
					<div class="pricing-features-list">
						<div v-for="(f, j) in plan.features" :key="j" class="pricing-feature-item">
							<svg class="pricing-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 6 9 17 4 12"/>
							</svg>
							<span>{{ f }}</span>
						</div>
					</div>

					<a href="#" class="button-primary" style="justify-content: center" @click.prevent="emit('download')">
						Get Started
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section-spacing-bottom">
		<div class="container">
			<div class="cta-banner">
				<h2 class="text-gradient">Not sure which plan is right?</h2>
				<p>Start with a free download and upgrade when you're ready.</p>
				<a href="#" class="button-primary" @click.prevent="emit('download')">
					<span>Free Download</span>
					<svg class="button-arrow-icon" viewBox="0 0 20 20" fill="none">
						<path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</a>
			</div>
		</div>
	</section>
</template>
