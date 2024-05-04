import Link from "next/link";
import Products from "./products/Products";



export default function Home() {
  return (
    <main>
        <div>
          <h1>Products</h1>
        </div>
        <div>
          <Products/>
        </div>
    </main>
  );
}
