<script setup>
import { ref } from 'vue';
import NavBar from '@components/NavBar.vue';
import FooterSection from '@components/FooterSection.vue';
import DownloadModal from '@components/DownloadModal.vue';

const downloadVisible = ref(false);

const openDownload = () => {
	downloadVisible.value = true;
};
const closeDownload = () => {
	downloadVisible.value = false;
};
</script>

<template>
	<NavBar @download="openDownload" />
	<router-view @download="openDownload" />
	<FooterSection />
	<DownloadModal :visible="downloadVisible" @close="closeDownload" />
</template>
