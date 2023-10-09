import { IconSearch } from "../../constant/icons";

export const SearchInput = () => {
  return (
    <div className="px-5 py-3 rounded border border-solid border-neutral-grey-light outline-none">
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer">
          <IconSearch />
        </div>
        <input
          type="search"
          className="w-full outline-none"
          placeholder="Search Here"
        />
      </div>
    </div>
  );
};
