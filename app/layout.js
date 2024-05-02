import { Inter } from "next/font/google";
import "./globals.css";
import SiteNavbar from "@/app/components/SiteNavbar";
import connectDB from "@/services/mongo";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home",
  description:
    "A single entry to connected to all the online events from the globe.",
};

export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SiteNavbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
