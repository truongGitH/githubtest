import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

import ButtonRegister from "./component/ButtonRegister";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello</div>
      <ul>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
       
        <ButtonRegister/>
      </ul>
      <Card/>
    </main>
  );
}
