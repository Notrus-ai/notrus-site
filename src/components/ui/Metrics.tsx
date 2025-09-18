export default function Metrics({ t }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
          {t("metricsTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              25%
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("metric3Title")}
            </h3>
            <p className="text-gray-600">{t("metric3Desc")}</p>
          </div>

          <div className="p-8">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              60%
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("metric1Title")}
            </h3>
            <p className="text-gray-600">{t("metric1Desc")}</p>
          </div>

          <div className="p-8">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              75%
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("metric2Title")}
            </h3>
            <p className="text-gray-600">{t("metric2Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
