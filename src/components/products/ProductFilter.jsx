// src/components/products/ProductFilter.jsx
import React from 'react';
import { categories } from '../../data/mockData';

function ProductFilter({ selectedCategory, onCategoryChange, onPriceRangeChange }) {
  return (
    <div id='filter' className="mt-20 md:space-y-8 md:bg-white md:p-6 mdrounded-xl md:shadow-sm md:border">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categorias</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${!selectedCategory ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            Todos os produtos
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.name)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category.name ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-lg font-semibold mb-4">Range de preços</h3>
        <div className="space-y-2">
          <button
            onClick={() => onPriceRangeChange('')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Todos os preços
          </button>
          <button
            onClick={() => onPriceRangeChange('0-50')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            menor que $50
          </button>
          <button
            onClick={() => onPriceRangeChange('50-100')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            $50 - $100
          </button>
          <button
            onClick={() => onPriceRangeChange('100-200')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            $100 - $200
          </button>
          <button
            onClick={() => onPriceRangeChange('200+')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            maior que $200
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;