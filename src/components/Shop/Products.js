import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test2",
    price: 16,
    description:
      "This is a second product - There is a disregard of the quality!",
  },
  {
    id: "p3",
    title: "Test3",
    price: 26,
    description: "This is a third product -Crap! It's awful!",
  },
];

const Products = (props) => {
  const produstList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    ></ProductItem>
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{produstList}</ul>
    </section>
  );
};

export default Products;
