import React from "react";
import Cookies from "js-cookie";

function CookieBanner() {
  const [accepted, setAccepted] = React.useState(Cookies.get("cookie_consent"));

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <p className="mb-2 md:mb-0 text-sm">
        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com o uso de cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Aceitar
      </button>
    </div>
  );
}

export default CookieBanner;