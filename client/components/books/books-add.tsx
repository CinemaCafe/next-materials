"use client";
import agent from "@/app/api/agnet";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef, useState } from "react"

interface Props {
    addBook : (bookItem:BooksItem) => void;
}


const BooksAdd = ({addBook} : Props) => {
    const [open, setOpen] = useState(false);
    const idRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (idRef.current && labelRef.current && contentRef.current) {
            agent.BookAPI.create({id: idRef.current?.value, label: labelRef.current?.value, content: contentRef.current?.value});
            addBook({id: idRef.current?.value, label: labelRef.current?.value, content: contentRef.current?.value});
        }
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="my-3">Add Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Book</DialogTitle>
                    <DialogDescription>
                        Add Book Functionality
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bookid" className="text-right">
                        Id
                    </Label>
                    <Input ref={idRef}
                        id="bookid"
                        className="col-span-3"
                    />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="booklabel" className="text-right">
                        Label
                    </Label>
                    <Input ref={labelRef}
                        id="booklabel"
                        className="col-span-3"
                    />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bookcontent" className="text-right">
                        Content
                    </Label>
                    <Input ref={contentRef}
                        id="bookcontent"
                        className="col-span-3"
                    />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleClick}>Save</Button>
                </DialogFooter>
            </DialogContent>
      </Dialog>
    )
}

export default BooksAdd;