import { useRouter } from "next/router";
import SEO from "components/SEO";
import { ProductWrapper } from "components/Pages/Product";

export default function Product() {
  const router = useRouter();
  return (
    <>
      <SEO title={router.query.slug} />
      <ProductWrapper />
    </>
  );
}
