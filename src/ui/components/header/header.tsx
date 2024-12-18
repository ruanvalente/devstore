import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href="/">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            placeholder="Buscar produtos..."
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Cart (0)</span>
        </div>
        <div className="w-px h-4 bg-zinc-700"></div>
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline transition-all"
        >
          <span className="text-sm">Account</span>

          <Image
            src="https://avatars.githubusercontent.com/u/6674232?v=4"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt="Image for the user account"
          />
        </Link>
      </div>
    </header>
  );
}
