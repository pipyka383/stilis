import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf0f0] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <h1 className="text-2xl font-bold text-blue-950 mb-6">
          каталог
        </h1>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Кнопка «Смотреть всю коллекцию» */}
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="bg-blue-900 text-white uppercase rounded-full px-10 py-3 text-xs tracking-wider font-medium transition-colors duration-200 hover:bg-blue-800"
          >
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}