import React from "react";
import Header from "../layouts/Header";

function Cart() {
  return (
    <div>
      <Header />
      
      <div className="main h-screen flex">
        <div className="main-sidebar border-t-2 border-gray-700 w-1/5 bg-gray-900 p-6">
          <div className="sidebar-categories">
            <div
              className="
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
              <span className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              className="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span className="w-8"></span>
              <span>Echo and Alexa</span>
            </div>

            <div
              className="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span className="w-8"></span>
              <span>Kindle</span>
            </div>

            <div
              className="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span className="w-8"></span>
              <span>Books</span>
            </div>

            <div
              className="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span className="w-8"></span>
              <span>Electronics</span>
            </div>

            <div
              className="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
              "
            >
              <span className="w-8"></span>
              <span>Home and Garden</span>
            </div>

            <div
              className="
                sidebar-main-category
                text-white
                cursor-pointer
                flex
                font-bold
                p-2
                mb-2
              "
            >
              <span className="w-8"></span>
              <span>Fashion</span>
            </div>

            <div
              className="
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
              <span className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>Sell on Amazon</span>
            </div>

            <div
              className="
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
              <span className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
        
        
        <div className="main-section flex-1 p-6 bg-white-100">
          <h1 className="font-bold text-gray-400 text-3xl mb-6">Shopping Cart</h1>
          <div className="table-titles flex font-bold text-gray-400">
            <h2 className="flex-grow">Product</h2>
            <h2 className="w-48">Count</h2>
            <h2 className="w-48">Total Cost</h2>
            <span className="w-10"></span>
          </div>
          <div className="cart-items mt-5">
            <div className="cart-item flex items-center pb-4 border-b">
              <div className="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.bhphotovideo.com/images/images2500x2500/apple_myd92ll_a_13_3_macbook_pro_with_1604810.jpg"
                  alt="product_img"
                />
              </div>
              <div className="cart-item-details flex-grow">
                <div className="cart-item-title font-bold text-sm text-gray-600">
                  Apple MacBook Pro 13,3
                </div>
                <div className="cart-item-brand text-sm text-gray-400">Apple</div>
              </div>
              <div className="cart-item-counter w-48 flex items-center">
                <div className="cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-400 mx-3">1</h4>
                <div className="cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              <div className="cart-item-total-cost w-48 font-bold text-gray-400">
                $1,499.50
              </div>
              <div className="cart-item-delete w-10 font-bold text-gray-400 cursor-pointer hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}

            <div className="cart-item flex items-center pb-4 border-b">
              <div className="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.bhphotovideo.com/images/images2500x2500/apple_myd92ll_a_13_3_macbook_pro_with_1604810.jpg"
                  alt="product_img"
                />
              </div>
              <div className="cart-item-details flex-grow">
                <div className="cart-item-title font-bold text-sm text-gray-600">
                  Apple MacBook Pro 13,3
                </div>
                <div className="cart-item-brand text-sm text-gray-400">Apple</div>
              </div>
              <div className="cart-item-counter w-48 flex items-center">
                <div className="cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-400 mx-3">1</h4>
                <div className="cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              <div className="cart-item-total-cost w-48 font-bold text-gray-400">
                $1,499.50
              </div>
              <div className="cart-item-delete w-10 font-bold text-gray-400 cursor-pointer hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="complete-order flex justify-end mt-10">
            <div className="total-cost mr-7">
              <h2 className="text-gray-400">Total Cost</h2>
              <div className="total-cost-number text-gray-600 font-bold text-3xl">
                $1700.00
              </div>
            </div>
            <div className="complete-order-button w-56 flex items-center justify-center bg-yellow-500 rounded text-white cursor-pointer hover:bg-yellow-600">
              Complete Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
