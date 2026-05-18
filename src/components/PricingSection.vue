<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div id="pricing" class="price-wrapper">
		<h2 class="title">{{ t('PRICING_TITLE') }}</h2>
		<a-row class="container">
			<a-col :xs="24" :md="8">
				<div class="box">
					<div class="detail-box">
						<h6>{{ t('PRICING_MONTH_PERSONAL') }}</h6>
						<h2>
							{{ t('PRICING_UNIT') }}
							<span>{{ t('PRICING_MONTH_PERSONAL_PRICE') }}</span>
						</h2>
						<ul class="price-features">
							<li>{{ t('PRICING_FEATURES.FLEXIBLE_PAYMENT') }}</li>
							<li>{{ t('PRICING_FEATURES.LATEST_UPDATES') }}</li>
							<li>{{ t('PRICING_FEATURES.LOW_COST') }}</li>
						</ul>
					</div>
					<div class="btn-box">
						<a href="">{{ t('PRICING_BUY') }}</a>
					</div>
				</div>
			</a-col>
			<a-col :xs="24" :md="8">
				<div class="box">
					<div class="detail-box">
						<h6>{{ t('PRICING_YEAR_PERSONAL') }}</h6>
						<h2>
							{{ t('PRICING_UNIT') }}
							<span>{{ t('PRICING_YEAR_PERSONAL_PRICE') }}</span>
						</h2>
						<ul class="price-features">
							<li>{{ t('PRICING_FEATURES.FLEXIBLE_PAYMENT') }}</li>
							<li>{{ t('PRICING_FEATURES.LATEST_UPDATES') }}</li>
							<li>{{ t('PRICING_FEATURES.COST_REDUCTION') }}</li>
						</ul>
					</div>
					<div class="btn-box">
						<a href="">{{ t('PRICING_BUY') }}</a>
					</div>
				</div>
			</a-col>
			<a-col :xs="24" :md="8">
				<div class="box">
					<div class="detail-box">
						<h6>{{ t('PRICING_YEAR_BUSINESS') }}</h6>
						<h2>
							{{ t('PRICING_UNIT') }}
							<span>{{ t('PRICING_YEAR_BUSINESS_PRICE') }}</span>
						</h2>
						<ul class="price-features">
							<li>{{ t('PRICING_FEATURES.FLEXIBLE_PAYMENT') }}</li>
							<li>{{ t('PRICING_FEATURES.LATEST_UPDATES') }}</li>
							<li>{{ t('PRICING_FEATURES.COST_REDUCTION') }}</li>
							<li>{{ t('PRICING_FEATURES.COMMERCIAL_USE') }}</li>
						</ul>
					</div>
					<div class="btn-box">
						<a href="">{{ t('PRICING_BUY') }}</a>
					</div>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<style lang="less" scoped>
.price-wrapper {
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	.title {
		font-size: 32px;
		font-weight: 600;
		padding: 40px 0px;
		text-align: center;
	}
	.container {
		padding-bottom: 30px;
		.box {
			height: 100%;
			padding: 0 12px;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: center;
			text-align: center;
			.detail-box {
				flex: 1;
				padding: 20px;
				background-color: #fff;
				border-radius: 25px;
				box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
				h2 {
					font-weight: bold;
					span {
						font-size: 2.5rem;
					}
				}
				h6 {
					text-transform: uppercase;
					color: #03a7d3;
					font-size: 20px;
					margin-top: 30px;
					margin-bottom: 10px;
				}
				.price-features {
					padding: 0;
					list-style-type: none;
					li {
						margin: 10px 0;
					}
				}
			}
			.btn-box {
				padding: 20px 0px;
				a {
					display: inline-block;
					padding: 10px 35px;
					background-color: #ff4646;
					color: #ffffff;
					border-radius: 5px;
					border: 1px solid #ff4646;
					transition: all 0.3s;
					border: none;
				}
			}
			.btn-box a:hover {
				background-color: #03a7d3;
				color: #ffffff;
			}
		}
		.box:hover .detail-box {
			background-color: #03a7d3;
		}
		.box:hover {
			color: #ffffff;
		}
		.box:hover h6 {
			color: #ffffff;
		}
		.box:hover a {
			background-color: #03a7d3;
			color: #ffffff;
		}
	}
}
</style>
