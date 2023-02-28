import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqSection = () => {

    const faqs = [
        {
            title: 'FAQ 1',
            desc: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow."
        },
        {
            title: 'FAQ 2',
            desc: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow."
        },
        {
            title: 'FAQ 3',
            desc: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow."
        },
    ]
    return (
        <div className="m-10 mx-5 md:mx-10 lg:mx-20">
            <h1 className="text-4xl text-white mb-4">FAQ's</h1>
            <div id="accordionExample" className="w-full">
                {
                    faqs.map((faq,index) => (
                        <>
                            <Accordion 
                                sx={{
                                    backgroundColor: "rgb(0 0 0 / 0.6)",
                                    color: "white",
                                    marginBottom:"10px",
                                    borderRadius: "5px",
                                    '& .MuiTypography-root':{
                                        fontSize:'20px',
                                        fontFamily:"Koulen",
                                    }}}
                                    TransitionProps={{ unmountOnExit: true }} 
                                    className='bg-black rounded-lg'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className='text-white' />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <h1 className="text-lg">{faq.title}</h1>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        {faq.desc}
                                    </p>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    ))
                }
                </div>
        </div>
    )
}

export default FaqSection