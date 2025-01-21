'use client';
import { reloadCart } from "@/features/slices/shopSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

export default function CartShow() {
  const { cart } = useSelector((state: RootState) => state.shop) || { cart: [] };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reloadCart());
  }, [dispatch]);

  return (
    <>
      <span className="tp-product-count">{cart?.length}</span>
    </>
  );
}
