import { getFeaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams = async () => {
    const products = await getFeaturedProducts();
    return products.map((product) => ({
      slug: product.slug.toString(),
    }));
  };