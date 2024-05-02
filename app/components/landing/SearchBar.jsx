"use client";

import useDebounce from "@/app/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const debounce = useDebounce((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}/?${params.toString()}`);
  }, 500);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (!value) {
      debounce("");
    }
    debounce(value);
  };

  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-3xl">Discover Events</h1>
      <div>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search..."
          className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
    </div>
  );
}

export default SearchBar;
