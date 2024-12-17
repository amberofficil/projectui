import React from 'react';
const products = [
    {
      name: "Vel elit euismod",
      price: "$26.00 ",
      image: "/grid1.png",
    },
    {
      name: "Ultricies condimentum imperdiet",
      price: "$26.00",
      image: "/grid2.png",
    },
    {
      name: "Vitae suspendisse sed ",
      price: "$26.00",
      image: "/grid3.png",
    },
    {
      name: " Sed at fermentum",
      price: "$26.00",
      image: "/grid4.png",
    },
    {
      name: "Fusce pellentesque at",
      price: "$26.00",
      image: "/grid5.png",
    },
    {
      name: "Vestibulum magna laoreet",
      price: "$26.00",
      image: "/grid6.png",
    },
    {
      name: "Sollicitudin amet orci",
      price: "$$26.00",
      image: "/grid7.png",
    },
    {
      name: "Ultrices mauris sit",
      price: "$26.00",
      image: "/grid8.png",
    },
    {
      name: "Pellentesque condimentum ac",
      price: "$26.00",
      image: "/grid9.png",
    },
    {
      name: "Cras scelerisque velit",
      price: "$26.00",
      image: "/grid10.png",
    },
    {
      name: "Lectus vulputate faucibus",
      price: "$26.00",
      image: "/grid11.png",
    },
    {
      name: "Purus risus, ut",
      price: "$26.00",
      image: "/grid12.png",
    },
  
];

export default function ShopGrideDfault() {
  return (
    <section className=" py-10 px-6">
    <div className="max-w-7xl mx-auto ml-[375]">
      <h2 className="text-2xl font-bold text-[#151875] mt-[50] mb-[50]">
      Shop Gride Dfault
      </h2>
      <div>
        <h2 className='text-2xl font-bold text-[#151875] mt-[50] mb-[50]'>Ecommerce Acceories & Fashion item </h2>
      </div>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="w-270 h-350 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full bg-slate-50 rounded-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-blue-800">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-blue-800 mt-2">
                {product.price}
              </p>
            </div> 
          </div>
        ))}
        </div>
        </div>
  </section>
)
}

  

