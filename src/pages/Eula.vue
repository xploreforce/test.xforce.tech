<script setup>
import { ref, computed, onMounted } from 'vue';

const content = ref('');

const html = computed(() => {
	return content.value
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
		.replace(/\*(.*)\*/gim, '<em>$1</em>')
		.replace(/\n/gim, '<br />');
});

onMounted(() => {
	fetch('/EULA.md')
		.then((res) => res.text())
		.then((text) => {
			content.value = text;
		});
});
</script>

<template>
	<div class="md" v-html="html"></div>
</template>

<style lang="less" scoped>
.md {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	padding: 12px;
	overflow-y: auto;
}
</style>
