import { useState } from 'react'
import '/public/stylesheets/Sections.css';

function Section2() {
    const [section, setSection] = useState(["", "", ""])
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
        let x = document.querySelector(".submitButton2");
        if(x.innerText == "Submit") {
            x.innerText = "Edit";
        }
        else {
            x.innerText = "Submit";
        }
        setVisible(!visible)
    }
    return (
        <>  <h3 style={{fontWeight: "bold"}}>Education</h3>
        
            <form style={{display: "flex",flexDirection: "column",}}>
            {visible ? 
                <>
                <label className="inputField">Institution:
                    <input type="text" value={section[0] || ""} name="0" onChange={updateSection}/>
                </label>

                <label className="inputField">Major:
                    <input type="text" value={section[1] || ""} name="1" onChange={updateSection}/>
                </label>

                <label className="inputField">Years Attended:
                    <input type="text" value={section[2] || ""} name="2" onChange={updateSection}/>
                </label>
                </>
                :   <div>
                    <p><b>Institution:</b> {section[0]}</p>
                    <p><b>Major:</b> {section[1]}</p>
                    <p><b>Years Attended:</b> {section[2]}</p>
                    </div>
            }         
            </form>
            <button onClick={submission} className="submitButton2">Submit</button>
            
        
        </>
    )
}


export default Section2