import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Button to="/store" variant="primary">Back to Store</Button>
      </div>
    );
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }
    setError(false);

    const message = `Hello, I want to place an order for this product.
Product: ${product.name}
Type: ${product.type}
Size: ${selectedSize}
Image: ${product.image}
Could you assist me with the next steps?`;

    const whatsappUrl = `https://wa.me/254112268873?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link to="/store" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Store
          </Link>
        </div>

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Image */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover max-h-[600px] opacity-95"
              />
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <span className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider text-sm mb-2 block">{product.type}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{product.name}</h1>
                <p className="text-3xl font-medium text-brand-600 dark:text-brand-300">{product.price}</p>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-800 w-full"></div>

              <div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <label className="block text-gray-800 dark:text-gray-200 font-bold mb-3">Select Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setError(false);
                      }}
                      className={`w-14 h-14 rounded-xl font-bold border-2 transition-all flex items-center justify-center ${
                        selectedSize === size
                          ? 'border-brand-500 bg-brand-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:border-brand-500 hover:text-brand-600 dark:hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {error && <p className="text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400"></span> Please select a size</p>}
              </div>

              <div className="pt-4">
                <Button 
                  onClick={handleBuyNow}
                  fullWidth 
                  variant="primary" 
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 text-lg shadow-lg shadow-green-200 dark:shadow-green-900/50 border-none"
                >
                  <MessageCircle className="mr-2" /> Buy on WhatsApp
                </Button>
                <p className="text-center text-gray-500 text-sm mt-3">
                  Secure checkout via WhatsApp with our sales team.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                  <ShoppingBag className="text-brand-600 dark:text-brand-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                  <Check className="text-brand-600 dark:text-brand-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Verified Seller</span>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};