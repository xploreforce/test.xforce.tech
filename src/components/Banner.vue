<template>
	<div class="banner-wrapper">
		<div class="container">
			<slot></slot>
		</div>
		<div class="banner-background">
			<img class="banner-background-img" src="/images/background.svg" />
		</div>
		<div class="banner-background-mask"></div>
	</div>
</template>

<style lang="less">
.banner-wrapper {
	position: relative;
	display: flex;
	display: -webkit-box;
	display: -ms-flexbox;
	flex-direction: column;
	z-index: 1;
	background-color: rgb(17 23 34 / 1);
	overflow: hidden;
	.banner-background-mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 0.4;
		background-image: url('/images/noise-pattern.svg');
	}
	.banner-background {
		position: absolute;
		top: 0;
		right: 0;
		z-index: -2;
		.banner-background-img {
			width: 100%;
		}
	}
	.container {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
	}
}
</style>
