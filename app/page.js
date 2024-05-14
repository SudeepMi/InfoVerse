import { menuItems } from "@/services/menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-7 home__container">
      {menuItems.map((value, key) => {
        return (
          <Link
            href={`/${value.name}`}
            key={key}
            className="hover:bg-[#2e2c2cf7] link"
          >
            <div key={key} className="p-7 grid gap-2 place-items-center border">
              {value.icon}
              <p>{value.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
