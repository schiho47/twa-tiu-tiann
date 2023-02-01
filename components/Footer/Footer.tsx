import Typography from "@components/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import style from "./Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className={style.container}>
      <div>
        <Image
          src="/assets/index/footer.png"
          alt="footer"
          width={250}
          height={130}
        />
      </div>
      <div className={style.pages}>
        <Link href={"/history"}>
          <Typography variant="overline"> 歷史大稻埕</Typography>
        </Link>
        <Link href={"/stores_and_tours"}>
          <Typography variant="overline">店舖景點介紹</Typography>
        </Link>
        <Link href={"/online-shop"}>
          <Typography variant="overline">線上購物</Typography>
        </Link>
        <Link href={"/events"}>
          <Typography variant="overline">特色活動</Typography>
        </Link>
        <Link href={"/login"}>
          <Typography variant="overline">會員登入</Typography>
        </Link>
        <Link href={"/sorry"}>
          <Typography variant="overline">訂單查詢</Typography>
        </Link>
      </div>
      <div className={style.contact}>
        <Typography variant="subtitle1">聯絡我們</Typography>
        <div>
          <Link href={"/sorry"}>
            <FacebookIcon fontSize="large" />
          </Link>
          <Link href={"/sorry"}>
            <InstagramIcon fontSize="large" />
          </Link>
          <Link href={"/sorry"}>
            <TwitterIcon fontSize="large" />
          </Link>
        </div>
      </div>
      <div className={style.safe}>
        <Typography variant="overline">
          本網站為緯育TibaMe前端設計工程師班第68期學員專題作品，本平台僅供學習、展示之
          用。參考資源:XXXXXXXXXXXXX。若有侵權疑慮，您可以私訊[TibaMe-前端設計工程師養
          成班]，後續會由專人協助處理。
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
