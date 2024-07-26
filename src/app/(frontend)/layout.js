import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import TawkTo from "@/lib/Tawkto";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Webnike',
    default: 'Webnike',
  },
  description: "Webnike Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TawkTo/>
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="light"
         enableSystem
         disableTransitionOnChange>
          {children}
          <Toaster richColors position="bottom-left"/>
        </ThemeProvider></body>
        
    </html>
  );
}
