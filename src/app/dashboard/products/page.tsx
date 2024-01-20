import { products } from '@/data/propducts';
import { ProductCard } from '../../products/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

    {products.map((producto)=>{
      return <ProductCard key={producto.id} {...producto}></ProductCard>
    })}
      
   
   
    </div>
  );
}