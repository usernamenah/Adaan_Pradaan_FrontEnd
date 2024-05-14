import "./page3.css"
import { Link } from "react-router-dom"

import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import "./page3.css";

export default function Page3() {
    let mdbstr = [];
    const college_email = getCookie("college_email");
    const college_college = getCookie("college_college");
    const college_booked = getCookie("college_booked");

    // let bookedarr = getCookie("college_booked").split("~");
    // if (bookedarr.length === 1 && bookedarr[0] === ".") {
    //     const bookedhistoryheader = document.getElementById("bookedhistoryheader");
    //     bookedhistoryheader.innerText = "No booking History..! bro hehe";
    // }else{
    //     let dataDiv = document.getElementById("managementbookeddata");

    // function appendDataWithDelay(index) {
    //     if (index < bookedarr.length) {
    //         let paragraph = document.createElement("p");
    //         paragraph.textContent = bookedarr[index];

    //         if (dataDiv) {
    //             dataDiv.appendChild(paragraph);
    //         } else {
    //             console.error("Error: dataDiv is null. Cannot append child.");
    //         }

    //         index++;
    //         setTimeout(function () {
    //             appendDataWithDelay(index);
    //         }, 2000);
    //     }
    //     }
        

    //     appendDataWithDelay(1);
    // }
    
    console.log(college_email);
    console.log(college_college);
    console.log(college_booked);
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }
    let edo = true;
    let edo1 = true;
    let edo2 = true;

    let str = "";
    let branchcustomstr = "";
    let subjectcustomstr = "";
    let custombranchval = " ";
    let customsubjectval = " ";
    
    const output = document.getElementById('output');
    const output1 = document.getElementById('output1');
    const custombranchinput = document.getElementById("custombranchinput");




    const outputRef = useRef(null);
    const customBranchInputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                appendText();
                const emoraaayyaa = document.getElementById("idhebi");
                emoraaayyaa.style.transform = "translateX(1000px)";
            }
        };
        customBranchInputRef.current.addEventListener('keydown', handleKeyDown);

        return () => {
            customBranchInputRef.current.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const appendText = () => {
        let text = customBranchInputRef.current.value;
        text = text.toUpperCase();
        if (outputRef.current) {
            outputRef.current.innerText = text;
            branchcustomstr = text;
        }
        customBranchInputRef.current.value = '';
    };



    async function custombranch(a) {
        const conditionPromise = new Promise((resolve, reject) => {
            if (custombranchval.length != 0) {
                resolve();
            } else {
            }
        });
        try {
            await conditionPromise;
            subjectvisible(a);
        } catch (error) {
        }
    }


    const output1Ref1 = useRef(null);
    const customSubInputRef = useRef(null);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                appendText1();
                const emoraaayyaa = document.getElementById("idhesi");
                emoraaayyaa.style.transform = "translateX(1000px)";
            }
        };
        customSubInputRef.current.addEventListener('keydown', handleKeyDown);

        return () => {
            customSubInputRef.current.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const appendText1 = () => {
        let text = customSubInputRef.current.value;
        text = text.toUpperCase();
        if (output1Ref1.current) {
            output1Ref1.current.innerText = text;
            subjectcustomstr = text;
        }
        customSubInputRef.current.value = '';
    };
    async function customsubject(a) {
        const conditionPromise = new Promise((resolve, reject) => {
            if (customsubjectval.length != 0) {
                resolve();
            } else {
            }
        });

        try {
            await conditionPromise;
            finalfunction(a);
            console.log(subjectcustomstr);
        } catch (error) {

        }
    }







    const dateInputRef = useRef(null);
    useEffect(() => {
        if (dateInputRef.current) {
            flatpickr(dateInputRef.current, {
                dateFormat: 'Y-m-d H:i',
                enableTime: true,
                altInput: true,
                altFormat: "F j, Y (h:i K)",
                minDate: "today",
                allowInput: true,
                minTime: "10AM",
                maxTime: "3PM",
                onChange: function (selectedDates, dateStr, instance) {
                    console.log("Selected Date:", dateStr);
                    mdbstr[3] = dateStr;
                    console.log(mdbstr);
                    const sum = document.getElementById("sm");
                    sum.style.display = "block";

                }

            });
        }

    }, []);


    function reloadPage() {
        window.location.reload();
    }
    function branchvisible(br) {
        const sum = document.getElementById("allreset");
        sum.style.display = "block";
        console.log("Branch clicked:", br);

        var num = 0;
        const branchvi = document.getElementById("branchv");
        branchvi.style.display = "block";
        const cv = "" + br;
        if (br === "branch01") {
            mdbstr.push("1");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch02") {
            mdbstr.push("2");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch03") {
            mdbstr.push("3");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch04") {
            mdbstr.push("4");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        const marchu = document.getElementById(cv);
        if (marchu && edo) {
            str = str + cv;
            marchu.style.backgroundColor = "rgb(126, 92, 20)";
            marchu.style.transform = "scale(1.1)";
            edo = false;
        }
    }
    function subjectvisible(br) {
        const sunjectvi = document.getElementById("subjectv");
        console.log("Branch clicked:", br);
        sunjectvi.style.display = "block";
        const cv = "" + br;
        if (br === "branch11") {
            mdbstr.push("cse");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch12") {
            mdbstr.push("csd");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch13") {
            mdbstr.push("it");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch14") {
            mdbstr.push(branchcustomstr);
            console.log("y" + br.substring(br.length - 1) + ",");

        }

        const marchu = document.getElementById(cv);
        if (cv === "branch14") {
            console.log(branchcustomstr);
        }
        if (marchu && edo1) {

            str = str + cv;
            console.log(str);
            marchu.style.backgroundColor = "rgb(126, 92, 20)";
            marchu.style.transform = "scale(1.1)";
            edo1 = false;
        }
    }
    function finalfunction(br) {
        const dc = document.getElementById("dc");
        dc.style.display = "block";
        const cv = "" + br;

        if (br === "branch21") {
            mdbstr.push("dse++");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch22") {
            mdbstr.push("ade");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch23") {
            mdbstr.push("iml");
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        if (br === "branch24") {
            mdbstr.push(subjectcustomstr);
            console.log("y" + br.substring(br.length - 1) + ",");

        }
        const marchu = document.getElementById(cv);
        if (marchu && edo2) {
            str = str + cv;
            console.log(str);
            marchu.style.backgroundColor = "rgb(126, 92, 20)";
            marchu.style.transform = "scale(1.1)";
            edo2 = false;
        }

    }
    function bringbranchinput() {
        const bringinp = document.getElementById("bbi");
        const idhebi = document.getElementById("idhebi");

        idhebi.style.transform = "translateX(-1000px)";
        bringinp.style.display = "none";

    }
    function bringsubjectinput() {
        const bringinp = document.getElementById("bsi");
        const idhebi = document.getElementById("idhesi");

        idhebi.style.transform = "translateX(-1000px)";
        bringinp.style.display = "none";

    }


    async function onbuttonclick() {
        
        for (let i = 0; i < 4; i++) {
            if (mdbstr[i].length === 0) {
                alert("fill all feilds..!!");
                return;
            }
        }
        var idfirst = mdbstr[0];
        var idsec = mdbstr[1];
        var idthird = mdbstr[2];
        var idfourth = mdbstr[3];

        var idfifth = getCookie("college_college");;

        var cls = {
            year: idfirst,
            branch: idsec,
            subject: idthird,
            date: idfourth,
            college: idfifth,
            deleted: "no"
        };
        console.log(cls);
        try {
            const response = await fetch('http://localhost:4000/api/add_lab', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cls)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("success:", data);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error("error:", error);
        }
        

        const popup = document.getElementById("popuplab");
        popup.style.transform = "scale(0)";
        alert("succesful");
        fetchthevreatedlabspopdata();
        window.location.href = "/Login2";
    }

    function popup() {

        const popup = document.getElementById("popuplab");
        const yearpop = document.getElementById("yearpop");
        const branchpop122 = document.getElementById("branchpop123");
        const subjectpop = document.getElementById("subjectpop");
        const dateandtimepop = document.getElementById("dateandtimepop");
        yearpop.innerText = mdbstr[0] + "/Y";
        branchpop122.innerText = mdbstr[1];
        subjectpop.innerText = mdbstr[2];
        dateandtimepop.innerText = mdbstr[3];
        popup.style.transform = "scale(1.1)";
    }

    function handleMouseOut() {
        const popup = document.getElementById("popuplab");
        popup.style.transform = "scale(0)";
    }
    var checkerdisplaythebooked = true;
    function opencreatedlabspopup() {
        const ll = document.getElementById("PopupForCreatedLabs");
        ll.style.transform = "scale(1)";   
        if(checkerdisplaythebooked){

            displaythebooked();
        }

    }
    async function fetchthevreatedlabspopdata(){
        
        try {
            const email = college_email;
            const college = college_college;
            const booked1 = mdbstr.toString();


            const cls = { email, college , booked1 };
            const response = await fetch('http://localhost:4000/api/updatethemanagementbooked', {
                
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cls)
            });

            const data = await response.json();
            console.log(data);
            alert(data);

            if (response.ok) {
                console.log("succesfully ");
            } else {
                alert("something fishy broo.....!!");
               
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }


    }
    function handleMouseOut1() {
        const ll = document.getElementById("PopupForCreatedLabs");
        ll.style.transform = "scale(0)";
    }

    function displaythebooked(){
        checkerdisplaythebooked = false;
        let bookedarr = getCookie("college_booked").split("~");
        if(bookedarr.length === 1  ){
    
        
        if (bookedarr[0] === ".") {
            const bookedhistoryheader = document.getElementById("bookedhistoryheader");
            bookedhistoryheader.innerText = "No booking History..! bro hehe";
        }}
        else{ 
            let dataDiv = document.getElementById("managementbookeddata");
    
        function appendDataWithDelay(index) {
            if (index < bookedarr.length) {
                let paragraph = document.createElement("p");
                paragraph.textContent = bookedarr[index];
    
                
                    dataDiv.appendChild(paragraph);
                
    
                index++;
                setTimeout(function () {
                    appendDataWithDelay(index);
                }, 1000);
            }
            }
            
    
            appendDataWithDelay(1);
        }
    }
    return (


        <>

            <div className="popuplab" id="popuplab" onMouseLeave={() => handleMouseOut()} >

                <div className="yearpop" id="yearpop">.</div>
                <div className="branchpop" id="branchpop123">.</div>
                <div className="subjectpop" id="subjectpop">.</div>
                <div className="dateandtimepop" id="dateandtimepop">.</div>
                <div className="confirtopmcreatinglab">
                    <b><div className="confirmnookingdd" onClick={() => onbuttonclick()}>
                        CONFIRM
                    </div>
                    </b>



                </div>
            </div>
            <div className="comebranch" id="a"></div>
            <div className="comebranch1" id="b"></div>
            <div className="submitdatatomongo" id="sm" onClick={() => popup()}><br></br><h1>SUBMIT</h1></div>

            <div className="fixed-top">
                <div className="allreset" id="allreset" onClick={() => reloadPage()}  >
                    <br></br>
                    <h1>RESET</h1> </div>
            </div>
            <div className="namebox" type="button"></div>
            <Link to={"/"}><img src="imagesre\logo3.jpg" alt="logo" height="110" width="110" className="logo" type="button" /></Link>
            <div className="PopupForCreatedLabs" id="PopupForCreatedLabs" onMouseLeave={() => handleMouseOut1()}>
                <div className="bookedhistoryheader" id="bookedhistoryheader">
                    the booked History 
                </div>
                <div className="managementbookeddata" id="managementbookeddata">
                      
                </div>
            </div>
            <div className="piribo">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6">
                            <Link to={"studprof"}><img className="img-usna" src="imagesre\user phtoo.jpg" alt="user photo" width="100" height="100" /></Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="option_show_all_created_labs" onClick={() => opencreatedlabspopup()}>
                            <h2>
                                CREATED LABS...!
                            </h2>

                        </div>

                    </div>

                </div>


            </div>

            <div className="paiki1">


                <div className="searchbox">
                    <input type="text" id="textbox" placeholder="Search.....!" name="search2" style={{ color: "#8F6600FF" }} className="seatet" />
                </div>
                <div className="searchbutton" type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="searchicon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>
            {/* <div style={{color:"black"}} className="branch01" type="button"><center><h3><br />YEAR-1</h3></center></div>
                <div style={{color:"black"}} className="branch02" type="button"><center><h3><br />YEAR-2</h3></center></div>
                <div style={{color:"black"}} className="branch03" type="button"><center><h3><br />YEAR-3</h3></center></div>
                <div style={{color:"black"}} className="branch04" type="button"><center><h3><br />YEAR-4</h3></center></div>  */}

            <div className="yearbox1">
                <h1 style={{ color: "#ffffff" }} className="yeartext" id="c">  Y E A R  </h1>
            </div>
            <a href="#a">



                <div style={{ color: "black" }} className="branch01" id="branch01" type="button" onClick={() => branchvisible("branch01")}><center><h3><br />YEAR-1</h3></center></div>
                <div style={{ color: "black" }} className="branch02" id="branch02" type="button" onClick={() => branchvisible("branch02")}><center><h3><br />YEAR-2</h3></center></div>
                <div style={{ color: "black" }} className="branch03" id="branch03" type="button" onClick={() => branchvisible("branch03")}><center><h3><br />YEAR-3</h3></center></div>
                <div style={{ color: "black" }} className="branch04" id="branch04" type="button" onClick={() => branchvisible("branch04")}><center><h3><br />YEAR-4</h3></center></div>
            </a>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="branchvi" id="branchv">

                <div className="yearbox2">
                    <h1 style={{ color: "#ffffff" }} className="yeartext"> B R A N C H </h1>
                </div>

                <input type="text" ref={customBranchInputRef} placeholder="ENTER BRANCH...." id="idhebi" className="cbi" />
                <a href="#b">

                    <div style={{ color: "black" }} className="branch11" id="branch11" type="button" onClick={() => subjectvisible("branch11")}><center><h3><br />CSE</h3></center></div>
                    <div style={{ color: "black" }} className="branch12" id="branch12" type="button" onClick={() => subjectvisible("branch12")}><center><h3><br />CSD</h3></center></div>
                    <div style={{ color: "black" }} className="branch13" id="branch13" type="button" onClick={() => subjectvisible("branch13")}><center><h3><br />IT</h3></center></div>
                    <div style={{ color: "black" }} className="branch14" id="branch14" type="button" onClick={() => custombranch("branch14")}><center><h3><br /><div ref={outputRef}>CUSTOM </div></h3></center></div>
                </a>
                <div className="forcustominputofbranch" id="bbi" onClick={() => bringbranchinput()}><center><h3><br />CUSTOM</h3></center></div>


            </div>
            <div className="subjectvi" id="subjectv">
                <div className="yearbox3">
                    <h1 style={{ color: "#ffffff" }} className="yeartext">  S U B J E C T </h1>
                </div>
                <input type="text" ref={customSubInputRef} placeholder="ENTER SUBJECT...." id="idhesi" className="csi" />

                <a href="#dc">
                    <div style={{ color: "black" }} className="branch21" type="button" id='branch21' onClick={() => finalfunction("branch21")}><center><h3><br />DSC++</h3></center></div>
                    <div style={{ color: "black" }} className="branch22" type="button" id='branch22' onClick={() => finalfunction("branch22")}><center><h3><br />ADE</h3></center></div>
                    <div style={{ color: "black" }} className="branch23" type="button" id='branch23' onClick={() => finalfunction("branch23")}><center><h3><br />IML</h3></center></div>
                    <div style={{ color: "black" }} className="branch24" type="button" id='branch24' onClick={() => customsubject("branch24")}><center><h3><br /><div ref={output1Ref1}>CUSTOM</div></h3></center></div>
                </a>
                <div className="forcustominputofsubject" id="bsi" onClick={() => bringsubjectinput()}><center><h3><br />CUSTOM</h3></center></div>



            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <div className="dc" id="dc">

                    <div className="yearbox4">
                        <h1 style={{ color: "#ffffff" }} className="yeartext"  >   DATE  ( TIME )  </h1>
                    </div>
                    <div className="cover1"></div>
                    <br></br>







                    <input ref={dateInputRef} type="text" className="date" placeholder="SELECT DATE & TIME ......."></input>
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>

    )

}
