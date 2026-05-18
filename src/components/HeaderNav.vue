<script setup>
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const onChangeLocaleHandler = ({ key }) => {
	locale.value = key;
	localStorage.setItem('lang', key);
};
</script>

<template>
	<header class="header-wrapper-nav">
		<div class="logo"></div>
		<div class="navbar">
			<div class="navbar-nav">
				<div class="navbar-nav-item">
					<a-dropdown>
						<div class="navbar-nav-locale">
							<div class="icon">
								<img :src="`/images/lang/${locale}.png`" />
							</div>
							<div class="title">
								{{ t(`LANG.${locale.toLocaleUpperCase()}`) }}
							</div>
						</div>
						<template #overlay>
							<a-menu @click="onChangeLocaleHandler">
								<a-menu-item key="zh">
									<span class="navbar-nav-locale">
										<div class="icon">
											<img src="/images/lang/zh.png" />
										</div>
										<div class="title">{{ t('LANG.ZH') }}</div>
									</span>
								</a-menu-item>
								<a-menu-item key="en">
									<span class="navbar-nav-locale">
										<div class="icon">
											<img src="/images/lang/en.png" />
										</div>
										<div class="title">{{ t('LANG.EN') }}</div>
									</span>
								</a-menu-item>
							</a-menu>
						</template>
					</a-dropdown>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="less" scoped>
.header-wrapper-nav {
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	.logo {
		width: 10px;
	}
	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		.navbar-nav {
			display: flex;
			width: 100%;
			color: #fff;
			font-weight: bolder;
			background: inherit;
			.navbar-nav-item {
				margin: 0px 12px;
				cursor: pointer;
			}
		}
	}
}
.navbar-nav-locale {
	display: flex;
	align-items: center;
	.icon {
		display: flex;
		align-items: center;
		height: 15px;
		margin-right: 5px;
		img {
			width: 22px;
		}
	}
}
</style>
