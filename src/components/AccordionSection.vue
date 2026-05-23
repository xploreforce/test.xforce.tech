<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const items = [
	{
		title: 'Simplify server management',
		desc: 'Manage multiple servers from a single dashboard. No more juggling between different tools — SSH, file transfer, and database operations all in one place.',
	},
	{
		title: 'Secure file transfers',
		desc: 'Transfer files via FTP and SFTP with built-in encryption and breakpoint resume. Handle large files reliably without worrying about interrupted uploads.',
	},
	{
		title: 'Visual database operations',
		desc: 'Run queries, browse tables, perform backups and restores through an intuitive visual interface. Supports MySQL and more — no command-line required.',
	},
];

const toggle = (i) => {
	activeIndex.value = activeIndex.value === i ? -1 : i;
};
</script>

<template>
	<section class="faqs-split-section section-spacing-bottom">
		<div class="container">
			<div class="grid-faqs-split">
				<div class="faqs-split-image-wrapper">
					<div class="faqs-split-image-wrap">
						<img src="/images/feature-overview.svg" alt="X-Force Kit Overview" />
					</div>
				</div>

				<div class="faqs-split-info-wrap">
					<div class="section-title">
						<h2 class="text-gradient no-margin-bottom">Unlock your full potential</h2>
					</div>

					<div>
						<div
							v-for="(item, i) in items"
							:key="i"
							:class="['accordion-item', { active: activeIndex === i }]"
						>
							<div class="accordion-heading" @click="toggle(i)">
								<div class="accordion-heading-wrap">
									<div class="accordion-heading-icon">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="10"/>
											<line x1="12" y1="8" x2="12" y2="16"/>
											<line x1="8" y1="12" x2="16" y2="12"/>
										</svg>
									</div>
									<h3 class="accordion-title">{{ item.title }}</h3>
								</div>
								<div class="accordion-icon-wrap">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="6 9 12 15 18 9"/>
									</svg>
								</div>
							</div>
							<div class="accordion-content">
								<p>{{ item.desc }}</p>
							</div>
						</div>
					</div>

					<div style="margin-top: 1.5rem">
						<RouterLink to="/about" class="button-outline">
							<span>Learn more</span>
							<svg class="button-arrow-icon" viewBox="0 0 20 20" fill="none">
								<path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.accordion-heading-icon svg {
	width: 16px;
	height: 16px;
	color: var(--color--primary-1);
}
.accordion-icon-wrap svg {
	width: 14px;
	height: 14px;
	color: var(--color--gray-4);
}
</style>
