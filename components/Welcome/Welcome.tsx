import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Typography from "@components/Typography/Typography";
import style from "./Welcome.module.scss";

interface WelcomeProps {}

const data = [
  {
    title1: "探索19世紀臺灣",
    title2: "最繁華熱鬧的地方",
    imageSrc1: "/assets/index/japanese1940.jpeg",
    imageSrc2: "/assets/history/tea_work.jpeg",
    alt1: "日治時期街景",
    alt2: "製茶工作",
    order: 1,
  },
  {
    title1: "尋找名人藝術家",
    title2: "作品中的大稻埕",
    imageSrc1: "/assets/index/pier_picture.jpeg",
    imageSrc2: "/assets/tour/pier.jpg",
    alt1: "蔡雪溪作品－《扒龍船》",
    alt2: "大稻埕碼頭夕陽",
    order: 2,
  },
  {
    title1: "體會當代大稻埕",
    title2: "的活力與魅力",
    imageSrc1: "/assets/event/firework.jpeg",
    imageSrc2: "/assets/event/temple_event.jpg",
    alt1: "大稻埕煙火節",
    alt2: "霞海城隍文化節",
    order: 3,
  },
];
const Welcome: React.FC<WelcomeProps> = () => {
  const [currentNum, setCurrentNum] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<any>(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (currentNum === 3) {
        setCurrentNum(1);
      } else {
        setCurrentNum((prev) => prev + 1);
      }
    }, 10000);
    return () => {
      resetTimeout;
    };
  }, [currentNum]);
  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 576) {
          setIsMobile(true);
          return;
        }
        setIsMobile(false);
      });
    }
  }, [typeof window === "object" && window.innerWidth]);
  return (
    <div className={style.container}>
      {data
        .filter((item) => item.order === currentNum)
        .map((item) => {
          return (
            <div className={style.active} key={item.order}>
              <div>
                <Typography variant="h2">{item.title1}</Typography>
                <div className={style.title2}>
                  <Typography variant="h2">{item.title2}</Typography>
                </div>
              </div>
              <div>
                <Image
                  src={item.imageSrc1}
                  alt={item.alt1}
                  width={400}
                  height={300}
                  layout={isMobile ? "responsive" : ""}
                />
                <Image
                  src={item.imageSrc2}
                  alt={item.alt2}
                  width={300}
                  height={200}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Welcome;
