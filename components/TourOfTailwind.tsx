export function SelectItem() {
  return (
    <div className="dark:bg-black flex flex-col justify-between bg-white p-6 rounded-3xl shadow-xl">
      <span className="font-semibold text-3xl">Select Item</span>
      <ul>
        {[
          { name: "Grey Chair", price: "$1" },
          { name: "Tooly Table", price: "$2" },
          { name: "Grey Chair", price: "$3" },
          { name: "Tooly Table", price: "$4" },
        ].map(({ name, price }) => (
          <li
            key={`${name}-${price}`}
            className="flex justify-between my-2
              "
          >
            <span className="text-gray-500">{name}</span>
            <span className="font-semibold">{price}</span>
          </li>
        ))}
      </ul>

      <ul>
        {["a", "b", "c", ""].map((c, i) => (
          <li key={i} className="py-2 empty:hidden">
            {c}
          </li>
        ))}
      </ul>
      <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
        <span>Total</span>
        <span className="font-semibold">$10</span>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-5 w-1/2 mx-auto bg-blue-500 text-white p-3 text-center rounded-xl 
            hover:bg-teal-500 active:bg-yellow-500 focus:bg-red-500
          "
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export function Profile() {
  return (
    <div className="dark:text-white bg-blue-500 rounded-2xl shadow-xl overflow-hidden group landscape:bg-yellow-500 portrait:bg-teal-500">
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
            <div className="h-24 w-24 bg-gray-300 rounded-full group-hover:bg-red-300 transition-colors"></div>
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

export function ItemPost() {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-5">
        <span>⬅️</span>
        <div className="space-x-3">
          <span>⭐ 1.0</span>
          <span className="shadow-xl p-2 rounded-md">🧡</span>
        </div>
      </div>
      <div className="bg-zinc-400 h-72 text-center mb-5">chair image</div>
      <div className="flex flex-col">
        <span className="font-medium text-lg">Swoon Lounge</span>
        <div className="text-xs text-gray-500">Chair</div>
        <div className="mt-3 mb-5 flex justify-between items-center">
          <div className="space-x-2">
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-blue-100 flex justify-center items-center aspect-square w-10 text-xl text-gray-500 rounded-md">
              -
            </button>
            <span>1</span>
            <button className="bg-blue-100 flex justify-center items-center aspect-square w-10 text-xl text-gray-500 rounded-md">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-xl">$450</span>
          <button className="bg-blue-500 text-white text-sm text-center px-8 py-2 rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <form action="" className="flex flex-col space-y-2 p-5 bg-yellow-500">
      <input
        type="text"
        required
        placeholder="Username"
        className="peer border p-1 border-gray-400 rounded
          "
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block peer-valid:text-teal-500">
        Awesome Username
      </span>
      <button type="submit" value="Login" className="bg-white">
        Login
      </button>
    </form>
  );
}

export function FirstLetter() {
  return (
    <p className="dark:text-blue first-letter:text-7xl first-letter:hover:text-yellow-500 bg-blue-500 lg:col-span-2 xl:col-span-1">
      lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    </p>
  );
}
