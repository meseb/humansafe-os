// src/app/sos/page.tsx
import { SOSButton } from '@/components/modules/SOSButton';

export default function SOSPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Supporto immediato</h1>
      <p className="text-gray-700 mb-8">
        Se senti di non farcela, non sei solo. Attiva il ponte con la rete di supporto.
      </p>

      <SOSButton />

      <div className="mt-10 text-sm text-gray-600 space-y-2">
        <p>Questa azione può:</p>
        <ul className="list-disc list-inside text-left inline-block">
          <li>Invitare un operatore umano</li>
          <li>Notificare il tuo referente aziendale (se attivo)</li>
          <li>Connetterti a servizi locali di emergenza</li>
        </ul>
        <p className="mt-4">Tutte le azioni rispettano la tua privacy e il tuo consenso.</p>
      </div>
    </div>
  );
}
