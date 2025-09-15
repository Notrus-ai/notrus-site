import {
  CheckCircle,
  CreditCard,
  Package,
  RefreshCw,
  Lightbulb,
} from "lucide-react";
import { Badge } from "./badge";

export default function SIO({ t }) {
  return (
    <section
      id="sio"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-bold">
            <div className="inline-flex items-center bg-[rgba(137,183,245,0.2)] bg-opacity-90 px-4 py-2 rounded-full text-sm mb-6 sm:mb-8 backdrop-blur-sm">
              <Lightbulb className="text-blue mr-2" size={20} />
              {t("sioBadge")}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t("sioTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("sioSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {t("feature1Title")}
                </h3>
                <p className="text-gray-600">{t("feature1Desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <RefreshCw className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {t("feature2Title")}
                </h3>
                <p className="text-gray-600">{t("feature2Desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {t("feature3Title")}
                </h3>
                <p className="text-gray-600">{t("feature3Desc")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {t("feature4Title")}
                </h3>
                <p className="text-gray-600">{t("feature4Desc")}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">
                  {t("sioPanelTitle")}
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      {t("panel1Label")}
                    </span>
                    <Badge className="bg-green-100 text-green-800">1,247</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      {t("panel2Label")}
                    </span>
                    <Badge className="bg-blue-100 text-blue-800">89</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      {t("panel3Label")}
                    </span>
                    <Badge className="bg-purple-100 text-purple-800">156</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      {t("panel4Label")}
                    </span>
                    <Badge className="bg-orange-100 text-orange-800">
                      R$ 45.230
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
