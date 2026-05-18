<script setup>
import { reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const selectVersion = reactive({
	Windows: {
		change: 0,
		ext: 'exe',
		select: [{ value: 'xforce_win_x86', label: 'Windows (x86)' }],
	},
	macOS: {
		change: 0,
		ext: 'dmg',
		select: [
			{ value: 'xforce_mac_x86', label: 'macOS (Intel)' },
			{ value: 'xforce_mac_arm', label: 'macOS (Apple Silicon)' },
		],
	},
});

const onChangeVersionHandler = (platform, index) => {
	selectVersion[platform].change = index;
};

const onDownloadHandler = (platform) => {
	const { value } = selectVersion[platform].select[selectVersion[platform].change];
	const a = document.createElement('a');
	a.style.display = 'none';
	a.download = `${value}.${selectVersion[platform].ext}`;
	a.target = 'blank';
	a.href = `http://xforce.u558.com/download/${value}.${selectVersion[platform].ext}`;
	a.click();
	a.remove();
};

onMounted(() => {
	if (navigator.userAgentData) {
		navigator.userAgentData
			.getHighEntropyValues(['platformVersion', 'architecture', 'bitness'])
			.then((ua) => {
				if (['Windows', 'macOS'].indexOf(navigator.userAgentData.platform) > -1) {
					if (ua && ua.architecture) {
						const key = `${navigator.userAgentData.platform}_${ua.architecture}`;
						const index = selectVersion[
							navigator.userAgentData.platform
						].select.findIndex((e) => e.value === key);
						if (index >= 0) {
							selectVersion[navigator.userAgentData.platform].change = index;
						}
					}
				}
			});
	}
});
</script>

<template>
	<a-row class="change-download-version">
		<a-col :xs="24" :sm="12" class="version-item">
			<div class="pic">
				<img class="icon" src="/images/windows.svg" />
			</div>
			<div class="items">
				<div class="item">
					<div class="platform">{{ t('PLATFORM_WINDOWS') }}</div>
					<a-dropdown-button class="select">
						<div @click="onDownloadHandler('Windows')">
							<span>
								{{ selectVersion.Windows.select[selectVersion.Windows.change].label }}
							</span>
						</div>
						<template #overlay>
							<a-menu>
								<a-menu-item
									v-for="(item, index) in selectVersion.Windows.select"
									:key="index"
									@click="onChangeVersionHandler('Windows', index)"
								>
									{{ item.label }}
								</a-menu-item>
							</a-menu>
						</template>
					</a-dropdown-button>
				</div>
			</div>
		</a-col>
		<a-col :xs="24" :sm="12" class="version-item">
			<div class="pic">
				<img class="icon" src="/images/apple.svg" />
			</div>
			<div class="items">
				<div class="item">
					<div class="platform">{{ t('PLATFORM_MACOS') }}</div>
					<a-dropdown-button class="select">
						<div @click="onDownloadHandler('macOS')">
							<span>
								{{ selectVersion.macOS.select[selectVersion.macOS.change].label }}
							</span>
						</div>
						<template #overlay>
							<a-menu>
								<a-menu-item
									v-for="(item, index) in selectVersion.macOS.select"
									:key="index"
									@click="onChangeVersionHandler('macOS', index)"
								>
									{{ item.label }}
								</a-menu-item>
							</a-menu>
						</template>
					</a-dropdown-button>
				</div>
			</div>
		</a-col>
	</a-row>
</template>

<style lang="less" scoped>
.change-download-version {
	width: 100%;
	.version-item {
		margin: 20px 0px;
		.pic {
			display: flex;
			justify-content: center;
			margin-bottom: 10px;
			.icon {
				margin: 0 auto;
				height: 60px;
				width: 60px;
				background-size: contain !important;
			}
		}
		.items {
			display: flex;
			justify-content: center;
			.item {
				display: flex;
				flex-direction: column;
				padding: 2px;
				.platform {
					text-align: center;
					font-size: 12px;
					margin-bottom: 10px;
				}
				.select {
					margin: 0 auto;
					:deep(.ant-btn) {
						height: 40px;
						color: #fff;
						border: 0px;
						background-color: #03a7d3;
					}
					:deep(.ant-dropdown-trigger) {
						border-left: 1px solid #fff;
						width: 40px;
					}
				}
			}
		}
	}
}
</style>
