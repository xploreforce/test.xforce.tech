<script setup>
defineProps({
	visible: Boolean,
});

const emit = defineEmits(['close']);
</script>

<template>
	<Teleport to="body">
		<div v-if="visible" class="modal-overlay" @click.self="emit('close')">
			<div class="modal-content">
				<button class="modal-close" @click="emit('close')">&times;</button>
				<h3 class="modal-title">Download X-Force Kit</h3>

				<div class="download-grid">
					<div class="download-platform">
						<div class="download-platform-icon">
							<img src="/images/windows.svg" alt="Windows" />
						</div>
						<div class="download-platform-name">Windows</div>
						<div class="download-platform-version">Windows 10+</div>
					</div>
					<div class="download-platform">
						<div class="download-platform-icon">
							<img src="/images/apple.svg" alt="macOS" />
						</div>
						<div class="download-platform-name">macOS</div>
						<div class="download-platform-version">macOS 10.15+</div>
					</div>
				</div>

				<div class="download-links">
					<a href="#" class="download-link-item">
						<span>Windows (x86)</span>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
						</svg>
					</a>
					<a href="#" class="download-link-item">
						<span>macOS (Intel)</span>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
						</svg>
					</a>
					<a href="#" class="download-link-item">
						<span>macOS (Apple Silicon)</span>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</Teleport>
</template>
