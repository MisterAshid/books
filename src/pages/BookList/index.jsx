import * as React from "react";
import { Grid } from "@mui/material";
import Book from "../../component/Book";
export default function BookList({ books }) {
  return (
    <Grid container>
      {books.map((book, id) => (
        <Book book={book} id={id} key={id} />
      ))}
    </Grid>
  );
}
