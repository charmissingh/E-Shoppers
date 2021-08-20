import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div class="bg-white w-full">
        <div class="header h-16 bg-gray-900 flex items-center">
          <div class="logo w-1/5 h-16 ml-10">
            <Link to="/">
              <img
                class="w-28 h-16 object-contain"
                src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
                alt="eshopper-logo"
              />
            </Link>
          </div>

          <input
            class="
            h-9
            w-30
            text-white
            bg-gray-800
            border border-gray-500 border-opacity-75
            rounded-l-xl
            ml-6
            p-1.5
            text-sm
            focus:outline-none
            placeholder-white
          "
            id="search"
            type="text"
            placeholder="Search..."
          />
          <div
            class="
            categories
            h-9
            w-30
            bg-gray-800
            border border-gray-500 border-opacity-75
            px-3
            text-white
            flex
            items-center
          "
          >
            categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            class="
            search-icon
            h-9
            w-10
            bg-yellow-500
            rounded-r-xl
            flex
            justify-center
            items-center
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* Right Icons */}
          <div
            class="
            icons
            text-white
            flex
            items-center
            ml-auto
            mr-8
            w-48
            h-16
            justify-around
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {/* Cart Icons */}
            <Link to="/cart">
              <div
                class="
                cart-icon
                h-10
                w-10
                bg-yellow-500
                flex
                justify-center
                items-center
                rounded-xl
                relative
              "
              >
                <div
                  class="
                  cart-item-number
                  absolute
                  -top-1
                  -right-1
                  h-4
                  w-4
                  bg-white
                  rounded-full
                  flex
                  justify-center
                  items-center
                  text-gray-800 text-xs
                "
                >
                  2
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <svg class="rounded h-12 w-12" data-jdenticon-value="Ankit"></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
