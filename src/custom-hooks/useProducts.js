import { useSelector } from "react-redux";

export const useProducts = () => {
    const { products } = useSelector((state) => state.productsState);
    return products;
};