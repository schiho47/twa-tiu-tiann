import { red } from "@mui/material/colors";
import Image from "next/image";

interface TitleProps {
  title: string;
  icon: string;
}
const titleStyle = {
  width: "100%",
  margin: "2rem auto",
  display: "flex",
  justifyContent: "center",
};
const Title: React.FC<TitleProps> = ({ title, icon }) => {
  return (
    <div style={titleStyle}>
      <h1>{title}</h1>
      <Image
        src={icon}
        width={30}
        height={30}
        alt={title}
        style={{ margin: "5px 3px" }}
      />
    </div>
  );
};

export default Title;
