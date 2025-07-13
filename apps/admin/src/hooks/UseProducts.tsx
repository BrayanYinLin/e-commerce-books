import { useState, useEffect } from "react";
import { getProducts } from "../services/GetProducts";
import type { Product } from "../types";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts()
                setProducts(data)
                setError(null)
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'))
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return { products, loading, error }
}