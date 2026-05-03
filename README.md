# HUMANSAFE OS

**Humansafe OS** è un ecosistema digitale etico e protetto, progettato per prevenire il sovraccarico cognitivo, tutelare il benessere emotivo dell'utente e fungere da ponte tra materia e coscienza. La tecnologia qui è considerata uno strumento al servizio della consapevolezza, mai un fine o un mezzo di sorveglianza.

## 🌟 Principi Fondamentali (Regole d'Oro)
- **Privacy-by-Design Estrema**: I dati personali restano sull'hardware dell'utente o sono gestiti con consenso granulare. Nessun tracciamento o report aziendale invasivo.
- **Salute Mentale e Sociale al Primo Posto**: L'UX e l'UI sono sobrie (shadcn/ui), prive di elementi ansiogeni, gamification aggressiva o monetizzazione intrusiva.
- **Intelligenza Artificiale Etica (XAI)**: Qualsiasi integrazione AI (es. Gemini) è usata come supporto empatico e trasparente. Non ha scopo predittivo invasivo o sostitutivo a uno specialista umano.

---

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Lingua**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **AI / LLM**: Vercel AI SDK (`ai@3.4.15`) + Google Gemini SDK (`@ai-sdk/google`)
- **Backend/DB Previsto**: Supabase / Firebase (attualmente molte funzionalità usano `localStorage` per garantire la privacy-by-design al 100% lato client)

---

## 🚀 Funzionalità Attuali

1. **Simulatore HSI (Human State Index)** (`/hsi`): Permette all'utente di calcolare il proprio livello di energia e stress in base a 4 semplici parametri.
2. **Lo Specchio** (`/mirror`): Lo storico confidenziale delle proprie simulazioni per osservare i propri ritmi nel tempo.
3. **Prevenzione Attiva** (`/prevention`): Interventi mirati ed esercizi pratici per ritrovare equilibrio prima di superare il limite.
4. **Supporto Immediato (SOS)** (`/sos`): Accesso diretto a contatti e procedure di emergenza.
5. **Diario di Bordo & AI** (`/journal`): Una chat "santuario" alimentata da Gemini AI in veste di assistente empatico. 
   - **Local Storage**: Tutta la cronologia dei messaggi viene salvata rigorosamente in locale nel browser dell'utente (`humansafe_journal_messages`).
   - **Metabolizzazione AI**: L'AI pone domande aperte per aiutare l'utente a riflettere senza mai formulare diagnosi cliniche, raccogliendo le testimonianze da presentare, se l'utente lo vorrà, a uno specialista.

---

## ⚙️ Setup e Installazione

1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Configura le Variabili d'Ambiente:
   - Duplica o rinomina il file `.env.example` in `.env.local`
   - Inserisci la tua chiave per Gemini:
     ```env
     GOOGLE_GENERATIVE_AI_API_KEY=inserisci_qui_la_tua_chiave
     ```
3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```
   Il progetto sarà disponibile su `http://localhost:3000`.

---

## 🔮 Roadmap / Prossimi Sviluppi
*Aggiungere qui i task previsti per il futuro (es. integrazione backend definitivo in Supabase con crittografia end-to-end, nuovi esercizi di prevenzione, ecc.)*
