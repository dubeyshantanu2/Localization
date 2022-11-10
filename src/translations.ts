import { I18n } from 'i18n-js';

const translations = {
  en: { welcome: 'Hello', name: 'Charlie' },
  hi: { welcome: 'नमस्ते' },
  ma: { welcome: 'ഹലോ' },
};

const i18n = new I18n(translations);
i18n.enableFallback = true;

export default function givBacki18n(language: string) {
  i18n.locale = language;
  return i18n;
}
