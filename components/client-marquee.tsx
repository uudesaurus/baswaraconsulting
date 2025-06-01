import React from 'react';

const clients = [
  "World Bank",
  "USAID",
  "UNDP",
  "Panasonic",
  "Sumitomo",
  "Atlas Copco",
  // Duplicate for continuous effect
  "World Bank",
  "USAID",
  "UNDP",
  "Panasonic",
  "Sumitomo",
  "Atlas Copco"
];

export function ClientMarquee() {
  return (
    <div className="relative flex overflow-hidden py-12">
      <div className="animate-marquee whitespace-nowrap">
        {clients.map((client, i) => (
          <span
            key={i}
            className="mx-8 text-2xl font-medium text-muted-foreground"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
} 