import { useContext, useEffect } from "react";
import EventsImages from "@components/EventsImages/EventsImages";
import Footer from "@components/Footer/Footer";
import Navigation from "@components/Navigation/Navigation";
import Product from "@components/Product/Product";
import SpecialEvent from "@components/SpecialEvent/SpecialEvent";
import Typography from "@components/Typography/Typography";
import { textAlign } from "@mui/system";
import style from "@styles/Events.module.scss";
import HamStatusContext from "context/ham-status-context";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const events = [
  {
    title: "年貨大街",
    detail:
      "迪化街以辦年貨聞名，民眾所熟知的迪化街，位於臺北大橋以南的迪化街1段。這兒是大稻埕的一部份，見證了臺灣國際貿易與商 業的發展史。大稻埕的貿易活動從清末到日治初期，以南北雜貨、茶行為主，光復後則為南北貨、中藥和布匹批發商集中地，至 今迪化街仍大致維持原貌，沒有太大改變。 每當年節來臨，這裡總是摩肩擦踵、人潮絡繹不絕。2008年政府預計將迪化商圈擴大，納入民生西路和南京西路沿線至市民大道、 以及寧夏夜市與後火車站附近，讓商家及商品更加多元化，今後要辦年貨，將能有更多的選擇。",
    link: "https://www.travel.taipei/zh-tw/attraction/details/1541",
    img: "/assets/event/new-year.jpg",
  },
  {
    title: "霞海城隍文化節",
    detail:
      "臺北「迎城隍」是大稻埕自清朝以來最大的盛事，更有俗諺「五月十三人看人」來形容城隍爺遶境時的盛況，【台北霞海城隍文化節】 重現每年一次的盛大祭典及儀式，除了農曆5月14日霞海城隍生日的祭典法會，還舉辦一系列的文化節活動，透過展覽、市集、 演出、講座讓大家用輕鬆的方式了解迎城隍文化，看熱鬧也可以看門道，更可以體會信仰傳承的力量以及大稻埕特色產業！",
    link: "https://www.religiouscarnival.com/edcontent.php?lang=tw&tb=5",
    img: "/assets/event/temple_event.jpg",
  },
  {
    title: "大稻埕情人節",
    detail:
      "每年農曆七夕前周末假日於大稻埕碼頭周邊舉辦，為臺灣最具代表性的七夕情人節慶活動，除了歌手團體接力演出一首首情歌，並將施放 情人煙火秀(或其他創意展演)，現場還有愛情文創市集、胖卡美食、清涼啤酒專區與有趣的體驗活動，歡迎你(妳)帶著情人或家人、朋友一 起來大稻埕河岸享受浪漫的時光。 本活動並結合在地商圈及產業推出前期活動，及與旅行社合作打造專屬遊程，邀請民眾走進街區，漫步臺北舊城區巷弄間，細細體會 大稻埕經典小鎮魅力。",
    link: "https://www.travel.taipei/zh-tw/event-calendar/details/25310",
    img: "/assets/event/firework.jpeg",
  },
  {
    title: "大稻埕國際藝術節",
    detail:
      "這裡是連結1920年代與2020年代的時空劇場。 大稻埕的精神就是1920年代精神。1920年代，是充滿熱情理想的年代。全世界的知識青年蜂起，爭取自 由平等獨立。彼時的大稻埕，是商業與貿易重鎮，也是現代臺灣意識的起源地，文化運動的搖籃基地。 1921年10月17日，蔣渭水等先賢在大稻埕創立臺灣文化協會，指出臺灣人的天命即是促進人類文明。從此新文化運動蔓延全臺。 代表著現代臺灣意識的各類藝文創作蓬勃盛行於此。「大稻埕國際藝術節」結合多個深耕大稻埕的在地文化單位，每年整個10月舉辦近百場的藝文展演活動。 每年10月17日當週週末的「1920變裝遊行」為「大稻埕國際藝術節」的重頭戲之一，邀請大家一起打扮成喜愛的1920年代人物，回到1920年，世界的大稻埕！",
    link: "https://tttifa.com/zh/home/",
    img: "/assets/event/art.jpg",
  },
];
interface EventsPageProps {}

const Events = () => {
  const { isHamOpen, handleClose } = useContext(HamStatusContext);
  useEffect(() => {
    handleClose();
  }, []);
  return (
    <div className={isHamOpen ? style.unScrollPage : style.container}>
      <Navigation />
      <Typography
        variant={"h4"}
        sx={{ textAlign: "center", margin: "2rem auto" }}
      >
        特色活動
      </Typography>
      <div>
        {events.map((event) => {
          return (
            <SpecialEvent
              key={event.img}
              title={event.title}
              detail={event.detail}
              link={event.link}
              img={event.img}
            />
          );
        })}
      </div>
      <Typography
        variant={"h4"}
        sx={{ textAlign: "center", margin: "2rem auto" }}
      >
        活動剪影
      </Typography>
      <div className={style.images}>
        <EventsImages />
      </div>
      <Footer />
    </div>
  );
};

export default Events;

export const getStaticProps: GetStaticProps<EventsPageProps> = async (
  context
) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
