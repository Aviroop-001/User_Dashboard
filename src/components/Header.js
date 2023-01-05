import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="text-2xl font-bold px-10 py-1">Company Settings</div>
      <nav className="bg-white">
        <div className=" mt-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex h-26 items-center justify-between">
            <div className="flex items-center">
              <div className="ml-5 mt-2 flex items-baseline space-x-1">
                <a
                  href="#"
                  className=" hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-lg font-medium"
                  aria-current="page"
                >
                  General
                </a>

                <a
                  href="#"
                  className="bg-gray-600 text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-lg font-medium"
                >
                  Users
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-lg  font-medium"
                >
                  Plan
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-lg  font-medium"
                >
                  Billing
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-lg  font-medium"
                >
                  Integrations
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
