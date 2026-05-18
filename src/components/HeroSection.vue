<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineEmits(['download']);
</script>

<template>
	<div class="hero-section">
		<div class="about">
			<div class="title">
				<div class="app-icon">
					<img src="/images/app_icon.png" />
				</div>
				<div>
					<h1 class="app-name">X-Force Kit</h1>
					<h2 class="slogan">{{ t('SLOGAN') }}</h2>
				</div>
			</div>
			<div class="introduce">{{ t('INTRODUCE') }}</div>
		</div>
		<div class="btn-box">
			<div>
				<div class="btn btn-1" @click="$emit('download')">
					{{ t('DOWNLOAD_BTN') }}
				</div>
			</div>
			<div>
				<a class="btn btn-2" href="#pricing">
					{{ t('BUY_BTN') }}
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.hero-section {
	color: #fff;
	.about {
		.title {
			display: flex;
			align-items: center;
			margin-bottom: 25px;
			.app-icon {
				padding-right: 20px;
				img {
					width: 88px;
				}
			}
			.app-name {
				margin-bottom: 5px;
			}
			.slogan {
				font-size: 20px;
			}
		}
		.introduce {
			line-height: 22px;
			margin-bottom: 15px;
		}
	}
	.btn-box {
		display: flex;
		margin: 0 -5px;
		.btn {
			margin: 5px;
			width: 195px;
			text-align: center;
		}
	}
}
</style>
