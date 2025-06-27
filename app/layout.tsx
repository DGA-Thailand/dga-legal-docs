import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Thai } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "เว็บไซต์เอกสารกฎหมาย",
  description: "เว็บไซต์เอกสารกฎหมายของบริการต่าง ๆ ของสำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน)",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={notoSansThai.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
