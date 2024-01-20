import { ItemCard } from "@/app/shoping-cart";
import { Product, products } from "@/data/propducts";
import { cookies } from "next/headers";
import { WidgetItem } from '../../components/WidgetItem';


export const metadata = {
    title: 'SEO Cart',
    description: 'SEO Cart',
};


interface ProductInCart {
    product: Product;
    quantity: number
}
const getProductsInCart = (cart: { [id: string]: number }) => { //TODO: EL cart: { [id: string]: number } cart puede deberse a la estructura del cookie
    const productsInCart: ProductInCart[] = [];
    for (const id of Object.keys(cart)) {
        const product = products.find(prod => prod.id === id)
        if (product) {
            productsInCart.push({ product: product, quantity: cart[id] })
        }
    }
    return productsInCart
}

export default function CartPage() {

    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}')
    console.log(cart)
    const productsInCard = getProductsInCart(cart)
    const totalToPay = productsInCard.reduce((prev, curret) => (curret.product.price * curret.quantity)+prev, 0)
    return (
        <div>
            <h1 className="text-5xl">Productos en el carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm:flex-row gap-2 w-full">

                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {
                        productsInCard.map(({ product, quantity }) => {
                            return <ItemCard key={product.id} product={product} quantity={quantity}></ItemCard>
                        })
                    }
                </div>
                <div className="flex flex-col w-full sm:w-4/12">
                    <WidgetItem title="Total A pagar">
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">${(totalToPay * 1.18).toFixed(2)}</h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">Impuestos :${(totalToPay * 0.18).toFixed(2)} </span>
                    </WidgetItem>
                </div>

            </div>

        </div>
    );
}