import { useEffect, useState } from "react";
import style from "./ShopAndTour.module.scss";
import { v4 as uuidv4 } from "uuid";
import RestaurantIcon from "@mui/icons-material/Restaurant"; //精緻美食
import RamenDiningIcon from "@mui/icons-material/RamenDining"; //平價美食
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist"; //廟宇
import MuseumIcon from "@mui/icons-material/Museum"; // 博物館
import StorefrontIcon from "@mui/icons-material/Storefront"; // 商家
import CoffeeIcon from "@mui/icons-material/Coffee";
//飲料
import FoodBankIcon from "@mui/icons-material/FoodBank";
import InfoIcon from "@mui/icons-material/Info"; //其他
import Input from "@components/FormControl/Input";
import SearchIcon from "@mui/icons-material/Search";
import GrassIcon from "@mui/icons-material/Grass";
import ClearIcon from "@mui/icons-material/Clear";
import Chip from "@components/Chip/Chip";
import Typography from "@components/Typography/Typography";
import { useRouter } from "next/router";
const items = [
  { icon: <RestaurantIcon fontSize="large" />, title: "精緻美食", id: 1 },
  { icon: <RamenDiningIcon fontSize="large" />, title: "平價美食", id: 2 },
  { icon: <CoffeeIcon fontSize="large" />, title: "精選飲品", id: 3 },
  { icon: <TempleBuddhistIcon fontSize="large" />, title: "廟宇", id: 4 },
  { icon: <MuseumIcon fontSize="large" />, title: "博物館", id: 5 },
  { icon: <StorefrontIcon fontSize="large" />, title: "精品商家", id: 6 },
  { icon: <FoodBankIcon fontSize="large" />, title: "美食禮品", id: 7 },
  { icon: <GrassIcon fontSize="large" />, title: "中藥行", id: 8 },
  { icon: <InfoIcon fontSize="large" />, title: "其他", id: 9 },
];

const hashTag = [
  "#百年老店",
  "#打卡景點",
  "#聚餐吃飯",
  "#伴手禮",
  "#文青勝地",
  "#尋找甜食",
  "#南北雜貨",
  "#運動健身",
  "#探索歷史",
  "#情侶約會",
  "#遛小孩",
  "#遛毛小孩",
  "#可以刷卡",
];
interface ShopAndTourProps {}
const ShopAndTour: React.FC<ShopAndTourProps> = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    localStorage.setItem("search", search);
    router.push("/stores_and_tours");
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("keypress", handleKeyPress);
    }
  }, [search]);
  return (
    <div className={style.container}>
      <div className={style.items}>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className={style.item}
              onClick={() => setSearch(item.title)}
            >
              {item.icon}
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className={style.search}>
        <Input
          title={"搜尋"}
          id={"search"}
          error={false}
          icon={
            <span
              style={{
                position: "absolute",
                right: "0",
                top: "1rem",
                cursor: "pointer",
              }}
            >
              <ClearIcon color="disabled" onClick={() => setSearch("")} />
              <SearchIcon onClick={handleSearch} />
            </span>
          }
          value={search}
          onChange={handleInputChange}
          name={"search"}
        />
        <div>
          <Typography variant={"subtitle2"}>依照關鍵字搜尋</Typography>
          <div className={style.hangTag}>
            {hashTag.map((tag) => {
              return (
                <span key={uuidv4()} onClick={() => setSearch(tag)}>
                  <Chip
                    label={tag}
                    sx={{ fontWeight: "bold", cursor: "pointer" }}
                    onClick={() => {}}
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAndTour;
