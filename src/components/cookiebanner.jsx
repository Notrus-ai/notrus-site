import React, { useState, useEffect } from "react";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só mostra se o usuário ainda não aceitou
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) setVisible(true);
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <span>
        Este site utiliza cookies para melhorar sua experiência.{" "}
        <a
          href="/politica-de-cookies"
          className="underline text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a>
      </span>
      <button
        onClick={acceptCookies}
        className="mt-3 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        Aceitar
      </button>
    </div>
  );
}

export default CookieBanner;