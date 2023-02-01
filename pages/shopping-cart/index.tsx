import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "@styles/ShoppingCart.module.scss";
import HamStatusContext from "context/ham-status-context";
import Navigation from "@components/Navigation/Navigation";
import Typography from "@components/Typography/Typography";
import CartItems from "@components/CartItems/CartItems";
import { CartStateType } from "type/cart";
import Footer from "@components/Footer/Footer";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface ShoppingCartPageProps {}
const ShoppingCart = () => {
  const { isHamOpen, handleClose } = useContext(HamStatusContext);
  const products = useSelector((state: CartStateType) => state.cart);

  const handleGetTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += +item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  // useEffect(() => {
  //   handleGetTotal();
  // }, [products]);
  useEffect(() => {
    handleClose();
  }, []);
  return (
    <>
      <div className={isHamOpen ? style.unScrollPage : style.container}>
        <Navigation />
        <div className={style.title}>
          <Typography variant={"h4"}>購物車</Typography>
        </div>

        <div className={style.cart}>
          {products.length === 0 && (
            <div className={style.nothing}>
              <Typography variant={"h6"} sx={{ textAlign: "center" }}>
                目前購物車沒有商品!
              </Typography>
            </div>
          )}
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CartItems
                  id={product.id}
                  src={product.img}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                />
              );
            })}
          {products.length > 0 && (
            <div className={style.total}>
              <Typography variant="subtitle1">總計</Typography>
              <Typography variant="subtitle1">
                {products.length > 0 &&
                  `共${handleGetTotal().totalQuantity}件商品    $${
                    handleGetTotal().totalPrice
                  }`}
              </Typography>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ShoppingCart;

export const getStaticProps: GetStaticProps<ShoppingCartPageProps> = async (
  context
) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
