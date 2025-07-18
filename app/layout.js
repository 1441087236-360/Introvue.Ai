import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Introvue.ai",
  description: "Your AI Interview Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
      {children}</body>
    </html>
    <Analytics />
    </ClerkProvider>
    
  );
}
