"use client";
import { Button, HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen grid place-items-center">
        <h1>Chatify</h1>
        <Button>Click me</Button>
      </div>
    </HeroUIProvider>
  );
}