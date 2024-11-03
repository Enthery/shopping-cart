export default function ProductTile({ product }) {
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate m-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
