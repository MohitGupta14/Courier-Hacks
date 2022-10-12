import React, {useState} from 'react'
import './Textform.css'
import jsPDF from 'jspdf'

function Textform(props) {

    const initialText = `
    Sub: Cover Letter

    Dear Sir/Madam,
    
    I am writing this letter to you to apply for the position of {desired position} in your company {company name}. I came across the position via {mention job portal source} and wanted to apply for the same.
    
    I have a degree in {the degree relevant to the desired position}, and I have worked in the field before for over {number of months/years of experience} at {current or company name}. During my time as {current or last position}, I have learned valuable skills that appear relevant to the position desired by your company.
    In my current position as {current position}, I have achieved an exponential growth in the field by increasing overall {sales or marketing} statistics by at least {percentage}.

    I have learned that I enjoy working in this field and that I can prove to be a valuable asset with my present skill set. I enjoy working with like-minded people, and I am a team player. The challenges that the {desired position} offers is big, and I am sure that with an expert team I can take these challenges head-on.

    Thank you for your time and for considering me as a candidate. I have mentioned my contact number and email id in my resume and will send a follow-up email next week if further information is required.

    Yours sincerely,
    {Name}`

   

    const [text, setText] = useState(initialText);         //using array destructuring syntax to store the array of values returned by useState
        
    // const handleUpClick= ()=>{
    //   let newText = text.toUpperCase();
    //   setText(newText);

    // }
    // const handleLowerClick= ()=>{
    //     let newText = text.toLowerCase();
    //     setText(newText);
  
    //   }
                         
    // const handleOnChange= (event)=>{
    //     console.log("handleOnChange is working");
    //     setText(event.target.value);

    // }

    // Function to generate a pdf.
    const pdfGenerate=()=>{
        var doc=new jsPDF( 'p','in','a4');
        // doc.setFont('Ubuntu')
        // doc.text(20,30,text);
        let textlines = doc.setFont('Helvetica')
        .setFontSize(14)
        .splitTextToSize(text, 7.25);
        
        let verticalOffset = 0.5;
        doc.text(0.5, verticalOffset + 12/72, textlines)
        verticalOffset += (textlines.length +0.5)*12/72;
        doc.save('cover_letter.pdf')
        }

  
    return (
        <>
        <div className=" d-flex flex-column">
    <div className='conatiner mycontainer'>
        <div className='headingclass'>{props.heading}</div>
        <div class="mb-3">
        <textarea class="form-control my-3 mytext" placeHolder= "Enter your text here..." value={text}  id="myBox" rows="28"></textarea>
        </div>
         <button type="button" onClick= {pdfGenerate} class="btn btn-primary">Save as PDF</button>
        {/* <button type="button" onClick= {handleLowerClick} class="btn btn-primary mx-3">Convert to LowerCase</button>  */}
    </div>
    <div className="my-3 d-flex justify-content-start mymargin">
        <p>{text.split(" ").length} words🔹{text.length} characters</p>
        
    </div>
    </div>
    </>
    )
}

export default Textform