import React from "react";
import Cookies from "js-cookie";

const cookieTexts = {
  en: {
    title: 'Your privacy matters to us',
    desc: 'We use cookies to enable essential site functionality, remember your preferences, analyze performance, and personalize content and ads. You can accept all cookies, reject non-essential cookies, or manage your preferences by category.',
    buttons: {
      acceptAll: 'Accept all',
      rejectNonEssential: 'Reject non-essential',
      preferences: 'Preferences',
      save: 'Save preferences',
      close: 'Close',
    },
    categories: {
      necessary: { label: 'Strictly necessary', desc: 'Always active. Required for the website to function.' },
      performance: { label: 'Performance & analytics', desc: 'Help us understand usage to improve the site.' },
      functional: { label: 'Functional', desc: 'Remember your settings and enhance your experience.' },
      marketing: { label: 'Advertising & marketing', desc: 'Personalize ads and measure their effectiveness.' },
    },
    linkLabel: 'Privacy Policy',
  },
  pt: {
    title: 'Sua privacidade é importante para nós',
    desc: 'Usamos cookies para permitir funcionalidades essenciais do site, lembrar suas preferências, analisar o desempenho e personalizar conteúdo e anúncios. Você pode aceitar todos os cookies, rejeitar os não essenciais ou gerenciar suas preferências por categoria.',
    buttons: {
      acceptAll: 'Aceitar todos',
      rejectNonEssential: 'Rejeitar não essenciais',
      preferences: 'Preferências',
      save: 'Salvar preferências',
      close: 'Fechar',
    },
    categories: {
      necessary: { label: 'Estritamente necessários', desc: 'Sempre ativos. Essenciais para o funcionamento do site.' },
      performance: { label: 'Desempenho e analytics', desc: 'Ajudam a entender o uso e melhorar o site.' },
      functional: { label: 'Funcionais', desc: 'Lembram suas configurações e melhoram a experiência.' },
      marketing: { label: 'Publicidade e marketing', desc: 'Personalizam anúncios e medem sua eficácia.' },
    },
    linkLabel: 'Política de Privacidade',
  },
};

const CONSENT_KEY = 'cookie_consent_v2';
const CONSENT_TTL_DAYS = 180;

function getDefaultLang(appLang) {
  if (appLang === 'en' || appLang === 'pt') return appLang;
  return navigator.language?.includes('en') ? 'en' : 'pt';
}

function getStoredConsent() {
  try {
    const raw = Cookies.get(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.timestamp) return null;
    const ageDays = (Date.now() - parsed.timestamp) / (1000 * 60 * 60 * 24);
    if (ageDays > CONSENT_TTL_DAYS) {
      Cookies.remove(CONSENT_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function storeConsent(value) {
  Cookies.set(
    CONSENT_KEY,
    JSON.stringify({ ...value, timestamp: Date.now() }),
    { expires: CONSENT_TTL_DAYS }
  );
}

function applyConsentToScripts(consent) {
  const categories = ['performance', 'functional', 'marketing'];
  categories.forEach((cat) => {
    const allowed = !!consent?.[cat];
    if (!allowed) return;
    const pending = document.querySelectorAll(
      `script[type="text/plain"][data-consent="${cat}"]`
    );
    pending.forEach((oldScript) => {
      const s = document.createElement('script');
      [...oldScript.attributes].forEach((attr) => {
        if (attr.name === 'type') return;
        s.setAttribute(attr.name, attr.value);
      });
      s.type = 'text/javascript';
      s.text = oldScript.text;
      if (oldScript.src) {
        s.src = oldScript.src;
        s.async = oldScript.async;
        s.defer = oldScript.defer;
      }
      oldScript.parentNode?.insertBefore(s, oldScript);
      oldScript.remove();
    });
  });
}

function CookieBanner({ appLang = undefined, privacyPolicyUrl = '#' }) {
  const lang = getDefaultLang(appLang);
  const text = cookieTexts[lang] || cookieTexts.en;

  const stored = getStoredConsent();
  const [open, setOpen] = React.useState(!stored);
  const [prefOpen, setPrefOpen] = React.useState(false);
  const [prefs, setPrefs] = React.useState(
    stored ?? {
      necessary: true,
      performance: false,
      functional: false,
      marketing: false,
    }
  );

  React.useEffect(() => {
    if (stored) {
      applyConsentToScripts(stored);
    }
  }, []); // eslint-disable-line

  function acceptAll() {
    const value = { necessary: true, performance: true, functional: true, marketing: true };
    setPrefs(value);
    storeConsent(value);
    applyConsentToScripts(value);
    setOpen(false);
  }

  function rejectNonEssential() {
    const value = { necessary: true, performance: false, functional: false, marketing: false };
    setPrefs(value);
    storeConsent(value);
    setOpen(false);
  }

  function savePreferences() {
    const value = { ...prefs, necessary: true };
    setPrefs(value);
    storeConsent(value);
    applyConsentToScripts(value);
    setPrefOpen(false);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      {prefOpen && (
        <div className="fixed inset-0 bg-black/40" onClick={() => setPrefOpen(false)} />
      )}

      <div className="mx-auto max-w-5xl m-4 rounded-xl border border-gray-200 bg-white shadow-lg">
        <div className="p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{text.title}</h3>
          <p className="text-sm text-gray-600">
            {text.desc}{' '}
            <a className="text-blue-600 hover:underline" href={privacyPolicyUrl} target="_blank" rel="noreferrer">
              {text.linkLabel}
            </a>
            .
          </p>

          <div className="mt-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="flex gap-2">
              <button onClick={acceptAll} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                {text.buttons.acceptAll}
              </button>
              <button onClick={rejectNonEssential} className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">
                {text.buttons.rejectNonEssential}
              </button>
            </div>
            <div>
              <button onClick={() => setPrefOpen(true)} className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50">
                {text.buttons.preferences}
              </button>
            </div>
          </div>
        </div>
      </div>

      {prefOpen && (
        <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h4 className="text-xl font-semibold text-gray-900">{text.buttons.preferences}</h4>
                <button onClick={() => setPrefOpen(false)} className="text-gray-500 hover:text-gray-700" aria-label={text.buttons.close}>
                  ×
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <Category title={text.categories.necessary.label} desc={text.categories.necessary.desc} checked={true} disabled />
                <Category title={text.categories.performance.label} desc={text.categories.performance.desc} checked={prefs.performance} onChange={(v) => setPrefs((p) => ({ ...p, performance: v }))} />
                <Category title={text.categories.functional.label} desc={text.categories.functional.desc} checked={prefs.functional} onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))} />
                <Category title={text.categories.marketing.label} desc={text.categories.marketing.desc} checked={prefs.marketing} onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))} />
              </div>

              <div className="mt-6 flex gap-3 justify-end">
                <button onClick={() => setPrefOpen(false)} className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">
                  {text.buttons.close}
                </button>
                <button onClick={savePreferences} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  {text.buttons.save}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Category({ title, desc, checked, onChange, disabled }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-medium text-gray-900">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{desc}</div>
        </div>
        <label className="inline-flex items-center cursor-pointer ml-4">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
          />
          <div className={`w-11 h-6 rounded-full transition ${disabled ? 'bg-gray-200' : checked ? 'bg-blue-600' : 'bg-gray-300'} relative`}>
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition ${checked ? 'translate-x-5' : ''}`} />
          </div>
        </label>
      </div>
    </div>
  );
}

export default CookieBanner;