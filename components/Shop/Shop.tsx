import Chip from "@components/Chip/Chip";
import Typography from "@components/Typography/Typography";
import style from "./Shop.module.scss";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface ShopProps {
  src: string;
  title: string;
  label: string | string[];
  link: string;
  description: string;
  address: string;
  hashTag: string[];
  onClick: (e: any) => void;
}

const Shop: React.FC<ShopProps> = ({
  src,
  title,
  label,
  link,
  description,
  address,
  hashTag,
  onClick,
}) => {
  const hoverSx = {
    "&:hover": {
      color: "#be3128",
      textDecoration: "underLine",
    },
  };
  return (
    <div className={style.container}>
      <div className={style.shopImgDiv}>
        <Link href={link} target="_blank">
          <img src={src} alt={title} className={style.shopImg} />
        </Link>
      </div>
      <div className={style.main}>
        <div className={style.header}>
          {typeof label === "string" ? (
            <Chip
              key={uuidv4()}
              label={label}
              variant="outlined"
              color="primary"
              sx={{ marginRight: "5px", cursor: "pointer" }}
              onClick={(e) => onClick(e)}
            />
          ) : (
            label.map((word) => (
              <Chip
                key={uuidv4()}
                label={word}
                variant="outlined"
                color="primary"
                sx={{ marginRight: "5px", cursor: "pointer" }}
                onClick={(e) => onClick(e)}
              />
            ))
          )}

          {hashTag.length > 0 &&
            hashTag.map((tag) => (
              <Chip
                key={uuidv4()}
                label={tag}
                variant="outlined"
                color="info"
                sx={{ marginRight: "5px", cursor: "pointer" }}
                onClick={(e) => onClick(e)}
              />
            ))}
        </div>
        <div className={style.main}>
          <Typography variant={"h6"} sx={hoverSx}>
            <Link href={link} target="_blank">
              {title}
            </Link>
          </Typography>
          <span>
            <Typography
              variant={"body2"}
              sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              <Image
                src="/assets/store/location.png"
                width={13}
                height={15}
                alt="location"
                className={style.location}
              />
              {address}
            </Typography>
          </span>
          <Typography variant={"body2"}>{description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Shop;
