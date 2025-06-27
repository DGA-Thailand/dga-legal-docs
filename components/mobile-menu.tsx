"use client"

import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

export default function MobileMenu() {
  return (
    <Menu as="div" className="md:hidden">
      {({ open }) => (
        <>
          <MenuButton className="flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span className="sr-only">เปิดเมนูหลัก</span>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </MenuButton>

          <MenuItems className="absolute top-full left-0 right-0 z-10 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    หน้าแรก
                  </Link>
                )}
              </MenuItem>

              {/* Privacy Section */}
              <div className="pt-4 pb-2">
                <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ความเป็นส่วนตัว</div>
              </div>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/privacy"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } flex items-center px-3 py-2 rounded-md text-base font-medium`}
                  >
                    ประกาศความเป็นส่วนตัวทั้งหมด
                    <ChevronRightIcon className="ml-auto h-4 w-4" />
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/privacy/general-privacy-policy"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-6 py-2 rounded-md text-sm`}
                  >
                    นโยบายความเป็นส่วนตัวทั่วไป
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/privacy/cookie-policy"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-6 py-2 rounded-md text-sm`}
                  >
                    นโยบายคุกกี้
                  </Link>
                )}
              </MenuItem>

              {/* Terms Section */}
              <div className="pt-4 pb-2">
                <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">ข้อกำหนด</div>
              </div>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/terms"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } flex items-center px-3 py-2 rounded-md text-base font-medium`}
                  >
                    ข้อกำหนดและเงื่อนไขทั้งหมด
                    <ChevronRightIcon className="ml-auto h-4 w-4" />
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/terms/service-terms"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-6 py-2 rounded-md text-sm`}
                  >
                    ข้อกำหนดการให้บริการ
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/terms/payment-terms"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-6 py-2 rounded-md text-sm`}
                  >
                    ข้อกำหนดการชำระเงิน
                  </Link>
                )}
              </MenuItem>

              {/* Add after Terms Section */}
              <div className="pt-4 pb-2">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/api-docs"
                      className={`${
                        focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                    >
                      API Docs
                    </Link>
                  )}
                </MenuItem>
              </div>
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  )
}
