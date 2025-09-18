import {
  Database,
  Eye,
  FileCheck,
  Container,
  ShieldCheck,
  LifeBuoy,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function SecurityFeatures({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <section id={t("security")} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-bold">
            <div className="inline-flex items-center bg-[rgba(137,183,245,0.2)] bg-opacity-90 px-4 py-2 rounded-full text-sm mb-6 sm:mb-8 backdrop-blur-sm">
              <Shield className="text-blue mr-2" size={20} />
              {t("securityBadge")}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t("securityFeaturesTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("securityFeaturesSubTitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("securityFeature1Title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("securityFeature1Desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("securityFeature2Title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("securityFeature2Desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("securityFeature3Title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("securityFeature3Desc")}</p>
            </CardContent>
          </Card>

          {/* <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Container className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("securityFeature4Title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("securityFeature4Desc")}</p>
            </CardContent>
          </Card> */}

          <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-red-50 to-red-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("securityFeature5Title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("securityFeature5Desc")}</p>
            </CardContent>
          </Card>

          {/* <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-teal-50 to-teal-100">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <LifeBuoy className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-900">
                {t("securityFeature6Title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("securityFeature6Desc")}</p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
