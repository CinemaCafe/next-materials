"use client";
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
import { AiFillEdit } from "react-icons/ai";

interface BookProps {
    bookItem : BooksItem,
    handleUpdate? : (id:string, bookItem: BooksItem) => void;   
}


const BooksEdit = ( { bookItem, handleUpdate } : BookProps) => {
    const [open, setOpen] = useState(false);
    const idRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);



    const handleClick = () => {
        if (idRef.current && labelRef.current && contentRef.current && handleUpdate) {
            handleUpdate(idRef.current.id, {id: idRef.current.value, label: labelRef.current.value, content: contentRef.current.value});
            setOpen(false);
        }
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="my-3">
                    <AiFillEdit />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                    <DialogDescription>
                        Edit Book Functionality
                    </DialogDescription>
                </DialogHeader>
                <div ref={divRef} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bookid" className="text-right">
                        Id
                    </Label>
                    <Input ref={idRef}
                        defaultValue={bookItem.id}
                        className="col-span-3"
                        disabled
                    />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="booklabel" className="text-right">
                        Label
                    </Label>
                    <Input ref={labelRef}
                        defaultValue={bookItem.label}
                        className="col-span-3"
                    />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bookcontent" className="text-right">
                        Content
                    </Label>
                    <Input ref={contentRef}
                        defaultValue={bookItem.content}
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

export default BooksEdit;