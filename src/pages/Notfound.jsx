import React from "react"

function NotFound(){
    return (
        <div style={{
            background: "#f8f8f8",
            color: "#333",
            fontFamily: "Liberation Mono , Courier New , sans-serif",
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1 style={{fontSize: "6em", color: "#e74c3c", margin: 0}}>404</h1>
            <h2 style={{fontSize: "2em", margin: "0.5em 0"}}>Página não encontrada</h2>
            <p style={{fontSize: "1.2em", marginBottom: "2em"}}>Desculpe, a página que você procura não existe ou foi removida.</p>
            <a href="/" style={{
                color: "#3498db",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.1em"
            }}>Voltar para a página inicial
            </a>
        </div>
    );
}

export default NotFound;