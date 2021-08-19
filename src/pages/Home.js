import React from "react";
import Header from "../layouts/Header";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      
      <div class="main h-screen flex">
        <div
          class="
            hidden
            md:block
            main-sidebar
            border-t-2 border-gray-700
            w-1/5
            bg-gray-900
            p-6
          "
        >
          <div class="sidebar-categories">
            <div
              class="
                sidebar-main-category
                text-yellow-500
                cursor-pointer
                flex
                font-bold
                mb-3
                p-2
                bg-gray-700
                rounded-lg
              "
            >
              <span class="w-8">
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
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              <span>Categories</span>
            </div>
            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span class="w-8"></span>
              <span>Echo and Alexa</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span class="w-8"></span>
              <span>Kindle</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span class="w-8"></span>
              <span>Books</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span class="w-8"></span>
              <span>Electronics</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span class="w-8"></span>
              <span>Home and Garden</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
                mb-2
              "
            >
              <span class="w-8"></span>
              <span>Fashion</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
                hover:bg-gray-700
                rounded-xl
                mb-3
              "
            >
              <span class="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>Sell on Amazon</span>
            </div>

            <div
              class="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
                hover:bg-gray-700
                rounded-xl
              "
            >
              <span class="w-8">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>Help</span>
            </div>
          </div>
        </div>
        <div class="main-section flex-1 p-6 bg-gray-100">
          <div class="main-section-banner h-44 rounded-lg flex items-end">
            <div
              class="
                button
                bg-white
                w-36
                h-10
                rounded-full
                flex
                justify-center
                items-center
                m-4
                cursor-pointer
              "
            >
              <h4 class="text-bold text-yellow-500">Browse Products</h4>
            </div>
          </div>
          {/* Popular Categories */}
          <div class="main-section-categories mt-10">
            <h1
              class="
                popular-categories
                font-bold
                text-gray-700 text-2xl
                flex
                items-center
              "
            >
              Popular Categories
              <svg
                class="h-6 w-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </h1>
            <div class="categories mt-5 flex flex-wrap w-96 md:w-full">
              <div
                class="
                  icon-desktop
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-gift
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-phone
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-book
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-camera
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-home
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-music
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <div
                class="
                  icon-bulb
                  h-20
                  w-20
                  bg-white
                  rounded-xl
                  flex
                  justify-center
                  items-center
                  ml-4
                "
              >
                <svg
                  class="h-12 w-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="main-section-deals mt-10">
            <h1 class="text-2xl font-bold text-gray-700 mb-5 flex">
              Hot Deals
              <svg
                class="h-7 w-7 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </h1>
            <div class="main-section-products flex">
              <div class="main-product">
                <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                  <img
                    class="w-full h-full object-contain"
                    src="https://m.media-amazon.com/images/I/41V5KQ500IL.jpg"
                    alt="product_img"
                  />
                </div>
                <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                  Nintendo Switch(2020)
                </div>
                <div class="product-make text-green-700 font-bold my-1">
                  Nintendo
                </div>
                <div class="product-rating text-yellow-300">⭐⭐⭐⭐</div>
                <div class="product-price font-bold text-gray-700 text-lg">
                  $359
                </div>
                <div
                  class="
                    add-to-cart
                    flex
                    items-center
                    justify-center
                    h-8
                    w-28
                    bg-yellow-500
                    text-white
                    rounded
                    text-md
                    cursor-pointer
                    hover:bg-yellow-600
                    mt-2
                  "
                >
                  Add to cart
                </div>
              </div>

              <div class="main-product ml-5">
                <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                  <img
                    class="w-full h-full object-contain"
                    src="https://m.media-amazon.com/images/I/41V5KQ500IL.jpg"
                    alt="product_img"
                  />
                </div>
                <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                  Nintendo Switch(2020)
                </div>
                <div class="product-make text-green-700 font-bold my-1">
                  Nintendo
                </div>
                <div class="product-rating text-yellow-300">⭐⭐⭐⭐</div>
                <div class="product-price font-bold text-gray-700 text-lg">
                  $359
                </div>
              </div>

              <div class="main-product ml-5">
                <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                  <img
                    class="w-full h-full object-contain"
                    src="https://m.media-amazon.com/images/I/41V5KQ500IL.jpg"
                    alt="product_img"
                  />
                </div>
                <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                  Nintendo Switch(2020)
                </div>
                <div class="product-make text-green-700 font-bold my-1">
                  Nintendo
                </div>
                <div class="product-rating text-yellow-300">⭐⭐⭐⭐</div>
                <div class="product-price font-bold text-gray-700 text-lg">
                  $359
                </div>
              </div>

              <div class="main-product ml-5">
                <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                  <img
                    class="w-full h-full object-contain"
                    src="https://m.media-amazon.com/images/I/41V5KQ500IL.jpg"
                    alt="product_img"
                  />
                </div>
                <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                  Nintendo Switch(2020)
                </div>
                <div class="product-make text-green-700 font-bold my-1">
                  Nintendo
                </div>
                <div class="product-rating text-yellow-300">⭐⭐⭐⭐</div>
                <div class="product-price font-bold text-gray-700 text-lg">
                  $359
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
