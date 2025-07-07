"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Bot, User, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { getAIRecommendations } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "bot" | "error";
  content: string | React.ReactNode;
};

export function BeautyAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello! I'm your personal beauty advisor. How can I help you today? You can ask about your skin type, concerns, or a desired look.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const response = await getAIRecommendations(input);
    
    if (response.success && response.data) {
        const botResponse: Message = {
            role: "bot",
            content: (
                <div className="space-y-2">
                    <p>Here are some recommendations for you:</p>
                    <ul className="space-y-2">
                        {response.data.recommendations.map((rec, index) => (
                            <li key={index} className="p-2 rounded-md bg-secondary/50">
                                <p className="font-semibold">{rec.productName}</p>
                                <p className="text-sm text-muted-foreground">{rec.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        };
        setMessages((prev) => [...prev, botResponse]);
    } else {
        const errorMessage: Message = { role: "error", content: response.error || "An unknown error occurred." };
        setMessages((prev) => [...prev, errorMessage]);
    }
    
    setIsLoading(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
          aria-label="Open AI Beauty Advisor"
        >
          {isOpen ? <X/> : <MessageSquare />}
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className="w-[80vw] max-w-sm p-0 rounded-lg shadow-2xl mr-2 mb-2">
        <div className="flex flex-col h-[60vh]">
          <header className="p-4 border-b bg-secondary">
            <h3 className="font-headline text-lg">AI Beauty Advisor</h3>
          </header>
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={cn(
                    "flex items-start gap-2",
                    message.role === "user" ? "justify-end" : "justify-start"
                )}>
                  {message.role !== "user" && (
                     <Avatar className="h-8 w-8">
                       <AvatarFallback><Bot /></AvatarFallback>
                     </Avatar>
                  )}
                  <div className={cn(
                      "max-w-[80%] rounded-lg p-3 text-sm",
                      message.role === "user" && "bg-primary text-primary-foreground",
                      message.role === "bot" && "bg-secondary",
                      message.role === "error" && "bg-destructive text-destructive-foreground"
                  )}>
                    {message.content}
                  </div>
                   {message.role === "user" && (
                     <Avatar className="h-8 w-8">
                       <AvatarFallback><User /></AvatarFallback>
                     </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2 justify-start">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                  <div className="rounded-lg p-3 bg-secondary">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
