import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import style from "./SpecialEvent.module.scss";

interface SpecialEventProps {
  title: string;
  detail: string;
  link: string;
  img: string;
}
const SpecialEvent: React.FC<SpecialEventProps> = ({
  title,
  detail,
  link,
  img,
}) => {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={style.event}>
        <Typography
          variant={"h6"}
          sx={{
            border: "1px solid",
            maxWidth: "14rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant={"subtitle1"}
          sx={{
            textAlign: "left",
            marginBottom: "1rem",
            maxWidth: "100%",
          }}
        >
          {detail}
        </Typography>
        <div className={style.button}>
          <Link href={link}>
            <Button text={"更多資訊"} variant={"contained"} size="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialEvent;
