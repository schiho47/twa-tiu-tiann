import Chip from "@components/Chip/Chip";
import Typography from "@components/Typography/Typography";
import style from "./NewsCard.module.scss";
import Link from "next/link";
import CampaignIcon from "@mui/icons-material/Campaign";
interface NewsCardProps {
  src: string;
  title: string;
  link: string;
  time: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ src, title, time, link }) => {
  const hoverSx = {
    "&:hover": {
      color: "#be3128",
      textDecoration: "underLine",
    },
  };
  return (
    <div className={style.container}>
      <Link href={link} target="_blank">
        <img src={src} alt={title} />
      </Link>
      <div className={style.main}>
        <div className={style.header}>
          <CampaignIcon />
          <Typography variant="body1">{time}</Typography>
        </div>
        <div className={style.content}>
          <Typography variant={"subtitle1"} sx={hoverSx}>
            <Link href={link} target="_blank">
              {title}
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
