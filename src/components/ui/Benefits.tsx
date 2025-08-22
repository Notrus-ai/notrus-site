import { BarChart3, Clock, TrendingDown, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function Benefits({ t }) {
    return (
        <section id="beneficios" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        {t('whyTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('whySubtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingDown className="text-white" size={32} />
                            </div>
                            <CardTitle className="text-xl text-gray-900">{t('benefit1Title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{t('benefit1Desc')}</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="text-white" size={32} />
                            </div>
                            <CardTitle className="text-xl text-gray-900">{t('benefit2Title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{t('benefit2Desc')}</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="text-white" size={32} />
                            </div>
                            <CardTitle className="text-xl text-gray-900">{t('benefit3Title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{t('benefit3Desc')}</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                        <CardHeader>
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="text-white" size={32} />
                            </div>
                            <CardTitle className="text-xl text-gray-900">{t('benefit4Title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{t('benefit4Desc')}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}