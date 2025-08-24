import Image from "next/image";

export default function Footer({ t }) {
    return (
        <footer className="py-12 px-4 bg-gray-900 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <Image
                            src="/notrus-logo-transparent.png"
                            alt="Notrus"
                            priority
                            width={200}
                            height={200}
                            className="h-8 w-8 rounded-lg"
                        />
                        <span className="text-xl font-bold">Notrus</span>
                    </div>
                    <div className="text-gray-400 text-center md:text-right">
                        <p>{t('footerRights')}</p>
                        <p className="mt-2">{t('footerSubtitle')}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}