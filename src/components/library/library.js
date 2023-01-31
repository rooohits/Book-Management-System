import { useState } from "react";
import BookRow from "./BookRow";

export default function Library() {

    const [bookId, setBookId] = useState("");
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");

    const [books, setBooks] = useState([]);

    function handleBookId(event) {
        setBookId(event.target.value);
    }

    function handleBookName(event) {
        setName(event.target.value);
    }

    function handleAuthor(event) {
        setAuthor(event.target.value);
    }

    function add_book(event) {
        event.preventDefault();
        const book = {
            bookId,
            name,
            author,
        }
        setBooks([...books, book]); // add a new book at last of given array
        
        setBookId("");
        setName("");
        setAuthor("");
    }


    return (
        <div className="container">
            <h1>Library App</h1>
            <form onSubmit={add_book}>
                <label>BookId</label>
                <input type="text" value={bookId} onChange={handleBookId} placeholder="Enter Book Id" />
                <label>Name</label>
                <input type="text" value={name} onChange={handleBookName} placeholder="Enter Book name" />
                <label>Author</label>
                <input type="text" value={author} onChange={handleAuthor} placeholder="Enter Author Name" />
                <button className="addBtn">Add Book</button>
            </form>
            <BookRow books={books} setBooks={setBooks}/>
        </div>
    )
}