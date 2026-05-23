<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-border-wrap">
				<div class="footer-wrap">
					<div class="footer-subscribe">
						<div>
							<h2 class="subscribe-title">Stay updated with product news and releases.</h2>
							<form class="form-subscribe" @submit.prevent>
								<input class="form-input" type="email" placeholder="Enter your email" />
								<button class="button-primary button-subscribe" type="submit">Subscribe</button>
							</form>
						</div>
						<p class="footer-copyright">
							&copy; {{ new Date().getFullYear() }} XForce Tech. All rights reserved.
						</p>
					</div>

					<div class="footer-item">
						<div class="grid-footer-menu">
							<div>
								<h2 class="footer-title">Pages</h2>
								<div class="footer-links">
									<RouterLink to="/" class="footer-link">Home</RouterLink>
									<RouterLink to="/about" class="footer-link">About</RouterLink>
									<RouterLink to="/pricing" class="footer-link">Pricing</RouterLink>
									<RouterLink to="/eula" class="footer-link">EULA</RouterLink>
								</div>
							</div>
							<div>
								<h2 class="footer-title">About Us</h2>
								<div class="footer-links">
									<p style="line-height: 1.6">
										XForce Tech is a technology team focused on network tools and security research,
										delivering high-quality solutions for developers and system administrators.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="footer-divider"></div>

				<div class="footer-bottom-wrap">
					<RouterLink to="/" class="footer-logo">
						<img src="/images/logo.svg" alt="X-Force Kit" />
					</RouterLink>
					<div class="footer-social-inline">
						<a href="https://github.com/xploreforce" target="_blank" class="footer-social-link" aria-label="GitHub">
							<svg class="footer-social-icon" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
