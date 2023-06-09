import NavBar from "../components/NavBar";
import { RestaurantCard } from "../restaurant/components/RestaurantCard";
import { SearchHeader } from "./components/SearchHeader";
import { SearchSideBar } from "./components/SearchSideBar";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <SearchHeader />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
