import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Cta({ t }) {
    const pathname = usePathname();
    const language = pathname.includes('/en') ? 'en' : 'pt'
    // const contactLink = language === 'en' ? '/en/contact' : '/pt/contato';
    const localized = (en: string, pt: string) => (language === "en" ? en : pt);
    const contactLink = localized("/en/contact", "/pt/contato");
    const demoLink = contactLink;

    return (
        <section id={t('contact')} className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    {t('finalTitle')}
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    {t('finalSubtitle')}
                </p>
                <Link href={demoLink}>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                        {t('finalButton')}
                        <ArrowRight className="ml-2" size={20} />
                    </Button>
                </Link>
            </div>
        </section>
    )
}