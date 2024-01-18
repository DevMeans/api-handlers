import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = (): { [id: string]: number } => {
    if (hasCookie('cart')) {
        const coockiecard = JSON.parse(getCookie('cart') as string ?? '{}');
        return coockiecard
    }
    return {}
}
export const addProductToCard = (id: string) => {

    const cookiecart = getCookieCart()
    if (cookiecart[id]) {
        cookiecart[id] = cookiecart[id] + 1
    }else{
        cookiecart[id] = 1
    }
    setCookie('cart',JSON.stringify(cookiecart))
}
export const removeProductFromCart=(id:string)=>{
    const cookiecart = getCookieCart()
    delete cookiecart[id]
    setCookie('cart',JSON.stringify(cookiecart))
}