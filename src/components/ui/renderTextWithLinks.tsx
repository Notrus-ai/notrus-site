import React from "react";

export function renderTextWithLinks(text: string) {
  if (typeof text !== "string") return text as unknown as React.ReactNode;

  const parts = text.split(/(\[.*?\]\(.*?\))/g);

  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      const label = match[1];
      const href = match[2];
      return (
        <a
          key={i}
          href={href}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
