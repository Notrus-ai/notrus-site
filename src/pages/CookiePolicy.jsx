import React from "react";

function CookiePolicy() {
  return (
    <div className="container mx-auto py-20 max-w-2xl px-4">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
      <p className="mb-4">
        Este site utiliza cookies para melhorar sua experiência de navegação, analisar o uso do site e ajudar em nossos esforços de marketing.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">O que são cookies?</h2>
      <p className="mb-4">
        Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles ajudam o site a funcionar corretamente e a lembrar suas preferências.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Como usamos cookies?</h2>
      <p className="mb-4">
        Utilizamos cookies para:
        <ul className="list-disc ml-6">
          <li>Garantir o funcionamento do site</li>
          <li>Lembrar suas preferências</li>
          <li>Analisar o tráfego e uso do site</li>
        </ul>
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Como gerenciar cookies?</h2>
      <p>
        Você pode configurar seu navegador para recusar cookies ou alertá-lo quando um cookie estiver sendo enviado. No entanto, algumas partes do site podem não funcionar corretamente sem eles.
      </p>
    </div>
  );
}

export default CookiePolicy