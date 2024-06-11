import { useContext } from 'react';
import styles from './CartItem.module.css';
import { CartContext } from '../App';

const products = JSON.parse(localStorage.getItem('products'));

export default function CartItem({ item }) {
  const curProduct = products.find((product) => product.id === item.id);
  const { updateItemQty, incrementQty, decrementQty, deleteItem } =
    useContext(CartContext);

  function handleQtyChange(e) {
    if (isNaN(e.target.value)) return;

    const updatedItem = { ...item, quantity: e.target.value };
    updateItemQty(updatedItem);
  }

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={curProduct.image} alt="" />
      </div>

      <div>
        <p>{curProduct.title}</p>
      </div>

      <div className={styles.quantityContainer}>
        <button
          className={styles.quantityBtn}
          type="button"
          name="decrease"
          onClick={() => decrementQty(curProduct.id)}
        >
          &minus;
        </button>
        <input
          className={styles.quantityInput}
          type="text"
          name="quantity"
          value={item.quantity}
          onChange={handleQtyChange}
        />
        <button
          className={styles.quantityBtn}
          type="button"
          name="increase"
          onClick={() => incrementQty(curProduct.id)}
        >
          &#43;
        </button>
      </div>

      <div className={styles.price}>
        ${(curProduct.price * item.quantity).toFixed(2)}
      </div>

      <button
        className={styles.deleteBtn}
        type="button"
        name="delete"
        onClick={() => deleteItem(curProduct.id)}
      >
        <span className={styles.cross}>&times;</span>
      </button>
    </div>
  );
}
