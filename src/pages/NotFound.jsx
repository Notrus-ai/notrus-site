function NotFound({ appLang }) {
  const lang = appLang === 'en' || appLang === 'pt'
    ? appLang
    : (navigator.language?.includes('en') ? 'en' : 'pt');

  const texts = {
    en: {
      code: '404',
      title: 'Page not found',
      back: 'Back to home',
    },
    pt: {
      code: '404',
      title: 'Página não encontrada',
      back: 'Voltar ao início',
    },
  };

  const t = texts[lang] || texts.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-8xl font-bold text-red-500">{t.code}</h1>
      <h2 className="text-2xl mt-4">{t.title}</h2>
      <a href="/" className="mt-6 text-blue-600 underline">{t.back}</a>
    </div>
  );
}

export default NotFound;