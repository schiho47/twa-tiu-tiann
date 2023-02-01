import Button from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import Image from "next/image";
import style from "./CartItems.module.scss";
import Input from "@components/FormControl/Input";
import { useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../store/cart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ChangeEvent } from "react";
interface CartItemsProps {
  id: number;
  src: string;
  title: string;
  price: string;
  quantity: number;
}
const CartItems: React.FC<CartItemsProps> = ({
  id,
  src,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const handleRemoveCart = (id: number) => {
    dispatch(removeItem(id));
  };
  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };
  return (
    <div className={style.item}>
      <div className={style.img}>
        <Image src={src} alt={title} width={200} height={200} />
      </div>
      <div className={style.title}>
        <Typography variant={"h6"}>{title}</Typography>
        <Typography variant={"subtitle1"}>{`$${price}`}</Typography>
      </div>
      <div className={style.order}>
        <RemoveIcon
          fontSize="small"
          onClick={() => handleDecrement(id)}
          sx={{ cursor: "pointer" }}
        />
        <Input
          title={"數量"}
          id={`${id}`}
          error={false}
          value={`${quantity}`}
          onChange={() => {}}
          name={""}
          style={{ marginLeft: "0.5rem" }}
        />
        <AddIcon
          fontSize="small"
          onClick={() => handleIncrement(id)}
          sx={{ cursor: "pointer" }}
        />
        <Button
          text={"刪除"}
          variant={"outlined"}
          onClick={() => handleRemoveCart(id)}
          sx={{ marginLeft: "1rem" }}
        />
      </div>
    </div>
  );
};

export default CartItems;
