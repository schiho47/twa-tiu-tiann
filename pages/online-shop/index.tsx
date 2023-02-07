import { useContext, useEffect } from "react";
import Footer from "@components/Footer/Footer";
import Navigation from "@components/Navigation/Navigation";
import Product from "@components/Product/Product";
import style from "@styles/OnlineShop.module.scss";
import HamStatusContext from "context/ham-status-context";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const products = [
  {
    id: 1,
    title: "大華行茄芷袋後背包 ",
    price: "350",
    img: "/assets/products/bag.jpg",
    quantity: 0,
  },
  {
    id: 2,
    title: "李亭香翠玉綠豆糕(15入)",
    price: "220",
    img: "/assets/products/cake.jpg",
    quantity: 0,
  },
  {
    id: 3,
    title: "火星猴子 花生鬆餅 (8入/盒)",
    price: "390",
    img: "/assets/products/monkey.jpeg",
    quantity: 0,
  },
  {
    id: 4,
    title: "有記名茶 鐵觀音300公克",
    price: "2500",
    img: "/assets/products/cake.jpg",
    quantity: 0,
  },
  {
    id: 5,
    title: "花生騷森林動物系列繡片別針",
    price: "120",
    img: "/assets/products/animals.jpg",
    quantity: 0,
  },
  {
    id: 6,
    title: "江記華隆 杏仁豬肉紙 180g ",
    price: "310",
    img: "/assets/products/meat.jpeg",
    quantity: 0,
  },
  {
    id: 7,
    title: "義美鳳梨酥禮盒(10入)",
    price: "400",
    img: "/assets/products/pineapple-cake.jpeg",
    quantity: 0,
  },
  {
    id: 8,
    title: "大稻埕小日禮盒(3入) 6包／盒",
    price: "350",
    img: "/assets/products/tea-box.jpg",
    quantity: 0,
  },
  {
    id: 9,
    title: "生元草本_慈禧玉容淨白面膜 120ml",
    price: "1920",
    img: "/assets/products/beauty.png",
    quantity: 0,
  },
];
interface OnlineShopPageProps {}
const OnlineShop = () => {
  const { isHamOpen, handleClose } = useContext(HamStatusContext);
  useEffect(() => {
    handleClose();
  }, []);
  return (
    <div className={isHamOpen ? style.unScrollPage : style.container}>
      <Navigation />
      <div className={style.product}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default OnlineShop;

export const getStaticProps: GetStaticProps<OnlineShopPageProps> = async (
  context
) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
