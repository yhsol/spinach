import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 p-20 grid gap-10">
      <FirstPost />
      <SecondPost />
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
}

function FirstPost() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl">
      <span className="font-semibold text-3xl">Select Item</span>
      <div className="flex justify-between my-2">
        <span className="text-gray-500">Grey Chair</span>
        <span className="font-semibold">$10</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tooly Table</span>
        <span className="font-semibold">$10</span>
      </div>
      <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
        <span>Total</span>
        <span className="font-semibold">$10</span>
      </div>
      <div className="mt-5 w-1/2 mx-auto bg-blue-500 text-white p-3 text-center rounded-xl">
        Checkout
      </div>
    </div>
  );
}

function SecondPost() {
  return (
    <div className="bg-blue-500 rounded-2xl shadow-xl overflow-hidden">
      <div>
        <div className="p-10 pb-16">
          <div className="flex justify-between">
            <span className="font-semibold text-white text-2xl">Profile</span>
            <span className="font-semibold text-white text-2xl">cart</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-10">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <div className="text-gray-500 mb-3">Orders</div>
              <div className="font-medium">340</div>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full"></div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500 mb-3">Spent</div>
              <div className="font-medium">$2,310</div>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-8 -mb-1">
            <div className="text-center font-semibold text-xl">Tony Molloy</div>
            <div className="text-center text-sm text-gray-400">
              New York, USA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
