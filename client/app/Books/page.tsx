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
        setBooks((prev) => [...prev, bookItem])
    }


    return (
        <>
            <BooksAdd addBook={handleAddBook} />
            <Accordion Items={books} />
        </>

    )
}
export default BookPage;