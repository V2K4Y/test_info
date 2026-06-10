import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "AI Training Data & Annotation Services | InfoBay.AI",
  description: "Accelerate the frontier of AI development with enterprise-grade, deeply curated datasets engineered to enhance pre-training, alignment, and real-world performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        <Header />
        {children}
        <ToastContainer position="top-right" theme="dark" />
        <NewFooter />
      </body>
    </html>
  );
}
