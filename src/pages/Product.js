import React from "react";
import Header from "../layouts/Header";
import CashPayment from "../assests/images/product/payment-method.png";
import Replacement from "../assests/images/product/replacement.png";
import Delivery from "../assests/images/product/delivery.png";

function Product() {
  return (
    <>
      <Header />

      <div className="main-section-product w-full flex p-6">
        <div className="flex flex-col mr-10">
          <img
            className="w-44 h-48"
            src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="product_img"
          />
          <img
            className="w-44 h-48 mt-4"
            src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="product_img"
          />
          <img
            className="w-44 h-48 mt-4"
            src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="product_img"
          />
        </div>
        <img
          className="product-img w-8/12 h-4/5"
          src="https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="product_img"
        />

        <div className="product-details ml-6">
          <div className="product-name font-semibold text-2xl">
            Cashmere Jacket
          </div>
          <div className="flex mt-2.5">
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <div className="ml-4 text-base">218 Reviews</div>
          </div>
          <div className="mt-10 text-xl">Product Details :</div>
          <div className="product-description w-8/12 h-30 mt-3 text-lg font-light">
            A shirt is a cloth garment for the upper body (from the neck to the
            waist). Originally an undergarment worn exclusively by men, it has
            become, in American English, a catch-all term for a broad variety of
            upper-body garments and undergarments. ... A shirt can also be worn
            with a necktie under the shirt collar.
          </div>
          <div className="mt-6">
            <div className="text-lg font-light flex">
              <span className="w-28">Size & Fit</span>
              <span className="mr-2">:</span>M
            </div>
            <div className="text-lg font-light flex">
              <span className="w-28">Material</span>
              <span className="mr-2">:</span>Cotton
            </div>
            <div className="text-lg font-light flex">
              <span className="w-28">Brand</span>
              <span className="mr-2">:</span>Forever 21
            </div>
            <div className="text-lg font-light flex">
              <span className="w-28">Color</span>
              <span className="mr-2">:</span>Black
            </div>
          </div>
          <div className="flex mt-10">
            <div className="flex flex-col">
              <div className="font-light text-sm">Best Price</div>
              <div className="font-medium text-2xl">$350.00</div>
            </div>

            <div className="flex justify-center items-center ml-10">
              <button className="w-40 h-12 text-xl bg-yellow-300 rounded-xl hover:bg-yellow-400">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex mt-20">
            <div className="flex flex-col justify-center items-center">
              <img className="w-12" src={CashPayment} alt="payment" />
              <div className="mt-4 text-base font-normal">Pay on delivery</div>
            </div>
            <div className="flex flex-col mx-10 justify-center items-center">
              <img className="w-12" src={Replacement} alt="payment" />
              <div className="flex flex-col justify-center items-center mt-4 text-base font-normal">
                7 Days <span>Replacement</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-12" src={Delivery} alt="payment" />
              <div className="mt-4 text-base font-normal">
                e-Shopper Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
