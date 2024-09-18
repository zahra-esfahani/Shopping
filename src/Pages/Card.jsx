import styles from "./Card.module.css";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { chechItemsquantity, validTitle } from "../helper/helper";
import { useCart } from "../Context/CartContext";
function Card({ data }) {
  const [state, dispatch] = useCart();
  const quantity = chechItemsquantity(state, data.id);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={data.image} alt="" />
        <h3>{validTitle(data.title)}</h3>
        <p>{data.price} $</p>
        <div className={styles.icons}>
          <Link to={`/products/${data.id}`}>
            <TfiLayoutListThumbAlt />
          </Link>

          <div>
            {quantity === 1 && (
              <button onClick={() => clickHandler("REMOVE_ITEM")}>
                <MdOutlineDelete />
              </button>
            )}
            {quantity > 1 && (
              <>
       
                <button onClick={() => clickHandler("DECREASE")}>-</button>
              </>
            )}
           {quantity!==0? <span>{quantity}</span>:null}
            {quantity === 0 ? (
              <button onClick={() => clickHandler("ADD_ITEM")}>
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button onClick={() => clickHandler("INCREASE")}>+</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
