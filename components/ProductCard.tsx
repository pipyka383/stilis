import Image from 'next/image';
import type { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-full bg-white rounded-3xl p-4">
      {/* Подложка под изображение */}
      <div className="relative bg-slate-100 rounded-2xl aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6"
        />
      </div>

      {/* Название */}
      <h3 className="text-xl font-bold mt-4 text-blue-950">
        {product.title}
      </h3>

      {/* Описание */}
      <p className="text-sm text-gray-600 mt-2 leading-snug">
        {product.description}
      </p>

      {/* Цена и кнопка */}
      <div className="flex flex-col items-start mt-4">
        <span className="text-sm text-gray-700">
          {product.price.toLocaleString('ru-RU')} ₽
        </span>
        <button
          type="button"
          className="mt-3 bg-blue-900 text-white text-[11px] uppercase tracking-wider font-medium rounded-full px-5 py-2 transition-colors duration-200 hover:bg-blue-800"
        >
          в корзину
        </button>
      </div>
    </article>
  );
}