import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export default function Cta({ t }) {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    {t('finalTitle')}
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    {t('finalSubtitle')}
                </p>
                <a href="mailto:contact@notrus.ai">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                        {t('finalButton')}
                        <ArrowRight className="ml-2" size={20} />
                    </Button>
                </a>
            </div>
        </section>
    )
}