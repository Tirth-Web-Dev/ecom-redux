import { useSelector } from "react-redux"

export const useCartSummary = () => {
    const cartItem = useSelector((state) => state.cart.items)

    const productTotal = cartItem.reduce((total, item) => {
        return total + item.price * item.quantity;
    },0)

    const shipping = productTotal > 1000 ? 0 : 100;
    const finalTotal = productTotal + shipping;

    return{
        cartItem,productTotal,shipping,finalTotal
    }
}