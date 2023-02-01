import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Masonry from "@components/Masonary/Masonry";
import ErrorDialogContext from "context/error-dialog-context";
import { Typography } from "@mui/material";

interface ImageDataType {
  id: string;
  avatarSrc: string;
  title: string;
  createAt: string;
  imgSrc: string;
  height: string;
}
const EventsImages = () => {
  const [imgData, setImageData] = useState([]);
  const errorDialog = useContext(ErrorDialogContext);

  const handleImages = async () => {
    const { data, status } = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: "old taipei" },
        headers: {
          Authorization:
            "Client-ID gZsPwcMjipURXI8WlM9otx27DR9Dx-qY_iDQK1QseWY",
        },
      }
    );

    const { results } = data;
    if (status === 200 && results.length > 0) {
      setImageData(results.filter((img: any, index: number) => index < 11));
      return;
    }
    if (status !== 200) {
      errorDialog.onOpen();
      return;
    }
  };
  useEffect(() => {
    handleImages();
  }, []);

  return (
    <div>
      {imgData.length > 0 && <Masonry content={imgData} />}
      {imgData.length === 0 && <Typography variant="h6"> 沒有內容</Typography>}
    </div>
  );
};

export default EventsImages;
