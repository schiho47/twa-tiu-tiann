import Typography from "@components/Typography/Typography";
import Image from "next/image";
import style from "./TransportInfo.module.scss";

const TransportInfo = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.map}>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=25.055084,121.509981&zoom=14&size=400x400&language=tw&markers=25.055084,121.509981&key=AIzaSyAqVXvoNqTyEiiHoLQcwjFida6w-uI0upc"
            alt="大稻埕迪化街"
          />
        </div>
        <div className={style.info}>
          <div className={style.detail}>
            <Image
              src={"/assets/index/transport/MRT.png"}
              alt={"MRT"}
              width={45}
              height={40}
            />
            <Typography variant={"body1"}>
              至橘線大橋頭站、紅線雙連站、綠線北門站下車後，皆可步行 抵達。
            </Typography>
          </div>
          <div className={style.detail}>
            <Image
              src={"/assets/index/transport/bus.png"}
              alt={"bus"}
              width={35}
              height={38}
            />
            <ul>
              <li>
                <Typography variant={"body1"}>
                  大稻埕碼頭：綠17、紅33
                </Typography>
              </li>
              <li>
                <Typography variant={"body1"}>迪化街：811、紅33</Typography>
              </li>
              <li>
                <Typography variant={"body1"}>
                  民生西路口（大稻埕碼頭）：539、669、785、民生幹線
                </Typography>
              </li>
            </ul>
          </div>
          <div className={style.detail}>
            <Image
              src={"/assets/index/transport/car.png"}
              alt={"car"}
              width={50}
              height={33}
            />
            <Typography variant={"body1"}>
              永樂市場與大稻埕公園皆提供停車場
            </Typography>
          </div>
        </div>
      </div>
      <div className={style.oldMan}>
        <Image
          src={"/assets/index/old_man.png"}
          alt={"car"}
          width={200}
          height={150}
        />
      </div>
    </>
  );
};

export default TransportInfo;
