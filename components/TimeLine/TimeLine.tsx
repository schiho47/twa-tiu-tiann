import React from "react";
import MuiTimeLine from "@mui/lab/Timeline";
import TimelineItem from "./TimeLineItem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import CampaignIcon from "@mui/icons-material/Campaign";
import LiquorIcon from "@mui/icons-material/Liquor";
import BrushIcon from "@mui/icons-material/Brush";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LensIcon from "@mui/icons-material/Lens";
const timeLineData = [
  {
    title: "1860年代 淡水開港",
    detail:
      "大稻埕的商業歷史以販售茶業、布匹以及南北貨為主，開港後興盛的茶業貿易， 不只為大稻埕帶來繁華， 更讓臺灣走入了世界。",
    img: "/assets/history/tea_work.jpeg",
    icon: <EmojiFoodBeverageIcon />,
    iconSx: { backgroundColor: "green" },
  },
  {
    title: "1869年 Formosa Tea",
    detail:
      "西方商人開始來台，英國的商人杜德（John Dodd）創設了寶順洋行 ，引進福建安溪茶苗於臺灣本地栽培、生產、收購。 杜德與買辦李春生合作，在艋舺、大稻埕一代發展製茶工廠與設立洋行，1869 年，從大稻埕 出發的兩艘帆船，運載著 2,131擔（大約 9 萬 2 千公斤）的臺灣烏龍茶直接輸往紐約。才 剛上市就廣受好評，臺灣茶葉開始以 Formosa Oolong Tea 的品牌橫掃美國市場。",
    img: "/assets/history/ad.jpg",
    icon: <EmojiFoodBeverageIcon />,
    iconSx: { backgroundColor: "green" },
  },
  {
    title: "1916年 臺灣文化協會成立",
    detail:
      "1916年蔣渭水先生在大稻埕成立大安醫院（現延平北路義美食品），1921年與林獻堂等人 在現址靜修女中成立臺灣文化協會，成立宗旨為「謀求臺灣文化的建立，民族運動的啟蒙」， 成員集結島內菁英，包括地主、醫生、律師、教授、記者、書記等，至1927年分裂為止，期 間以大稻埕為中心，「發行會報」、「讀報社」、「講習會」、「夏季學校」、「文化講演 會」致力於推動臺灣文化至全島，以凝聚島人民族意識，追求體制內的改革。",
    img: "/assets/history/culture.jpg",
    icon: <CampaignIcon />,
    iconSx: { backgroundColor: "gray" },
  },
  {
    title: "1917年 江山樓創立",
    detail:
      "大稻埕的人文薈萃，在日治時期達到顛峰，日治時期大稻埕四大名樓：「蓬萊閣」、 「東薈芳」、「江山樓」和「春風得意樓 」，成為地方仕紳聚集的場所，波麗路（BOLERO） 、山水亭、天馬茶房也是重要的文藝空間。為大稻埕留下文學、音樂、繪畫等不同作品。",
    img: "/assets/history/restaurant.jpeg",
    icon: <LiquorIcon />,
    iconSx: { backgroundColor: "#be3128" },
  },
  {
    title: "1928年 臺灣工友總聯盟",
    detail:
      "「臺灣工友總聯盟」是臺灣日治時期臺灣的第一個全島性工人運動組織，成立當天會場掛有蔣渭水有名標語「同胞須團結，團結真有力」，在蔣渭水的領導下，積極介入勞資爭議，並以工友會名義組織勞動團體。其宗旨在於統一全島工人運動，為工人謀福利及改善店員生活。",
    img: "/assets/history/labour.jpg",
    icon: <CampaignIcon />,
    iconSx: { backgroundColor: "gray" },
  },
  {
    title: "1929年 國際書局與臺灣共產黨",
    detail:
      "除了搭上1910年代世界民主化，日本大正民主時期的臺灣文化協會，第一次世界大戰過 後，世界掀起的共產主義浪潮，臺灣人也沒有缺席，而發展的地點，則一樣在繁華富庶的 大稻埕。 1929年謝雪紅與楊克培於大稻埕創立國際書店（現延平北路開普洋酒），當時謝雪紅剛從 莫斯科回國不久，準備在臺灣發展共產黨組織，而楊克培則是臺灣農民組合重要成員，兩 人共同開店，取名「國際」與「共產國際」連結，並靠著販售醫學等不同領域用書，聚集 菁英，交流思想壯大組織。 然而以上的政治活動，隨著1930年代日本政府對共產黨的大逮捕，以及之後的戰爭動員， 大稻埕充滿活力的政治運動，也因此逐漸沒落。",
    img: "/assets/history/bookshop.jpg",
    icon: <CampaignIcon />,
    iconSx: { backgroundColor: "gray" },
  },
  {
    title: "1930年 郭雪湖 南街殷賑",
    detail:
      "近年郭雪湖的《南街殷賑》成為大稻埕形象代表之一，郭雪湖1908年出生大稻埕， 1927年與陳進、林玉山入選「臺灣美術展覽會」，獲得「臺展三少年」的美名。",
    img: "/assets/index/slide1.jpg",
    icon: <BrushIcon />,
    iconSx: { backgroundColor: "#be3128" },
  },
  {
    title: "1933年 望春風的誕生",
    detail:
      "大稻埕為知名臺語歌曲「望春風」、「四季紅」作詞人李臨秋生長與活動的地方， 目前大稻埕有一座李臨秋紀念公園，內有揣摩李臨秋作詞時專注神情而製作的銅像，另 大稻埕目前也看得到李臨秋故居，紀念這位在臺灣音樂史上有著重要貢獻的文人。",
    img: "/assets/history/music.jpg",
    icon: <MusicNoteIcon />,
    iconSx: { backgroundColor: "#be3128" },
  },
  {
    title: "1943年 厚生演劇研究會",
    detail:
      "文學上，臺灣知名作家呂赫若、張文環等人過去皆曾活躍於大稻埕，許多作品也被改編 成戲劇，日治末期皇民化運動的背景下，日本成立「台灣演劇協會」，審查劇本，而臺灣 地方青年則成立「厚生演劇研究會」進行反擊，1943年在大稻埕公演「閹雞」、「高砂館」、 「地熱」、「從山上俯瞰都市的燈火」等四齣劇。並結合臺灣民謠，公演大獲成功，但也引 發「台灣演劇協會」不滿，第二天即被禁止活動，雖然短暫卻顯示出臺灣人不願屈服於殖民 體制下的勇氣。",
    img: "/assets/history/drama.jpg",
    icon: <LocalActivityIcon />,
    iconSx: { backgroundColor: "#be3128" },
  },
  {
    title: "1947年 二二八事件爆發地",
    detail:
      "1945年日本投降後，國民政府接管臺灣，在官員貪污腐敗與民生、文化、政治一連串錯 誤政策下，1947年於大稻埕天馬茶房（現南京西路189號）查緝私菸誤傷民眾事件成為導 火線，爆發全島的反抗政府運動，而之後國民政府並未與「二二八事件處理委員會」等臺 籍菁英對談，選擇清鄉鎮壓的方式，造成無數臺籍菁英與人民失蹤死亡，也造成了臺灣歷 史上難以平息的傷痛。",
    img: "/assets/history/1947.jpg",
    icon: <LensIcon />,
    iconSx: { backgroundColor: "gray" },
  },
];

const TimeLine = () => {
  return (
    <MuiTimeLine position="alternate">
      {timeLineData.map((data) => {
        return (
          <TimelineItem
            key={data.img}
            img={data.img}
            icon={data.icon}
            title={data.title}
            detail={data.detail}
            iconSx={data.iconSx}
          />
        );
      })}
    </MuiTimeLine>
  );
};

export default TimeLine;
