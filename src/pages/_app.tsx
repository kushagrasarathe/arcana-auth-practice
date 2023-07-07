import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

// clientId: Arcana Unique App Identifier via Dashboard
const provider = new AuthProvider(`${clientId}`);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth provider={provider}>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}
