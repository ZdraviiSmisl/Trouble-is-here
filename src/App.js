import { Fragment, useDebugValue, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cart";
import Notifications from "./components/UI/Notifications";

let initialSending = true;

function App() {
  const doShowCart = useSelector((state) => state.cart.showCart);
  const product = useSelector((state) => state.product);
  const notification = useSelector((state) => state.cart.notification);
  const dispath = useDispatch();

  useEffect(() => {
    const updateData = async () => {
      dispath(
        cartActions.showNotification({
          status: "...sending",
          title: "Sending product card...",
          message: "The product data is sending.",
        })
      );
      const respose = await fetch(
        "https://http-requests-3bfcd-default-rtdb.firebaseio.com/product.json",
        {
          method: "PUT",
          body: JSON.stringify(product),
        }
      );

      if (!respose.ok) {
        throw new Error("Sending product data faild");
      }

      dispath(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data successfully sended",
        })
      );
    };

    //In order to avoid sending empty product during first rendering(initial) I do this chcking
    if (initialSending) {
      initialSending = false;
      return;
    }

    //I catch error here in order to handle all kind of mistakes

    updateData().catch((error) =>
      dispath(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data was failed!",
        })
      )
    );
  }, [product, dispath]);

  return (
    <Fragment>
      {notification && (
        <Notifications
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {doShowCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
