import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown2() {
    return (
      
        <div className="  bg-black ">
    <Menu as="div" className="relative inline-block text-right  ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2  text-sm font-semibold text-green-500  ">
          My Coding
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white mt-" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-0 w-[14rem] origin-top-right  bg-black  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">
            <Menu.Item>
              {({ active }) => (
                <NavLink to="/"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Upload Image
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink to="/"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink to="/"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </NavLink>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
            </Menu>
            </div>
  )
}
