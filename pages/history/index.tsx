import { useContext, useEffect } from "react";
import Image from "next/image";
import Navigation from "@components/Navigation/Navigation";
import style from "@styles/History.module.scss";
import { useState } from "react";
import Typography from "@components/Typography/Typography";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TimeLine from "@components/TimeLine/TimeLine";
import Button from "@components/Button/Button";
import Footer from "@components/Footer/Footer";
import HamStatusContext from "context/ham-status-context";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface HistoryPageProps {}
const History = () => {
  const { isHamOpen, handleClose } = useContext(HamStatusContext);
  const [startIconHover, setStartIconHover] = useState(false);
  const hoverLink = {
    display: "flex",
    alienItem: "center",
    justifyContent: "right",
    "&:hover": {
      color: "#be3128",
      textDecoration: "underLine",
    },
  };
  const iconHover = startIconHover ? { transform: "scale(1.5)" } : {};
  useEffect(() => {
    handleClose();
  }, []);

  return (
    <div className={isHamOpen ? style.unScrollPage : style.container}>
      <Navigation />
      <div className={style.main}>
        <div className={style.start}>
          <Image
            src="/assets/history/map.png"
            width={600}
            height={500}
            alt="old-map"
          />
          <div className={style.startIntro}>
            <Typography variant="h3">源起</Typography>
            <div className={style.introBody}>
              <Typography variant="body1">
                以前大稻埕一帶均為社名「奇武族」或「奎母族」平埔族人之居住地。
                據西元1697
                年郁永河所著的《裨海紀遊》中描述之「康熙台北湖」景況推論，當時大稻埕
                應尚無漢人之足跡。 康熙48年
                (西元1709年)陳賴章取得大加臘堡墾照，准許開墾的範圍涵蓋整個大台北區盆地，
                之後始有漢人在這裡耕種，以布匹米酒等物與平埔族人交易鹿皮。
                當時有個很大的曬稻穀場子，為 大稻埕名稱之由來。
                1853年，艋舺的泉州三邑人與同安人爆發「頂下郊拚」族群械鬥，較為劣勢的同安人由林右藻率領，
                帶著霞海城隍爺神像離開了艋舺，到大稻埕落腳。大稻埕逐漸進入了漢人在台開發史的歷史舞台，
                而大稻埕成為目前我們所知的臺灣歷史上重要文化商業場所，則是1860年淡水開港後的事了。
              </Typography>
            </div>
            <div
              className={style.button}
              onMouseOver={() => setStartIconHover(true)}
              onMouseLeave={() => setStartIconHover(false)}
            >
              <Link
                href={
                  "https://si.secda.info/ddc_museum/?project=%e5%a4%a7%e7%a8%bb%e5%9f%95%e6%ba%90%e8%b5%b7"
                }
                target="_blank"
              >
                <Typography variant="button" sx={hoverLink}>
                  更多大稻埕源起 <ChevronRightIcon sx={iconHover} />
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.timeLine}>
          <TimeLine />
        </div>
        <div className={style.button}>
          <Link
            href={
              "https://walkin.tw/tour/88?gclid=CjwKCAjwhMmE%20%20%20%20%20%20BhBwEiwAXwFoEZR8ac5f8H73rBSZ7oSxLOuUiILY2RNQCdVsbIA1mXGXHS1nuul6zxoCsfEQAv%20%20%20%20%20%20D_BwE"
            }
            target="_blank"
          >
            <Button
              color="primary"
              text="導覽預約"
              variant="contained"
              size="large"
              sx={{ fontSize: "18px" }}
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
export const getStaticProps: GetStaticProps<HistoryPageProps> = async (
  context
) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
