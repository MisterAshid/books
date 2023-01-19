import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";
const Book = ({ book, id }) => {
  return (
    <div>
      <Card sx={{ width: 500, display: "inline-block", margin: 10 }}>
        <CardContent>
          <CardMedia
            component="img"
            height="300"
            image={book.thumbnailUrl}
            alt="img"
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {book.categories}
          </Typography>
          <Typography variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Pages: {book.pageCount}
          </Typography>
          <Typography variant="body2">
            {book.shortDescription}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={"/books/" + id}>Read More</NavLink>
        </CardActions>
      </Card>
    </div>
  );
};

export default Book;
