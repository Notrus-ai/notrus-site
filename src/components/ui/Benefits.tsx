import {
  BarChart3,
  Clock,
  Shield,
  TrendingDown,
  Zap,
  Users,
  Puzzle,
  ChartNoAxesCombined,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function Benefits({ t }) {
  return (
    <section id={t("benefits")} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t("whyTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whySubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-pink-50 to-pink-100 h-65 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartNoAxesCombined className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit8Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit8Desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100 h-65 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit1Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit1Desc")}</p>
            </CardContent>
          </Card>

          {/* <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100 h-72 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit2Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit2Desc")}</p>
            </CardContent>
          </Card> */}

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100 h-65 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit3Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit3Desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-orange-100 h-65 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit4Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit4Desc")}</p>
            </CardContent>
          </Card>

          {/* new boxes from here */}
          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-yellow-50 to-yellow-100 h-65 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Puzzle className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit5Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit5Desc")}</p>
            </CardContent>
          </Card>

          {/* <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-gray-100 h-72 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit6Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit6Desc")}</p>
            </CardContent>
          </Card> */}

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-red-50 to-red-100 h-65 flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("benefit7Title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <p className="text-gray-600 break-words">{t("benefit7Desc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
