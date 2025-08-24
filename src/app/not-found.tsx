import Link from "next/link";
import './globals.css'

export default function NotFound() {
    const lang = location.href.includes('/en') ? 'en' : 'pt';

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h1 className="text-9xl font-extrabold text-gray-300 mb-6">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h2>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                {t.back}
            </Link>
        </div>
    );
}
