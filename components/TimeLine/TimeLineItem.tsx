import { ReactNode } from "react";
import Image from "next/image";
import MuiTimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import style from "./TimeLine.module.scss";

interface TimeLineItemProps {
  img: string;
  icon: ReactNode;
  title: string;
  detail: string;
  iconSx: object;
}
const TimeLineItem: React.FC<TimeLineItemProps> = ({
  img,
  icon,
  title,
  detail,
  iconSx,
}) => {
  return (
    <>
      <MuiTimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className={style.img}>
            <Image
              src={img}
              alt={title}
              width={400}
              height={300}
              style={{ border: "5px ridge " }}
            />
          </div>
        </TimelineOppositeContent>

        <TimelineSeparator className={style.timeLineConnector}>
          <TimelineConnector sx={{ bgcolor: "text.secondary" }} />
          <TimelineDot sx={iconSx}>{icon}</TimelineDot>
          <TimelineConnector sx={{ bgcolor: "text.secondary" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <div className={style.rwd}>
            <Image
              src={img}
              alt={title}
              width={400}
              height={300}
              style={{ border: "5px ridge " }}
            />
          </div>

          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography>{detail}</Typography>
        </TimelineContent>
      </MuiTimelineItem>

      <div className={style.mobile}>
        <span
          style={{
            ...iconSx,
            borderRadius: "20px",
            width: "60px",
            height: "50px",
            padding: "0.3rem",
            paddingTop: "0.8rem",
            color: "white",
          }}
        >
          {icon}
        </span>
        <div style={{ padding: "10px" }}>
          <div className={style.rwd}>
            <Image
              src={img}
              alt={title}
              width={300}
              height={200}
              style={{ border: "5px ridge " }}
            />
          </div>

          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography>{detail}</Typography>
        </div>
      </div>
    </>
  );
};

export default TimeLineItem;
