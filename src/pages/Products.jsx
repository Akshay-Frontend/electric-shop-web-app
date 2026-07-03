import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import notfound from "../assets/notfound.json";
import MobileFilter from "../components/MobileFilter";
import { GetData } from "../context/DataContext";

const Products = () => {
  const { data, fetchAllProducts } = GetData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1],
  );

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  // ✅ Safe pagination
  const dynamicPage = Math.ceil(filterData?.length / 8);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          category={category}
          setCategory={setCategory}
          handleBrandChange={handleBrandChange}
          handleCategoryChange={handleCategoryChange}
        />
      </div>

      {data?.length > 0 ? (
        <>
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              handleBrandChange={handleBrandChange}
              handleCategoryChange={handleCategoryChange}
            />

            {filterData.length > 0 ? (
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap gap-8">
                  {
                    // ************************************** before use in data then use to  filterData ******************************
                    filterData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                      })
                  }
                </div>
                <Pagination
                  dynamicPage={dynamicPage}
                  pageHandler={pageHandler}
                  page={page}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center w-4xl">
                <Lottie animationData={notfound} />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-96">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Products;
