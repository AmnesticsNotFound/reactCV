import { useState } from 'react';
import '/public/stylesheets/Sections.css';

function Section1() {
    const [section, setSection] = useState(["", "", "", ""])
    const [visible, setVisible] = useState(true);

    function updateSection(e) {
        const tmp = e.target
        let sect = section.map((x, index) => {
            if (index == tmp.name) {
                return tmp.value
                
            }
            else {
                return x
            }
        })

        setSection(sect)
    }

    function submission() {
        let x = document.querySelector(".submitButton1");
        if(x.innerText == "Submit") {
            x.innerText = "Edit";
        }
        else {
            x.innerText = "Submit";
        }
        setVisible(!visible)
    }
    return (
        <>  
            <h3 style={{fontWeight: "bold"}}>General Information</h3>
            <form style={{display: "flex",flexDirection: "column",}}>
            {visible ? 
                <>
                <label className="inputField">Full Name:
                    <input type="text" value={section[0] || ""} name="0" onChange={updateSection}/>
                </label>

                <label className="inputField">Email:
                    <input type="text" value={section[1] || ""} name="1" onChange={updateSection}/>
                </label>

                <label className="inputField">Phone Number:
                    <input type="text" value={section[2] || ""} name="2" onChange={updateSection}/>
                </label>

                <label className="inputField">Address:
                    <input type="text" value={section[3] || ""} name="3" onChange={updateSection}/>
                </label>
                </>
             : 
                
                <div>
                     <p><b>Full Name:</b> {section[0]}</p>
                     <p><b>Email:</b> {section[1]}</p>
                     <p><b>Phone Number:</b> {section[2]}</p>
                     <p><b>Address:</b> {section[3]}</p>
                 </div>
                
         
            }
                
            </form>
            
            <button onClick={submission} className="submitButton1">Submit</button>
            
        
        </>
    )
}

export default Section1