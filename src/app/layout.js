// import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Poppins} from 'next/font/google'
import Footer from "@/components/Footer";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


  // const poppins  = Poppins({subsets:['latin'], weight:['300','400','500','600','700','800','900']});
export const metadata = {
  title: "Tena Meaza",
  description: "Tena Meaza Food Processing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body
        className={` antialiased flex flex-col`}
      >
        <Navbar/>
       <div className='py-[15%] md:py-[5%] z-0'> {children}</div>
       
      </body>
      <Footer/>
       </ThemeProvider>
    </html>
  );
}
