// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { useState } from 'react';
import SocialIcons from '../components/ui/SocialIcons';
import Brandcrumbs from '../components/ui/brandcrumbs';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.image);

  if (!product) {
    return <div className="container mx-auto px-6 py-8">Product not found</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    console.log(product.medidas.peso)
  };

  return (
    <div className="container flex-col mx-auto px-6 py-8">
      <Brandcrumbs product={product} page={'products/'}></Brandcrumbs>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={selectedImage || product.images[0]}
            alt={product.name}
            className="w-full rounded-lg shadow-lg h-[clamp(1rem,100vw,30rem)] bg-cover"
          />

          <div className='subImages flex gap-2'>
            {
              product.images.map((image, index) => (
                <img 
                  onClick={() => handleImageClick(image)}
                  key={index}
                  src={image}
                  alt={product.name}
                  className="w-full rounded-lg shadow-lg mt-4 max-w-[80px] max-h-[80px] bg-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                />
              ))
            }
          </div>
          <a target='_blank' href="https://wa.me/11962492213?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido">
            <button className="w-full md:w-auto px-8 py-3 mt-8 bg-black text-white rounded btnHover">
              Fazer orçamento
            </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className='medidas flex flex-col gap-2'>
            {
                product.medidas.peso && (
                  <>
                    <span className=""><span className='font-semibold'>Peso:</span> {product?.medidas?.peso}</span>
                  </>
                )
            }
            {
              product.medidas.dimensao && (
                <>
                  <span className=""><span className='font-semibold'>Dimensão:</span> {product?.medidas?.dimensao}</span>
                </>
              )
            }
            {
              product.medidas.circuferencia && (
                <>
                  <span className=""><span className='font-semibold'>Circuferência:</span> {product?.medidas?.circuferencia}</span>
                </>
              )
            }
            {
              product.medidas.pesoAproximado && (
                <>
                  <span className=""><span className='font-semibold'>Peso aproximado:</span> {product?.medidas?.pesoAproximado}</span>
                </>
              )
            }

            <div className='disclaimer mt-4'> 
              <span className='font-medium'>Medidas, peso e tonalidades podem variar pois o mesmo modelo é produzido por diversos fabricantes.</span>
            </div>
            <div>
              <SocialIcons></SocialIcons>
            </div>
          </div>
        </div>
      </div>
      
      <div className='text-[10rem] font-bold mt-8'>
          <h1>Gordão é GAY</h1>
      </div>
    </div>
  );
}

export default ProductDetails;