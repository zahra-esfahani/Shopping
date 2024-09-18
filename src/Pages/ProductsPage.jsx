import { ProductsRecieve } from "../Context/ProductContext";
import React, { useEffect, useState } from "react";
import styles from "./ProductsPage.module.css";
import Card from "./Card";
import Loader from "./Loader";
import { ImSearch } from "react-icons/im";
import { FaList } from "react-icons/fa6";
import {
  searchTitle,
  serachCategory,
  urlCategorySearch,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
function ProductsPage() {
  const products = ProductsRecieve();
  const [text, setText] = useState("");
  const [chooseProduct, setChooseProducts] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setsearchParams] = useSearchParams();
  useEffect(() => {
    setChooseProducts(products);
    const query = {};
    const category = searchParams.get("category");
    const text = searchParams.get("text");
    if (category) query.category =category;
    if (text) query.text = text;
    console.log(query);
    setQuery(query);
  }, [products]);

  useEffect(() => {
    setsearchParams(query);
    let finallSearch = searchTitle(products, query.text);
    finallSearch = serachCategory(finallSearch, query.category);
    setChooseProducts(finallSearch);
  }, [query]);

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => urlCategorySearch(query, { category }));
    if (tagName !== "Li") return;
  };

  const searchHandler = () => {
    setQuery((query) => urlCategorySearch(query, { text }));
  };
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!chooseProduct.length && <Loader />}
          {chooseProduct.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
        <div className={styles.sidebar}>
          <div>
            <p>
              <FaList /> Category
            </p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
