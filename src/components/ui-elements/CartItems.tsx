'use client';
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addQty, deleteCart } from "@/features/slices/shopSlice";
import { CartItem } from "@/shared/types/cart";
import { RootState } from "@/store";
import { ChangeEvent } from "react";

// type CartItem = {
//   id: number;
//   imgf: string;
//   title: string;
//   price: {
//     max: number;
//   };
//   qty: number;
// };

const CartItems = () => {
  const { cart } = useSelector((state: RootState) => state.shop) || { cart: [] };

  const dispatch = useDispatch();

  // delete cart item
  const deleteCartHandler = (id: number) => {
    dispatch(deleteCart(id));
  };

  // qty handler
  const qtyHandler = (id: number, qty: string) => {
    const quantity = parseInt(qty, 10);
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(addQty({ id, qty: quantity }));
    }
  };

  return (
    <>
      {cart?.map((item: CartItem) => (
        <tr className="cart-item" key={item.id}>
          <td className="product-thumbnail">
            <Link href={`/shop/${item.id}`}>
              {/* <img 
                src={`/assets/img/product/${item.imgf}`} 
                alt="cart added product" 
              /> */}
                 <Image
                    src={`/assets/img/product/${item.imgf}`}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
            </Link>
          </td>

          <td className="product-name">
            <Link href={`/shop/${item.id}`}>
              {item.title}
            </Link>
          </td>

          <td className="product-price">${item.price.max}</td>

          <td className="product-quantity">
            <div className="item-quantity">
              <input
                type="number"
                className="qty"
                name="qty"
                defaultValue={item.qty}
                min={1}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  qtyHandler(item.id, e.target.value)
                }
              />
            </div>
          </td>

          <td className="product-subtotal"> 
            <span className="amount">
              ${(item.qty * item.price.max).toFixed(2)}
            </span>
          </td>

          <td className="product-remove">
            <button
              onClick={() => deleteCartHandler(item.id)}
              className="remove"
            >
              <span className="flaticon-dustbin">Remove</span>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItems;
