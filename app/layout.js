import StyledComponentsRegistry from '../lib/registry'
import "./globals.css";
import { SessionProvider } from "next-auth/react";
// import { Toaster } from "react-hot-toast";
 
export const metadata = {
  title: "Sunshine Stitches Starter",
  description:
    "This application is for learning NextJS with Auth and Prisma purpose only.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      {/* <Toaster position="top-center" /> */}
        <StyledComponentsRegistry><SessionProvider>{children}</SessionProvider></StyledComponentsRegistry>
      </body>
    </html>
  )
}