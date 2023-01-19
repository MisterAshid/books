import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import BookList from "./pages/BookList";
import { books } from "./data";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList books={books} />} />
        <Route path="/books/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
