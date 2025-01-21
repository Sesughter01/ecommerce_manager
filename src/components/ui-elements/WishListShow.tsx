'use client';
import { reloadWishlist } from "@/features/slices/wishlistSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

export default function WishListShow(): React.JSX.Element {
  const { wishlist } = useSelector((state: RootState) => state.wishlist) || { wishlist: [] };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reloadWishlist());
  }, [dispatch]);

  return (
    <>
      <span className="tp-product-count">{wishlist?.length}</span>
    </>
  );
}
