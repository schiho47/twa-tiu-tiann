import Typography from "@components/Typography/Typography";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./Product.module.scss";
import Button from "@components/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

interface ProductProps {
  id: number;
  img: string;
  title: string;
  price: string;
}
const Product: React.FC<ProductProps> = ({ id, img, title, price }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, img, price }));
  };
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Image
          src={img}
          alt={title}
          width={300}
          height={300}
          layout="responsive"
        />
      </div>

      <Typography
        variant="subtitle1"
        sx={{ marginTop: "0.5rem", fontWeight: "500", fontSize: "18px" }}
      >
        {title} {`$${price}`}
      </Typography>

      <Button
        text={"加入購物車"}
        variant={"contained"}
        icon={
          <ShoppingCartIcon sx={{ marginRight: "0.5rem", cursor: "pointer" }} />
        }
        color="primary"
        onClick={handleAddToCart}
        sx={{ marginBottom: "1rem", marginTop: "1rem" }}
      />
    </div>
  );
};

export default Product;
