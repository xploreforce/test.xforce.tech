<script setup>
import { ref, onMounted } from 'vue';

const content = ref('');

onMounted(async () => {
	try {
		const res = await fetch('/EULA.md');
		const text = await res.text();
		content.value = text;
	} catch {
		content.value = 'Failed to load EULA content.';
	}
});
</script>

<template>
	<section class="eula-section">
		<div class="container">
			<div class="eula-content">
				<h1 class="text-gradient">End User License Agreement</h1>
				<div class="eula-text" v-html="renderMarkdown(content)" v-if="content"></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	methods: {
		renderMarkdown(md) {
			if (!md) return '';
			return md
				.replace(/^### (.*$)/gm, '<h3>$1</h3>')
				.replace(/^## (.*$)/gm, '<h2>$1</h2>')
				.replace(/^# (.*$)/gm, '<h1>$1</h1>')
				.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
				.replace(/\*(.*?)\*/g, '<em>$1</em>')
				.replace(/^\- (.*$)/gm, '<li>$1</li>')
				.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
				.replace(/\n\n/g, '</p><p>')
				.replace(/^(?!<[hulo])/gm, '<p>')
				.replace(/<p><\/p>/g, '');
		},
	},
};
</script>
