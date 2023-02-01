import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@components/Avatar/Avatar";

interface ImageCardProps {
  avatarSrc: string;
  title: string;
  createAt: string;
  imgSrc: string;
  author: string;
}
const ImageCard: React.FC<ImageCardProps> = ({
  avatarSrc,
  title,
  createAt,
  imgSrc,
  author,
}) => {
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        title={author}
        subheader={createAt}
      />
      <CardMedia component="img" image={imgSrc} alt={title} />
    </Card>
  );
};

export default ImageCard;
