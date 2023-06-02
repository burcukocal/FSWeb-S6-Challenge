
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Film } from './KarakterStyle';

const Karakterler = (props) => {
   const {data} = props;

   const [open, setOpen] = useState("");
   const toggle = (id) => {
       if (open === id) {
           setOpen();
       } else {
           setOpen(id);
       }
   };
   
    return (
        <div className="item">
            <Accordion flush open={open} toggle={toggle}>
        {data.map((item,index) => (          
            <AccordionItem key={index}>
                <AccordionHeader targetId={index.toString()}>{item.name}</AccordionHeader>
                <AccordionBody accordionId={index.toString()}>
                    <p>gender: {item.gender}</p>
                    <p>Height: {item.height}</p>
                    <p>Mass: {item.mass}</p>
                    <p>BirthYear: {item.birth_year}</p>  
                    <p>Eye Color: {item.eye_color}</p>
                    <p>Hair Color: {item.hair_color}</p>
                    <p>Skin Color: {item.skin_color}</p>
                    <Film>Appears in: {item.films.length} films</Film>
                </AccordionBody>               
            </AccordionItem>   
        ))}
         </Accordion>
        </div>
    )
}
export default Karakterler;