import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
    return (
      <Disclosure as="nav" className="bg-white shadow fixed w-full z-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-primary">{"Ryan Trimble"}</h1>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {['About', 'Projects', 'Experience', 'Skills', 'Memberships', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-900 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['About', 'Projects', 'Experience', 'Skills', 'Memberships', 'Contact'].map((item) => (
                  <Disclosure.Button
                    key={item}
                    as="a"
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white"
                  >
                    {item}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
