import React from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useDetails } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./PageDetails.module.css";
function PageDetails() {
  const { id } = useParams();
  console.log(id);
  const detail = useDetails(+id);
  console.log(detail);
  if (!detail) return <Loader />;
  return (
    <>
      <div className={styles.container}>
        <img src={detail.image} alt="" />

        <div className={styles.information}>
          <h3 className={styles.title}>{detail.title}</h3>
          <p className={styles.description}>{detail.description}</p>
          <p className={styles.category}>
            <SiOpenproject />
            {detail.category}
          </p>
      
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {detail.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default PageDetails;
