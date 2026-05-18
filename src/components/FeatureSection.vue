<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div class="feature">
		<h1 class="title">{{ t('FEATURE_OVERVIEW') }}</h1>
		<a-row :gutter="{ xs: 0, md: 24 }" class="container">
			<a-col :xs="24" :md="8" class="feature-item">
				<div class="box">
					<div class="img-box">
						<img src="/images/s1.png" alt="" />
					</div>
					<div class="detail-box">
						<h4>{{ t('FEATURE_SSH') }}</h4>
						<p>{{ t('FEATURE_SSH_DESC') }}</p>
					</div>
				</div>
			</a-col>
			<a-col :xs="24" :md="8" class="feature-item">
				<div class="box">
					<div class="img-box">
						<img src="/images/s2.png" alt="" />
					</div>
					<div class="detail-box">
						<h4>{{ t('FEATURE_FTP') }}</h4>
						<p>{{ t('FEATURE_FTP_DESC') }}</p>
					</div>
				</div>
			</a-col>
			<a-col :xs="24" :md="8" class="feature-item">
				<div class="box">
					<div class="img-box">
						<img src="/images/s5.png" alt="" />
					</div>
					<div class="detail-box">
						<h4>{{ t('FEATURE_DATABASE') }}</h4>
						<p>{{ t('FEATURE_DATABASE_DESC') }}</p>
					</div>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<style lang="less" scoped>
.feature {
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	z-index: 2;
	.title {
		padding-top: 50px;
		padding-bottom: 25px;
		text-align: center;
		font-size: 30px;
		font-weight: 600;
	}
	.container {
		width: 100%;
		padding: 0px 15px 50px 15px;
		.feature-item {
			display: flex;
			.box {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				margin-top: 20px;
				padding: 25px;
				background-color: #fafafa;
				box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
				border-radius: 5px;
				.img-box {
					width: 75px;
					height: 75px;
					background-color: #03a7d3;
					border-radius: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					transition: all 0.2s;
					padding: 10px;
					img {
						width: 100%;
						max-width: 45px;
						max-height: 45px;
					}
				}
				.detail-box {
					margin-top: 10px;
					h4 {
						font-weight: bold;
						font-size: 18px;
					}
					a {
						color: #03a7d3;
					}
					a:hover {
						color: #ff4646;
					}
				}
			}
		}
		.box:hover .img-box {
			background-color: #ff4646;
		}
	}
}
</style>
