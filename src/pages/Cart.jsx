import PageNav from '../components/PageNav';
import styles from './Cart.module.css';

// const testItems = [
//   { id: 1, title: 'Item 1', quantity: 2, image: '../bg.jpg', price: 100 },
//   { id: 2, title: 'Item 2', quantity: 1, image: '../bg.jpg', price: 50 },
// ];

const products = JSON.parse(localStorage.getItem('products'));

function Item({ item }) {
  console.log(products);
  const curProduct = products.find((product) => product.id === item.id);
  console.log(curProduct);

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={curProduct.image} alt="" />
      </div>

      <div className={styles.description}>
        <p>{curProduct.title}</p>
      </div>

      <div className={styles.quantityContainer}>
        <button className={styles.quantityBtn} type="button" name="button">
          -
        </button>
        <input
          className={styles.quantityInput}
          type="text"
          name="name"
          value={item.quantity}
        />
        <button className={styles.quantityBtn} type="button" name="button">
          +
        </button>
      </div>

      <div className={styles.price}>
        ${(curProduct.price * item.quantity).toFixed(2)}
      </div>

      <span className={styles.deleteBtn}>&times;</span>
    </div>
  );
}

function CartTotal({ cart }) {
  const prices = cart.map((item) => {
    const product = products.find((product) => product.id === item.id);
    return item.quantity * product.price;
  });

  const total = prices.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className={styles.cartTotal}>
      <div>
        <p>
          <span className={styles.total}>Total </span>${total.toFixed(2)}
        </p>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  );
}

export default function ShoppingCart({ cart }) {
  return (
    <main className={styles.cart}>
      <PageNav />
      <section>
        <h2>Shopping Cart</h2>
        {cart.length > 0 && (
          <>
            <div className={styles.shoppingCart}>
              <ul>
                {cart.map((item) => {
                  return <Item item={item} key={item.id}></Item>;
                })}
              </ul>
            </div>
            <CartTotal cart={cart} />
          </>
        )}
      </section>
    </main>
  );
}
