'use client';
import { addCart } from "@/features/slices/shopSlice";
import { addQty, deleteWishlist } from "@/features/slices/wishlistSlice";
import Link from "next/link";
import products from "@/data/products.json";
import { WishlistItem  } from "@/shared/types/wishlistItem";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "@/shared/types/cart";
import { RootState } from "@/store";
import { ChangeEvent } from "react";

// type WishlistItem = {
//   id: number;
//   imgf: string;
//   title: string;
//   price: {
//     max: number;
//   };
//   qty: number;
// };

const WishlistItems: React.FC = () => {
  const { wishlist } = useSelector((state: RootState) => state.wishlist) || { wishlist: [] };

  const dispatch = useDispatch();

  // const addToCart = (id: number) => {
  //   const item = products?.find((product) => product.id === id);
  //   if (item) {
  //     dispatch(addCart({ product: item }));
  //   }
  // };
  const addToCart = (id: number) => {
    const item = products.find((product) => product.id === id);
    if (item) {
      const cartItem: CartItem = {
        id: item.id,
        name: item.title, // Map 'title' to 'name'
        imgf: item.imgf,
        imgb: item.imgb,
        category: item.category,
        color: item.color,
        brand: item.brand,
        price: item.price,
        qty: 1, // Default quantity
      };
      dispatch(addCart({ product: cartItem }));
    }
  };
  

  const deleteCartHandler = (id: number) => {
    dispatch(deleteWishlist(id));
  };

  const qtyHandler = (id: number, qty: string) => {
    const quantity = parseInt(qty, 10);
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(addQty({ id, qty: quantity }));
    }
  };

  return (
    <>
      {wishlist?.map((item: WishlistItem) => (
        <tr className="cart-item" key={item.id}>
          <td className="product-thumbnail">
            <Link href={`/shop/${item.id}`}>
              <img
                src={`/assets/img/product/${item.imgf}`} alt="cart added product" />
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

          <td className="product-add-to-cart">
            <a
              onClick={() => addToCart(item.id)}
              className="tp-btn tp-color-btn  tp-wish-cart banner-animation"
            >
              Add To Cart
            </a>
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

export default WishlistItems;
