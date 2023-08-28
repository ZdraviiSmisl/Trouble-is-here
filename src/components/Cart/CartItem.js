import classes from "./CartItem.module.css";
import { productActions } from "../../store/product";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, title, price, quantity, totalPrice } = props;
  const dispatch = useDispatch();

  const addItemHnadler = () => {
    dispatch(productActions.addNewProduct({ id, price, quantity, totalPrice }));
  };

  const removeItemHandler = () => {
    dispatch(productActions.removeItem(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHnadler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
