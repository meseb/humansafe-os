// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">HUMANSAFE OS</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Un’infrastruttura digitale per la prevenzione intelligente del rischio umano.
          </p>
          <p className="text-gray-600">
            Proteggiamo la persona prima del danno, del burnout o del collasso.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">La nostra visione</h2>
          <p className="text-gray-800 mb-6">
            La sicurezza non è reagire all’emergenza. È prevenire con dati etici, design sobrio e rispetto per l’integrità umana.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border border-gray-200 rounded">
              <strong>Privacy-first</strong><br />
              Il tuo dato è tuo. Sempre.
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <strong>Prevenzione attiva</strong><br />
              Interventi prima del collasso.
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <strong>Design etico</strong><br />
              Niente manipolazione. Solo protezione.
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Accedi alle funzionalità</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Simulatore HSI', href: '/hsi' },
              { label: 'Stato Attuale', href: '/mirror' },
              { label: 'Prevenzione', href: '/prevention' },
              { label: 'SOS', href: '/sos' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
