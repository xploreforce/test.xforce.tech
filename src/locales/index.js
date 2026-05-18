import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

let lang = 'en';

const browserLang = navigator.language || navigator.userLanguage;
if (browserLang && browserLang.startsWith('zh')) {
	lang = 'zh';
}

const stored = localStorage.getItem('lang');

const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: stored || lang,
	messages: { zh, en },
});

export default i18n;
