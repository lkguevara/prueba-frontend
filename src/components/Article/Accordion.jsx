import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoMdAdd } from "react-icons/io";

export default function AccordionUsage() {
  return (
    <div  className='m-12'>
    <h1 className='font-bold text-gray-600 my-8'>Artículos recientes</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoMdAdd color='blue' fontSize='large'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Lorem ipsum dolor sit, adipiscing elit.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoMdAdd color='blue' fontSize='large'/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Sed nibh amet euismod tincidunt ut laoreet dolore.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoMdAdd color='blue' fontSize='large'/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Magna aliquam erat volutpat diam nonummy.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoMdAdd color='blue' fontSize='large'/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Sed nibh amet euismod tincidunt ut laoreet dolore.
        </AccordionSummary>
        <AccordionDetails>
        Diam nonummy nibh euismod tincidunt ut laoreet.
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
