<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div class="services">
		<a-row class="container">
			<a-col :xs="0" :md="6">
				<div class="img-box">
					<img src="/images/service.png" alt="" />
				</div>
			</a-col>
			<a-col :xs="24" :md="18">
				<div class="detail-box">
					<h2>{{ t('SERVICES_TITLE') }}</h2>
					<p>{{ t('SERVICES_DESC') }}</p>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<style lang="less" scoped>
.services {
	padding: 50px 0;
	--tw-bg-opacity: 1;
	background-color: rgb(17 23 34 / var(--tw-bg-opacity));
	color: #ffffff;
	.container {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		.img-box {
			padding: 20px;
			img {
				width: 100%;
			}
		}
		.detail-box {
			padding: 30px;
		}
	}
}
</style>
