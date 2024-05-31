import PageNav from '../components/PageNav';
import styles from './Cart.module.css';

const testItems = [
  { id: 1, title: 'Item 1', quantity: 2, image: '../bg.jpg', price: 100 },
  { id: 2, title: 'Item 2', quantity: 1, image: '../bg.jpg', price: 50 },
];

function Item({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={testItems[0].image} alt="" />
      </div>

      <div className={styles.description}>
        <p>{testItems[0].title}</p>
      </div>

      <div className={styles.quantityContainer}>
        <button className={styles.quantityBtn} type="button" name="button">
          -
        </button>
        <input
          className={styles.quantityInput}
          type="text"
          name="name"
          value={testItems[0].quantity}
        />
        <button className={styles.quantityBtn} type="button" name="button">
          +
        </button>
      </div>

      <div className={styles.price}>
        ${(testItems[0].price * testItems[0].quantity).toFixed(2)}
      </div>

      <span className={styles.deleteBtn}>&times;</span>
    </div>
  );
}

function CartTotal() {
  return (
    <div className={styles.cartTotal}>
      <div>
        <p>
          <span className={styles.total}>Total </span>$1000.00
        </p>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  );
}

export default function ShoppingCart({ products, cart }) {
  return (
    <main className={styles.cart}>
      <PageNav />
      <section>
        <h2>Shopping Cart</h2>
        {/* <ul>
          {cart.map((item) => (
            <Item item={item} key={item.id}>
              {item.title}
            </Item>
          ))}
        </ul> */}
        <div className={styles.shoppingCart}>
          {/* Item 1 */}
          <Item />
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={testItems[1].image} alt="" />
            </div>

            <div className={styles.description}>
              <p>{testItems[1].title}</p>
            </div>

            <div className={styles.quantityContainer}>
              <button
                className={styles.quantityBtn}
                type="button"
                name="button"
              >
                -
              </button>
              <input
                className={styles.quantityInput}
                type="text"
                name="name"
                value={testItems[1].quantity}
              />
              <button
                className={styles.quantityBtn}
                type="button"
                name="button"
              >
                +
              </button>
            </div>

            <div className={styles.price}>
              ${(testItems[1].price * testItems[1].quantity).toFixed(2)}
            </div>

            <span className={styles.deleteBtn}>&times;</span>
          </div>
        </div>
        {/* <ul>
          {testItems.map((item) => (
            <Item item={item} key={item.id}>
              {item.title}
            </Item>
          ))}
        </ul> */}
        <CartTotal />
      </section>
    </main>
  );
}
