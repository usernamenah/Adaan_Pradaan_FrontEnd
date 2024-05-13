import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Studentpage1.css"

export default function Studentpage1() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const student_email = getCookie("student_email");
        const student_college = getCookie("student_college");
        const student_section = getCookie("student_section");
        const student_year = getCookie("student_year");
        const student_booked = getCookie("student_booked");
        console.log(student_email);
        console.log(student_college);
        console.log(student_section);
        console.log(student_year);
        console.log(student_booked);
        // alert("Username: " + storedUsername + "\nDate of Birth: " + storedDOB);
        try {
            const response =  await fetch('http://localhost:4000/api/showlabstostudent', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
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

    function selectedlab(a, b, c, d, e){
        popupconfirmation(a,b,c,d,e);
        const popcollege = document.getElementById("popcollege");
        const popsubject = document.getElementById("popsubject");
        const popdateandtime = document.getElementById("popdateandtime");
        const popyear = document.getElementById("popyear");
        const popbranch= document.getElementById("popbranch");

        popcollege.innerText = a;
        popsubject.innerText = b+ " / "+ a +"(y)";
        popdateandtime.innerText = c ;
        popyear.innerText = d;
        popbranch.innerText = e ;
        
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);

    }
    function popupconfirmation(){
        console.log("anna namasthe");
        const popup = document.getElementById("popup");
        popup.style.transform = "scale(1.2)";
    }
    function handleMouseOut(){
        
        console.log('Mouse out event occurred');
        const popup = document.getElementById("popup");
        popup.style.transform = "scale(0)";
    }
    async function confirmbook(){
    //     try {
           

    //         const response = await fetch('http://localhost:4000/api/updatethestudentbooked');
            
    //         // const data = await response.json();
    //         // setData(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }

     }

    

    return (
        <>
            <div className="namebox" type="button"></div>
            <div className='popup' id='popup' onMouseLeave={()=>handleMouseOut()}>
                <div className=''>

                <p className='popcollege'>move out of this box to close..!</p>
                <b>
                <div className='popcollege' id='popcollege'>.</div>
                <div className='popsubject' id='popsubject'>.</div>
                <div className='popyear' id='popyear'>.</div>
                <div className='popbranch' id='popbranch'>.</div>
                <div className='popdateandtime' id='popdateandtime'>.</div></b>
                <div className='confirmbook' onClick={()=>confirmbook()}>
                <br></br>
                    <h2 className='cbbl'>CONFIRM BOOKING</h2>

                </div>

                </div>

            </div>
            <Link to={"/"}><img src="imagesre\logo3.jpg" alt="logo" height="110" width="110" className="logo" type="button" /></Link>
            <div className="fixed-top">
                <div className="piribo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-6">
                                    <Link to={"studprof"}><img className="img-usna" src="imagesre\user phtoo.jpg" alt="user photo" width="100" height="100" /></Link>
                                </div>
                            </div>
                            <div className="op1">
                                <center><h1 style={{ color: "black" }}>BOOKED</h1></center>
                            </div>
                            <div className="op2">
                                <center><h1 style={{ color: "black" }}></h1>no</center>
                            </div>
                        </div>
                        <div className="op1"></div>
                        <div className="op2"></div>
                        <div className="op3"></div>
                        <div className="op4"></div>
                    </div>
                </div>
            </div>

            <div className="paiki1">
                <div className="searchbox">
                    <input type="text" placeholder="Search.....!" name="search2" style={{ color: "#8F6600FF" }} className="seatet" />
                </div>
                <div className="searchbutton" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="searchicon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>


            <div className="yearbox1avail">
                <h1 style={{ color: "#ffffff" }} className="yeartextavail"> A v a i l a b l e </h1>
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




            {/* Displaying fetched data in the databox class */}
            <div className='databox'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {data.length === 0 ? (
                    <h3>N O   &nbsp;&nbsp; L A B S  &nbsp;&nbsp; A V A L A B L E </h3>
                ) : (
                    <div>
                        {data.map((item, index) => (
                            <div key={index} className="sp">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-6'>

                                            <div className='collegetext'> {item.college}</div>
                                        </div>
                                        <div className='col-1'></div>
                                        <div className='col-5'>
                                            <div className='datetext'> {item.date}</div>

                                        </div>

                                    </div>

                                </div>

                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-10'>
                                <div className='subjecttext'>  < b className='iiii'> &nbsp;&nbsp;{item.subject}&nbsp;&nbsp;</b></div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='side'>&nbsp;&nbsp;&nbsp;year:&nbsp;<b>{item.year}</b></div>
                                            <div className='side'>branch:&nbsp; <b>{item.branch}</b></div>
                                        </div>

                                    </div>
                                </div>





                                <div className='booknow' onClick={() => selectedlab(item.year, item.branch, item.subject, item.date, item.college)} > BOOK </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

                            </div>
                            

                        ))}

                    </div>
                )}
            </div>

        </>
    );
}
