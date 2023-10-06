"use client"
import { useEffect, useState } from "react";
import agent from "../api/agnet";
import Accordion from "@/components/accordion/Accordion";
import BooksAdd from "@/components/books/books-add";

const BookPage = () => {
    const [books, setBooks] = useState<BooksItem []>([]); 

    useEffect(() => {
        agent.BookAPI.getlist().then(data => {
            setBooks(data);
        })
    }, []);

    const handleAddBook = (bookItem:BooksItem) => {
        setBooks((prev) => [...prev, bookItem]);
    }

    const handleUpdate = async (id:string, bookItem: BooksItem) => {
        const response = await agent.BookAPI.update(bookItem.id, bookItem);
        const updateBooks = books.map((book) => {
            if (book.id === bookItem.id) {
                return { ...book, ...response}
            }
            return book;
        });
        
        setBooks(updateBooks);
    }

    const handleDelete = (id: string) => {
        agent.BookAPI.delete(id);
        const delbook = books.filter(book => book.id != id);
        setBooks(delbook);
    }

    return (
        <>
            <BooksAdd addBook={handleAddBook} />
            <Accordion Items={books} handleUpdate={handleUpdate} handleDel={handleDelete}/>
        </>

    )
}
export default BookPage;