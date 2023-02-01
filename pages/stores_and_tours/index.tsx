import { useState, useEffect, useRef, useContext } from "react";
import { GetStaticProps, NextPage } from "next";
import Navigation from "@components/Navigation/Navigation";
import style from "@styles/StoresAndTours.module.scss";
import { data } from "../../data/stores_and_tours";
import Shop from "@components/Shop/Shop";
import Pagination from "@components/Pagination/Pagination";
import { StoreAndTourType } from "type/stores_and_tours";
import Typography from "@components/Typography/Typography";
import Input from "@components/FormControl/Input";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import HamStatusContext from "context/ham-status-context";
import Footer from "@components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface StoresAndToursProps {}
const StoresAndTours: NextPage<StoresAndToursProps> = () => {
  const { isHamOpen, handleClose } = useContext(HamStatusContext);
  const calcTotalPage = (dataLength: number) => {
    if (dataLength % 10 === 0) return dataLength / 10;
    return Math.ceil(dataLength / 10);
  };
  const initialTotalPage = calcTotalPage(data.length);

  const [currentPage, setCurrentPage] = useState(1);
  const [storeData, setStoreData] = useState(data);
  const [currentData, setCurrentData] = useState<StoreAndTourType[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("店舖與景點");
  const searchRef = useRef("");
  const [totalPage, setTotalPage] = useState(initialTotalPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchRef.current = e.target.value;
    setSearch(e.target.value);
  };

  const initialSetCurrentData = () => {
    if (currentPage === 1 && searchRef.current === "") {
      const newData = data.slice(0, 10);
      setCurrentData(newData);
    }
    if (currentPage > 1 && searchRef.current === "") {
      const newData = data.slice((currentPage - 1) * 10, currentPage * 10);
      setCurrentData(newData);
    }
  };
  const handleSearch = () => {
    setType(searchRef.current);
    setCurrentPage(1);
    if (searchRef.current !== "" && !searchRef.current.includes("#")) {
      const result = storeData.filter(
        (data) =>
          data.title.includes(searchRef.current) ||
          data.type.includes(searchRef.current)
      );
      setCurrentData(result);
      setTotalPage(calcTotalPage(result.length));
      return;
    }
    if (searchRef.current.includes("#")) {
      const result = storeData.filter((data) =>
        data.hashTag.includes(searchRef.current)
      );
      console.log("result", result);
      setCurrentData(result);
      setTotalPage(calcTotalPage(result.length));
      return;
    }
    if (searchRef.current === "") {
      setType("店舖與景點");
      setCurrentPage(1);
      setTotalPage(initialTotalPage);
      initialSetCurrentData();
    }
  };
  const handleClearSearch = () => {
    searchRef.current = "";
    setSearch("");
  };
  const handlePagination = (_: any, value: number) => {
    setCurrentPage(+value);
  };
  const handleTypeAndChipClick = (e: any) => {
    console.log(e);
    setSearch(e.target.innerText);
    searchRef.current = e.target.innerText;
  };

  useEffect(() => {
    initialSetCurrentData();
  }, [currentPage]);
  useEffect(() => {
    const storeSearch = localStorage.getItem("search");
    if (storeSearch && storeSearch !== "") {
      searchRef.current = storeSearch;
      setSearch(storeSearch);
      handleSearch();
      localStorage.removeItem("search");
    }
  }, []);
  useEffect(() => {
    handleClose();
  }, []);
  return (
    <div className={isHamOpen ? style.unScrollPage : style.container}>
      <Navigation />
      <div className={style.searchLine}>
        <Typography variant={"h6"}>{`「${type}」的搜尋結果：共${
          type === "店舖與景點" ? storeData.length : currentData.length
        }筆`}</Typography>
        <Input
          title={"搜尋"}
          id={"search"}
          error={false}
          style={{ width: "300px" }}
          icon={
            <span
              style={{
                position: "absolute",
                right: "0",
                top: "1rem",
                cursor: "pointer",
              }}
            >
              <ClearIcon color="disabled" onClick={handleClearSearch} />
              <SearchIcon onClick={handleSearch} />
            </span>
          }
          value={search}
          onChange={handleInputChange}
          name={"search"}
        />
      </div>
      <div className={style.main}>
        {currentData.length > 0 &&
          currentData.map((place) => {
            return (
              <Shop
                key={place.id}
                src={place.src}
                title={place.title}
                label={place.type}
                link={place.link}
                description={place.description}
                address={place.address}
                hashTag={place.hashTag}
                onClick={handleTypeAndChipClick}
              />
            );
          })}
        {currentData.length === 0 && (
          <div className={style.none}>
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <Typography variant="h4">
              沒有相對應的搜尋結果，請換個關鍵字再搜尋一次
            </Typography>
          </div>
        )}
      </div>
      {currentData.length > 0 && (
        <div className={style.pagination}>
          <Pagination
            count={totalPage}
            color="primary"
            handlePagination={(e: any, value) => handlePagination(e, value)}
            currentPage={1}
          />
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default StoresAndTours;

export const getStaticProps: GetStaticProps<StoresAndToursProps> = async (
  context
) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
