import Accordion from "@/components/accordion/Accordion";

const AccordionPage = () => {
    const BooksItem = [
        {
            id: "sdfsdf",
            label: "Spider Man",
            content: "Your friendly neighborhood"
        },
        {
            id: "ikkiek",
            label: "Iron Man",
            content: "I'm Iron Man"           
        },
        {
            id: "kkdikei",
            label: "Lord of Ring",
            content: "You shall not pass!!!!"           
        }
    ]


    return (
        <>
            <Accordion Items={BooksItem}/>
        </>
        
    )
}

export default AccordionPage;