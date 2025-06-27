"use client"

import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            เอกสารกฎหมาย
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              หน้าแรก
            </Link>

            {/* Privacy Menu */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                ความเป็นส่วนตัว
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/privacy"
                        className={`${focus ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                      >
                        ประกาศความเป็นส่วนตัวทั้งหมด
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/privacy/general-privacy-policy"
                        className={`${focus ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                      >
                        นโยบายความเป็นส่วนตัวทั่วไป
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/privacy/cookie-policy"
                        className={`${focus ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                      >
                        นโยบายคุกกี้
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            {/* Terms Menu */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                ข้อกำหนด
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/terms"
                        className={`${focus ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                      >
                        ข้อกำหนดและเงื่อนไขทั้งหมด
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/terms/service-terms"
                        className={`${focus ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                      >
                        ข้อกำหนดการให้บริการ
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/terms/payment-terms"
                        className={`${focus ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                      >
                        ข้อกำหนดการชำระเงิน
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            {/* Add API Docs link */}
            <Link href="/api-docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              API Docs
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}
