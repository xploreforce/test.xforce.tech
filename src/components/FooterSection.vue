<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div class="contact-wrapper">
		<a-row class="container">
			<a-col :xs="24" :md="14">
				<div class="box">
					<h3 class="title">{{ t('ABOUT_US') }}</h3>
					<div>{{ t('ABOUT_US_DESC') }}</div>
				</div>
			</a-col>
			<a-col :xs="24" :md="10">
				<div class="box">
					<h3 class="title">{{ t('FOLLOW_US') }}</h3>
					<div class="follow-us">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-twitter"></use>
						</svg>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-facebook"></use>
						</svg>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-linkedin"></use>
						</svg>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-YouTube"></use>
						</svg>
					</div>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<style lang="less" scoped>
.contact-wrapper {
	padding-top: 20px;
	padding-bottom: 30px;
	background-color: #e8e8e8;
	.container {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		.box {
			padding: 10px 25px;
			.title {
				margin-top: 20px;
				margin-bottom: 10px;
				font-size: 16px;
				font-family: work sans, sans-serif;
				font-weight: 600;
			}
			.icon {
				margin-right: 2px;
				font-size: 22px;
				width: 1em;
				height: 1em;
				vertical-align: -0.15em;
				fill: currentColor;
				overflow: hidden;
			}
		}
		.follow-us {
			margin-top: 10px;
		}
	}
}
</style>
