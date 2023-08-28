import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispath = useDispatch();
  const cartQuantity = useSelector((state) => state.product.totalQuantity);
  const showCartHandler = () => {
    dispath(cartActions.toggleShowCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
