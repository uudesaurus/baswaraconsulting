"use client"

import Image from "next/image"

const clients = [
  {
    name: "World Bank",
    logo: "/logo/WB.png",
    height: 60
  },
  {
    name: "Chemonics",
    logo: "/logo/Chemonics.png",
    height: 60
  },
  {
    name: "UNDP",
    logo: "/logo/UNDP.png",
    height: 60
  },
  {
    name: "Panasonic",
    logo: "/logo/Panasonic.png",
    height: 60
  },
  {
    name: "Sumitomo",
    logo: "/logo/Sumitomo.png",
    height: 60
  },
  {
    name: "Atlas Copco",
    logo: "/logo/Atlas.png",
    height: 60
  }
]

// Duplicate array multiple times for smoother infinite scroll
const allClients = [...clients, ...clients, ...clients]

export default function ClientMarquee() {
  return (
    <div className="w-full overflow-hidden py-16 relative">
      <div 
        className="relative flex overflow-x-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        {/* First marquee container */}
        <div className="animate-marquee-infinite whitespace-nowrap py-4 flex items-center">
          {allClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center"
            >
              <div className="relative w-[220px] flex items-center justify-center hover:scale-110 transition-transform duration-300 px-4">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={220}
                  height={client.height}
                  className="object-contain"
                  style={{
                    maxHeight: `${client.height}px`
                  }}
                  priority={index < clients.length}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second marquee container for seamless loop */}
        <div className="animate-marquee-infinite whitespace-nowrap py-4 flex items-center" aria-hidden="true">
          {allClients.map((client, index) => (
            <div
              key={`${client.name}-second-${index}`}
              className="flex items-center justify-center"
            >
              <div className="relative w-[220px] flex items-center justify-center hover:scale-110 transition-transform duration-300 px-4">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={220}
                  height={client.height}
                  className="object-contain"
                  style={{
                    maxHeight: `${client.height}px`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 