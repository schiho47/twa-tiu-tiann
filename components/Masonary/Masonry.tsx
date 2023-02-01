import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import style from "./Masonry.module.scss";
import Paper from "@mui/material/Paper";
import MuiMasonry from "@mui/lab/Masonry";
import ImageCard from "../ImageCard/ImageCard";
import { format } from "date-fns";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface MasonryProps {
  content: {
    id: string;
    links: { self: string };
    alt_description: string;
    created_at: string;
    imgSrc: string;
    user: {
      profile_image: { small: string; medium: string };
      first_name: string;
    };
    urls: {
      regular: string;
    };
  }[];
}

const Masonry: React.FC<MasonryProps> = ({ content }) => {
  return (
    <Box component="div">
      <div className={style.desktop}>
        <MuiMasonry columns={3} spacing={2}>
          {content.map((item, index) => (
            <ImageCard
              key={item.id}
              avatarSrc={item.user.profile_image.medium}
              title={item.alt_description}
              createAt={format(new Date(item.created_at), "yyyy-MM-dd ")}
              imgSrc={item.urls.regular}
              author={item.user.first_name}
            />
          ))}
        </MuiMasonry>
      </div>
      <div className={style.mobile}>
        <MuiMasonry columns={2} spacing={1}>
          {content.map((item, index) => (
            <ImageCard
              key={item.id}
              avatarSrc={item.user.profile_image.medium}
              title={item.alt_description}
              createAt={format(new Date(item.created_at), "yyyy-MM-dd ")}
              imgSrc={item.urls.regular}
              author={item.user.first_name}
            />
          ))}
        </MuiMasonry>
      </div>
    </Box>
  );
};

export default Masonry;
