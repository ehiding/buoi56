import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to F88</h1>
      <Link href="/products?name=test">Sản phẩm</Link>
    </div>
  );
}
