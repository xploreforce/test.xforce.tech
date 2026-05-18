<script setup>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderNav from '@components/HeaderNav.vue';
import Banner from '@components/Banner.vue';
import HeroSection from '@components/HeroSection.vue';
import FeatureSection from '@components/FeatureSection.vue';
import ServicesSection from '@components/ServicesSection.vue';
import PricingSection from '@components/PricingSection.vue';
import DownloadModal from '@components/DownloadModal.vue';
import FooterSection from '@components/FooterSection.vue';

const { t } = useI18n();

const modal = reactive({
	visible: false,
	cancel: () => {
		modal.visible = false;
	},
});

const openDownloadHandler = () => {
	modal.visible = true;
};
</script>

<template>
	<a-modal
		v-model:open="modal.visible"
		:footer="false"
		:width="560"
		@cancel="modal.cancel"
	>
		<div class="modal">
			<DownloadModal />
		</div>
	</a-modal>
	<div class="container">
		<Banner>
			<HeaderNav />
			<a-row :gutter="{ xs: 0, sm: 0, md: 50 }" class="header-wrapper-about">
				<a-col :xs="24" :sm="24" :md="14">
					<HeroSection @download="openDownloadHandler" />
				</a-col>
				<a-col :xs="0" :sm="0" :md="10">
					<div class="img-box">
						<img src="/images/welcome.png" alt="" />
					</div>
				</a-col>
			</a-row>
		</Banner>
		<FeatureSection />
		<ServicesSection />
		<PricingSection />
		<FooterSection />
	</div>
</template>

<style lang="less" scoped>
.modal {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 6px;
}
.container {
	background-color: #f8f8f8;
	.header-wrapper-about {
		padding: 60px 20px 100px 20px;
		flex: 1;
		display: flex;
		align-items: center;
		.img-box {
			img {
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>
