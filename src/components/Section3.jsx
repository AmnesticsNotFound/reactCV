import { useState } from 'react'
import { useEffect } from "react";
import '/public/stylesheets/Sections.css';



//STORE DATA IN JOBARRAY AND PASS PROPS TO CHILDREN AND THEN USE ONCHANGE TO UPDATE IN JOBSARRAY WHICH THEN PASSES
// DATE TO CHILD AS PROPS
function Section3() {
    const [visible, setVisible] = useState(true);
    const [id, setID] = useState(0);
    const [jobArray, setJobs] = useState( [{
        key:0,
        company: " ",
        years: " ",
        desc: " ",
        accomp: " ",
    
    }])
    
    
    
    useEffect(() => {
        console.log(jobArray);
      });

    function submission() {
        let x = document.querySelector(".submitButton3");
        if(x.innerText == "Submit") {
            x.innerText = "Edit";
        }
        else {
            x.innerText = "Submit";
        }
        setVisible(!visible)
        
        
    }

    function updateJob(e) {
        //console.log(e.target.name);
        setJobs(jobArray.map((job, index) => {
            if (index == e.target.name) {
                job[e.target.placeholder] = e.target.value
                return {...job,
                    
                }
              
              
            } else {
                return {...job}
              
            }
          }))
          
    }

    function addJob() {
        setJobs([
            ...jobArray,
            {
                key:jobArray.length,
                company: " ",
                years: " ",
                desc: " ",
                accomp: " ",   
            }
        ])
    }

    
    return (
        <>  
            
            <h3 style={{fontWeight: "bold"}}>Work Experience</h3>
            <form style={{ display: visible, flexDirection: "column"}} >
            {visible ? jobArray.map((job, i) => {
                    return (
                        <div key={jobArray[i].key}>
                            <h3>Job {i+1}</h3>
                            <Job  index={i} updateJob={updateJob} company={job.company} years={job.years} desc={job.desc} accomp={job.accomp}></Job> 

                        </div>
                    )

                }) : 
                <div style={{display: "flex",flexDirection: "column", marginBottom:"20px"}}>
                {jobArray.map((job, i) => {
                           return (
                           <div key={jobArray[i].key}>
                                <p><b>Company:</b> {job.company}</p>
                                <p><b>Years of Experience:</b> {job.years}</p>
                                <p><b>Description:</b> {job.desc}</p>
                                <p><b>Notable Accomplishments:</b> {job.accomp}</p>
                            </div>
                           )
                    })
                }
                  
                </div>
                }
                
                {/* Array.from is a method that takes its first parameter and turns it into an array. 
                How it does this, depends on the parameter type. In this case we passed an object with the key, "length"
                which tells the method to create an array equal in length to the "length" value. The second
                parameter for .from is basically the map method.*/}
                {/*Array.from({length:jobArray.length}, (j, i) => {
                    return (
                    <>
                    <h3>Job {i + 1}</h3>
                    <Job key={jobArray[i].key} updateJob={updateJob} company={jobArray[i].company} years={jobArray[i].years} desc={jobArray[i].desc} accomp={jobArray[i].accomp}></Job>
                    </>
                    )
                    
                    }
                )
                */}
                

                
            </form>
            <button onClick={addJob}>Add Job</button>
            <button className="submitButton3" onClick={submission}>Submit</button>
            
        
        </>
    )
}

function Job(props) {
    //const [section, setSection] = useState(["", "", "", ""])

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
        
        //setSection(sect)
        
    }

    
    return (

            <div  style={{display: "flex",flexDirection: "column", marginBottom:"20px"}}>
            
            <label className="inputField">Company Name:
                <input type="text" value={props.company} placeholder="company" name={props.index} onChange={props.updateJob} />
            </label>

            <label className="inputField">Years Employed:
                <input type="text" index={props.index} value={props.years} placeholder="years" name={props.index} onChange={props.updateJob}/>
            </label>

            <label className="inputField">Job Description:
                <input type="text" index={props.index} value={props.desc} placeholder="desc" name={props.index} onChange={props.updateJob}/>
            </label>

            <label className="inputField">Notable Accomplishments:
                <input type="text" index={props.index}value={props.accomp} placeholder="accomp" name={props.index} onChange={props.updateJob}/>
            </label>
            
            </div>
             
    )
}

export default Section3