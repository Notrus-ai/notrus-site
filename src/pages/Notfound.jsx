import React from "react"

function NotFound() {
  const { useState, useEffect } = React;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div 
        className={`max-w-2xl mx-auto p-8 text-center rounded-2xl shadow-2xl transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <h1 
          className="text-8xl md:text-9xl font-bold mb-5 animate-bounce"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! Página não encontrada
        </h2>
        
        <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
        </p>
        
        <button
          onClick={handleGoHome}
          className="px-8 py-3 bg-white bg-opacity-90 text-blue-600 font-medium rounded-full transition-all duration-300 hover:bg-white hover:transform hover:-translate-y-1 hover:shadow-lg"
        >
          Voltar ao Início
        </button>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default NotFound;