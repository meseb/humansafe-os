'use client';

import { useChat, Message } from 'ai/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, User, Trash2, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function JournalPage() {
  const [isClient, setIsClient] = useState(false);
  
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat({
    api: '/api/chat',
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  // Load messages from local storage on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    const saved = localStorage.getItem('humansafe_journal_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved messages', e);
      }
    }
  }, [setMessages]);

  // Save messages to local storage whenever they change
  useEffect(() => {
    if (isClient && messages.length > 0) {
      localStorage.setItem('humansafe_journal_messages', JSON.stringify(messages));
    }
  }, [messages, isClient]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      // Find the inner div inside ScrollArea viewport
      const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  const clearHistory = () => {
    if (window.confirm("Sei sicuro di voler cancellare tutto il diario? Questa azione non è reversibile.")) {
      setMessages([]);
      localStorage.removeItem('humansafe_journal_messages');
    }
  };

  if (!isClient) return null;

  return (
    <div className="container max-w-4xl py-8 mx-auto px-4">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Diario di Bordo & Rifugio</h1>
        <p className="text-muted-foreground">
          Uno spazio sicuro, privato e locale dove puoi annotare i tuoi pensieri e sfogarti.
          Le conversazioni sono elaborate per offrirti supporto emotivo, ma rimangono salvate solo sul tuo dispositivo.
        </p>
        
        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary font-semibold">Spazio Terapeutico Personale</AlertTitle>
          <AlertDescription className="text-muted-foreground text-sm">
            Questo strumento non sostituisce uno psicologo. È pensato per aiutarti a metabolizzare i momenti difficili e per raccogliere testimonianze preziose che, se vorrai, potrai condividere con un professionista in sede di psicanalisi.
          </AlertDescription>
        </Alert>
      </div>

      <Card className="flex flex-col h-[60vh] min-h-[500px] shadow-lg border-primary/10 bg-background/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Bot className="h-6 w-6 text-primary" />
              Assistente Empatico
            </CardTitle>
            <CardDescription>I tuoi dati non vengono condivisi o profilati.</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={clearHistory} title="Svuota diario">
            <Trash2 className="h-5 w-5 text-destructive/80 hover:text-destructive" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full" ref={scrollRef}>
            <div className="space-y-6 p-4 pb-8">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[300px] text-center space-y-4 text-muted-foreground p-8">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-8 w-8 text-primary/50" />
                  </div>
                  <p className="font-medium text-foreground">Ciao. Questo è il tuo spazio sicuro.</p>
                  <p className="text-sm max-w-sm">Scrivi come ti senti oggi o racconta un pensiero che ti preoccupa. Sono qui per ascoltarti.</p>
                </div>
              ) : (
                messages.map((m: Message) => (
                  <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {m.role !== 'user' && (
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div className={`rounded-2xl px-4 py-3 max-w-[85%] sm:max-w-[75%] ${
                      m.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                        : 'bg-muted/80 text-foreground rounded-tl-sm border border-border/50'
                    }`}>
                      <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
                    </div>
                    {m.role === 'user' && (
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="rounded-2xl px-4 py-4 bg-muted/80 rounded-tl-sm border border-border/50 flex items-center gap-1.5 h-[44px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="p-4 border-t bg-muted/10">
          <form onSubmit={handleSubmit} className="flex w-full gap-3">
            <Input 
              value={input}
              onChange={handleInputChange}
              placeholder="Scrivi un pensiero, un'emozione..." 
              className="flex-1 rounded-full px-4 border-primary/20 focus-visible:ring-primary/30"
              disabled={isLoading}
              autoFocus
            />
            <Button type="submit" disabled={isLoading || !input.trim()} className="rounded-full px-6">
              Invia
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
