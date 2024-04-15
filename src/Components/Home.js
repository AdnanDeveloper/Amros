import React, { useRef, useEffect, useState } from 'react';
import Header from "./Header";
import Typed from 'typed.js';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Home() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xrvd2ao', 'template_fte6l3y', form.current, 'KGT3Nr1TtCnxkYLe-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    const notify = () => toast.success('Form Submitted Successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const typedTextRef = useRef(null);
    const imgRef = useRef(null);
    const [imgPosition, setImgPosition] = useState({ top: 0, left: 0 });
    const [isInView, setInView] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    {/*filter image portfolio*/ }
    let [filter, setFilter] = useState('all');

    const filterSelection = (c) => {
        setFilter(c);
    };



    useEffect(() => {
        const btnContainer = document.getElementById('myBtnContainer');
        const btns = btnContainer.getElementsByClassName('btns');

        const handleButtonClick = (event) => {
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            event.target.className += ' active';
            filterSelection(event.target.getAttribute('data-filter'));
        };

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', handleButtonClick);
        }

        // Cleanup event listeners on component unmount
        return () => {
            for (let i = 0; i < btns.length; i++) {
                btns[i].removeEventListener('click', handleButtonClick);
            }
        };
    }, []);

    const w3AddClass = (element, name) => {
        const arr1 = element.className.split(' ');
        const arr2 = name.split(' ');
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {
                element.className += ` ${arr2[i]}`;
            }
        }
    };

    const w3RemoveClass = (element, name) => {
        const arr1 = element.className.split(' ');
        const arr2 = name.split(' ');
        for (let i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(' ');
    };

    const showHideColumns = () => {
        const x = document.getElementsByClassName('column');
        if (filter === 'all') filter = '';
        for (let i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], 'show');
            if (x[i].className.indexOf(filter) > -1) w3AddClass(x[i], 'show');
        }
    };

    useEffect(() => {
        showHideColumns();
    }, [filter]);

    {/****** About us Tabs******/ }
    const [activetab, setActiveTab] = useState("Main Skills");

    const openTab = (tabName) => {
        // Hide all tabcontent elements
        const tabContents = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }

        // Remove "active" class from all tablinks
        const tabLinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }

        // Show the current tab and add "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        setActiveTab(tabName);
    };


    {/* Auto Type */ }
    useEffect(() => {
        const options = {
            strings: ['FrontEnd Developer', 'WordPress Developer', 'Freelancer'],
            typeSpeed: 30,
            backSpeed: 20,
            backDelay: 1000,
            loop: true,
            showCursor: true, // Set to true to show only one cursor
        };

        const typed = new Typed(typedTextRef.current, options);


        // jQuery code converted to React

        {/* mouser move image */ }
        const handleMouseMove = (e) => {
            const rectPosY = imgPosition.top;
            const rectPosX = imgPosition.left;

            const newTop = 20 - e.clientY / 50;
            const newLeft = 50 - e.clientX / 30;

            setImgPosition({ top: newTop, left: newLeft });
        };

        imgRef.current.addEventListener('mousemove', handleMouseMove);

        return () => {
            typed.destroy(); // Clean up Typed.js
            imgRef.current.removeEventListener('mousemove', handleMouseMove); // Clean up event listener
        };
    }, [imgPosition]);





    return (
        <div>
            <section class="main-sec" id="home">
                <div class="container-fluid banner-container">
                    <div class="row main-row">
                        <div class="col-lg-6 md-6 sm-12 left-sec" data-aos="zoom-in" data-aos-duration="1300"
                            data-aos-easing="ease-in-out-quart" data-aos-once="true">
                            <h3 class="intro"> Hey, It's Me</h3>
                            <h1 class="adnan"> Adnan Moriswala</h1>
                            <h3 class="intro"> And I'm a <span class="typed-text" ref={typedTextRef}></span></h3>
                            <p class="para-web"><strong>Freelance Web Developer in Mumbai</strong><br></br>Expertise is to create Static, Ecommerce,
                                CMS and SEO friendly website. </p>

                            <h4 class="social-head">Connect With Me</h4>
                            <div class="socials">
                                <a href="https://github.com/AdnanDeveloper" className='p-1' target='_blank'><i class="fa-brands fa-github facebook"></i></a>
                                <a href="https://www.instagram.com/adnaannn___/" className='p-1' target='_blank'><i class="fa-brands fa-instagram insta"></i></a>
                                <a href="https://www.linkedin.com/in/adnan-moriswala-25120b23a/" className='p-1' target='_blank'><i class="fa-brands fa-linkedin Whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6 md-6 sm-12 right-sec">
                            <img src="img/addy 1.png" alt="adnan moriswala" class="img-banner"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="row">
                    <div class="col-lg-6 md-6 sm-12"></div>
                    <div class="col-lg-6 md-6 sm-12">
                        <div class="big-cirle">
                            <span class="big-cirlce-light"></span>
                        </div>
                        <div class="mid-cirle">
                            <span class="mid-cirlce-light-dark"></span>
                        </div>
                        <div class="small-cirle">
                            <span class="small-cirlce-dark"></span>
                        </div>
                        <div class="ring-1 slide-top-animate"></div>
                        <div class="ring-2 slide-top-animate"></div>
                    </div>
                </div>
            </section>



            {/**********About Me***********/}
            <section class="about" id="about" >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 md-5 sm-12' data-aos="flip-left" data-aos-duration="1300"
                            data-aos-easing="ease-in-out-quart" data-aos-once="true">
                            <img src='img/me.jpg' className='about-img'></img>
                        </div>
                        <div className='col-lg-7 md-7 sm-12'>
                            <h2 className='adnan mt-4'>About Me</h2>
                            <p className='mt-2'>Adnan Moriswala, a dedicated freelance web developer in Mumbai, is the creative force behind the esteemed brand Amros. As a freelance web developer in Mumbai, I have expertise to create dynamic and visually appealing websites, ensuring that businesses establish a strong online presence.<br></br>
                                Operating under the brand name Amros, I build every project with enthusiasm and my focus on delivering projects on time speaks volumes about my professionalism and reliability.</p>
                            <div className="tab" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="70" data-aos-easing="ease-in-out-quart" data-aos-once="true">
                                <button
                                    className={`tablinks ${activetab === 'Main Skills' ? 'active' : ''}`}
                                    onClick={() => openTab('Main Skills')} >
                                    Main Skills
                                </button>
                                <button
                                    className={`tablinks ${activetab === 'Experience' ? 'active' : ''}`}
                                    onClick={() => openTab('Experience')}
                                >
                                    Experience
                                </button>
                                <button
                                    className={`tablinks ${activetab === 'Education' ? 'active' : ''}`}
                                    onClick={() => openTab('Education')}
                                >
                                    Education
                                </button>
                            </div>

                            <div id="Main Skills" className={`tabcontent ${activetab === 'Main Skills' ? 'active' : ''}`}>
                                <h5>Dynamic and responsive websites - <strong>WordPress</strong></h5>
                                <p>Static, Ecommerce, Multi Vendor,...</p>

                                <h5>Optimizing online content - <strong>SEO</strong> </h5>
                                <p>Specialized in SEO strategies and search engine rankings.</p>
                                <h5>Interactive and efficient user interfaces - <strong>React Js</strong></h5>
                                <p>Skilled React developer, creating responsive webapps and user interface.</p>
                                <h5>Bring your vision into design - <strong>UI/UX</strong> </h5>
                                <p>Shaping intuitive and engaging user interactions to enhance overall user experiences.</p>
                            </div>

                            <div id="Experience" className={`tabcontent ${activetab === 'Experience' ? 'active' : ''}`}>
                                <h4>WordPress Developer.</h4>
                                <h5>Apex52.</h5>
                                <strong><p>04/2022 - 01/2024</p></strong>
                                <ol>
                                    <li className='mb-2'>To build client-ready websites.</li>
                                    <li className='mb-2'>To build Website SEO-Freindly.</li>
                                    <li className='mb-2'>Social media Marketing (Facebook, Instagram, etc.)</li>
                                    <li className='mb-2'>Hands on experience in using Canva for designing banners, posts, cards, etc.</li>
                                </ol>

                                <h4>Web Developer.</h4>
                                <h5>Freelancer.</h5>
                                <strong><p>02/2023 - Present</p></strong>
                                <ol>
                                    <li className='mb-2'>Built websites for cLients.</li>
                                    <li className='mb-2'>Designed catalogue for business.</li>
                                    <li className='mb-2'>Designed instagram posts for online presence</li>
                                </ol>
                            </div>

                            <div id="Education" className={`tabcontent ${activetab === 'Education' ? 'active' : ''}`}>
                                <strong><p>Bsc. Information Technology</p></strong>
                                <p>Hinduja College</p>
                                <p>2020 - 2022</p>
                                <strong><p>Certified Fullstack Developer</p></strong>
                                <p>Ntech Global Institute</p>
                                <p>2023 - 2024</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Services ***********/}
            <section id="service" className='bg-serv'>
                <div class="container service-sec">
                    <h5 class="wid">What I Offer</h5>
                    <h2 class="my-serv">My Services</h2>
                </div>
            </section>
            <section className='bg-serv'>
                <div class="container services">
                    <div class="row">

                        <div class="col-lg-4 md-4 sm-12 service-default service1">
                            <a href="#" class="serv-link">
                                <div class="">
                                    <img src="img/coding (1).png" alt="static"></img>
                                    <h3 class="static">Static Website</h3>
                                    <p class="serv-para"> I am your trusted partner in building static websites that make a lasting impact.
                                        With a keen eye for design, unwavering attention to detail, and a commitment to performance, my static
                                        website package is tailored to elevate your online presence like never before.</p>
                                    <button type="button" class="btn btn1"> <a href='https://wa.link/7x4h2j' target='_blank' className='serv-link'>Get Quote</a></button>
                                </div>
                            </a>
                        </div>

                        <div class="col-lg-4 md-4 sm-12 service-default service2">
                            <a href="#" class="serv-link">
                                <img src="img/ux.png" alt="Ecommerce"></img>
                                <h3 class="static">E-Commerce Website</h3>
                                <p class="serv-para">I am your dedicated partner in creating eCommerce websites that seamlessly blend
                                    stunning design with powerful functionality. My eCommerce website package is designed to help you conquer
                                    the digital marketplace and elevate your online business.</p>
                                <button type="button" class="btn btn1"><a href='https://wa.link/7x4h2j' target='_blank' className='serv-link'> Get Quote</a></button>
                            </a>

                        </div>
                        <div class="col-lg-4 md-4 sm-12 service-default service3">
                            <a href="#" class="serv-link">
                                <img src="img/blog.png" alt="blog"></img>
                                <h3 class="static">Blogging Website</h3>
                                <p class="serv-para">My blogging website package is designed to transform your thoughts and ideas into a
                                    digital masterpiece that keeps your readers coming back for more.</p>
                                <button type="button" class="btn btn1"><a href='https://wa.link/7x4h2j' target='_blank' className='serv-link'> Get Quote</a></button>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 md-4 sm-12 service-default service4">
                            <a href="#" class="serv-link">
                                <img src="img/wordpress.png" alt="wordpress"></img>
                                <h3 class="static">WordPress Website</h3>
                                <p class="serv-para"> I specialize in creating WordPress websites that bring your vision to life, combining
                                    cutting-edge technology with a seamless user experience. My WordPress website package is designed to
                                    empower you with a dynamic online presence that stands out and engages your audience.</p>
                                <button type="button" class="btn btn1"><a href='https://wa.link/7x4h2j' target='_blank' className='serv-link'> Get Quote</a></button>
                            </a>
                        </div>
                        <div class="col-lg-4 md-4 sm-12 service-default service5">
                            <a href="#" class="serv-link">
                                <img src="img/logobanner.png" alt="Logo/banner"></img>
                                <h3 class="static">Logo/Banner Design</h3>
                                <p class="serv-para">I specialize in creating visual assets that not only define your brand but also set you
                                    apart from the competition. My logo and banner design package is tailored to infuse your online presence
                                    with personality and professionalism.</p>
                                <button type="button" class="btn btn1"><a href='https://wa.link/7x4h2j' target='_blank' className='serv-link'> Get Quote</a></button>
                            </a>
                        </div>
                        <div class="col-lg-4 md-4 sm-12 service-default service6">
                            <a href="#" class="serv-link">
                                <img src="img/redesgin.png" alt="redesign"></img>
                                <h3 class="static">Website Redesign</h3>
                                <p class="serv-para"> I specialize in transforming outdated websites into modern, visually stunning, and
                                    highly functional platforms. My website redesign package is tailored to help you reengage your audience
                                    and achieve digital excellence.</p>
                                <button type="button" class="btn btn1"><a href='https://wa.link/7x4h2j' target='_blank' className='serv-link'> Get Quote</a></button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Work */}
            <section id="work" className='m-5'>
                <div class="container work-sec">
                    <h5 class="wid">My Work</h5>
                    <h2 class="my-serv">Portfolio</h2>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 md-12 sm-12'>
                            <div id="myBtnContainer" className='myBtnContainer'>
                                <button className={`btns ${filter === 'all' ? 'active' : ''}`} onClick={() => filterSelection('all')}>
                                    All Projects
                                </button>
                                <button className={`btns ${filter === 'website' ? 'active' : ''}`} onClick={() => filterSelection('website')}>
                                    Web Design
                                </button>
                                <button className={`btns ${filter === 'card' ? 'active' : ''}`} onClick={() => filterSelection('card')}>
                                    Logo / Cards
                                </button>
                                <button className={`btns ${filter === 'banner' ? 'active' : ''}`} onClick={() => filterSelection('banner')}>
                                    Catalogue / Banners
                                </button>
                            </div>

                            <div className="row">
                                <div class="col-lg-4 md-4 sm-12 website column">
                                    <div class="content">
                                        <img src="img/website 2.jpg" alt="" className='work-img'></img>
                                        <a href='https://novarugs.in' target='_blank'>
                                            <h4 className='work-head'>Nova Rugs</h4>
                                            <p className='work-para'>Static Website</p></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 website column">
                                    <div class="content">
                                        <a href='https://smdryfruits.com' target='_blank'>
                                            <img src="img/website 1.jpg" alt="" className='work-img'></img>
                                            <h4 className='work-head'>S.M Dryfruits</h4>
                                            <p className='work-para'>Ecommerce</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 website column">
                                    <div class="content">
                                        <a href='https://21alloys.com' target='_blank'>
                                            <img src="img/website 3.jpg" alt="" className='work-img'></img>
                                            <h4 className='work-head'>21 Alloys</h4>
                                            <p className='work-para'> Business Website</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 website column">
                                    <div class="content">
                                        <a href='https://360serve.co.in' target='_blank'>
                                            <img src="img/website 4.jpg" alt="" className='work-img'></img>
                                            <h4 className='work-head'>360 Serve</h4>
                                            <p className='work-para'> Static Website</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 website column">
                                    <div class="content">
                                        <a href='https://gcshoppingmart.com' target='_blank' rel="noreferrer">
                                            <img src="img/website 5.jpg" alt="" className='work-img'></img>
                                            <h4 className='work-head'>GC Shopping Mart</h4>
                                            <p className='work-para'> Multi Vendor Website</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 website column">
                                    <div class="content">
                                        <a href='https://rajcater.com' target='_blank'>
                                            <img src="img/website 6.jpg" alt="" className='work-img'></img>
                                            <h4 className='work-head'>Raj Caters</h4>
                                            <p className='work-para'> Ecommerce Website</p>
                                        </a>
                                    </div>
                                </div>


                                <div class="col-lg-4 md-4 sm-12 card column">
                                    <div class="content">
                                        <img src="img/logo 1.jpg" alt="" className='work-img'></img>
                                        <h4 className='work-head'>Football Team Logo</h4>
                                        <p className='work-para'>Logo Design</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 card column">
                                    <div class="content">
                                        <img src="img/card 1.jpg" alt="" className='work-img'></img>
                                        <h4 className='work-head'>Abdulkadir with Zainab</h4>
                                        <p className='work-para'> Wedding Card Design</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 card column">
                                    <div class="content">
                                        <img src="img/logo 2.jpg" alt="" className='work-img'></img>
                                        <h4 className='work-head'>Fitness Coach Brand Logo</h4>
                                        <p className='work-para'>Logo Design</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 md-4 sm-12 banner column">
                                    <div class="content">
                                        <img src="img/catalog 1.jpg" alt="" className='work-img'></img>
                                        <h4 className='work-head'>Universe Glass Hub</h4>
                                        <p className='work-para'>Catalogue Design</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 banner column">
                                    <div class="content">
                                        <img src="img/banner 1.jpg" alt="" className='work-img'></img>
                                        <h4 className='work-head'>Website Banner</h4>
                                        <p className='work-para'>Banner Design</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 md-4 sm-12 banner column">
                                    <div class="content">
                                        <img src="img/banner 2.jpg" alt="" className='work-img'></img>
                                        <h4 className='work-head'>Website Banner</h4>
                                        <p className='work-para'>Banner Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section class="bg-grey">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 md-4 sm-12 sec-3-col">
                            <h2 class="sec-3-h2">Freelance Website Developer In Mumbai</h2>
                        </div>
                        <div class="col-lg-3 md-4 sm-12" >
                            <div class="img" style={{ top: `${imgPosition.top}px`, left: `${imgPosition.left}px` }}>
                                <img src="img/adnan_tie.png" ref={imgRef} alt="adnan-bg" class="paralax" data-speed="0.01" data-aos="slide-up" data-aos-duration="1500" data-aos-easing="ease-in-out-cubic"></img>
                            </div>
                        </div>
                        <div class="col-lg-3 md-4 sm-12 right-center">
                            <div class="sec-3-right">
                                <h6 class="sec-3-h6">
                                    Freelance Web Developer
                                </h6>
                                <p class="sec-3-para">I'm Creative Independent Freelance Web Developer in Mumbai, and I'm very passionate and dedicated to my
                                    work, Using year-over-year design approaches and the latest technologies.
                                </p>
                                <span class="col-lg-4 md-8 sm-6 count" ref={ref}>  {inView && !isInView && (
                                    <CountUp
                                        end={15}
                                        duration={5}

                                        separator=","
                                        decimals={0}
                                        easingFn={(t, b, c, d) => {
                                            return c * ((t = t / d - 1) * t * t + 1) + b;
                                        }}
                                        onEnd={() => setInView()}
                                    />
                                )}</span>
                                <span class="col-lg-8 md-4 sm-6 proj-para">
                                    Projects Completed
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* pricing */}

            // <section>
            //     <div class="container pricing-sec" id='pricing'>
            //         <div class="row justify-content-center">
            //             <div class="col-lg-4 md-4 sm-12 price-col price-col-1" data-aos="fade-in" data-aos-duration="1300" data-aos-easing="ease-in-out-quart" data-aos-once="true">
            //                 <div class="box-price-1">
            //                     <h2 class="price-head-1">Static Website</h2>
            //                     <span class="price-para-1"> starts</span>
            //                     <span class="prices">₹13k</span>
            //                     <p class="note">Note: Pricing depends on project requirements</p>
            //                     <div class="border-bottom"></div>
            //                     <table>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Upto 10 Pages (Or single Page Website)</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Content Placement</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">1 Contact Us Form</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">100% Mobile Friendly</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Click To Chat Integration</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Social Media Integration</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Technical Support (3 Months)</span>
            //                             </td>
            //                         </tr>
            //                     </table>

            //                     <button type="button" class="btn btn1"><a href='https://wa.link/35sxde' target='_blank' className='serv-link'> Get This Package</a></button>
            //                 </div>
            //             </div>

            //             <div class="col-lg-4 md-4 sm-12 mt-5" data-aos="zoom-in" data-aos-duration="1300" data-aos-easing="ease-in-out-quart" data-aos-once="true">
            //                 <h2 class="price-popular mt-1">Most Popular</h2>
            //                 <div class="box-price-2">
            //                     <h2 class="price-head-2">E-Commerce Website</h2>
            //                     <span class="price-para-1"> starts</span>
            //                     <span class="prices">₹30k</span>
            //                     <p class="note">Note: Pricing depends on project requirements</p>
            //                     <div class="border-bottom"></div>
            //                     <table>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Upto 10 Pages</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Payment Gateway Integration</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">20 Products Upload</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Multi Language Webpages</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">1 Contact Us Form</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Content Placement</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">100% Mobile Friendly</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Click To Chat Integration</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Social Media Integration</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Business Email Id</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Technical Support (6 Months)</span>
            //                             </td>
            //                         </tr>
            //                     </table>
            //                     <button type="button" class="btn btn1 btn2"><a href='https://wa.link/6vor5w' target='_blank' className='serv-link'> Get This Package</a></button>
            //                 </div>
            //             </div>


            //             <div class="col-lg-4 md-4 sm-12 price-col price-col-1 mt-5" data-aos="fade-in" data-aos-duration="1300" data-aos-easing="ease-in-out-quart" data-aos-once="true">
            //                 <div class="box-price-3">
            //                     <h2 class="price-head-1">Business Website</h2>
            //                     <span class="price-para-1"> starts</span>
            //                     <span class="prices">₹45k</span>
            //                     <p class="note">Note: Pricing depends on project requirements</p>
            //                     <div class="border-bottom"></div>
            //                     <table>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Upto 100+ Pages</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Multi Language Webpages</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para">Keywords Research</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para"> Image Optimization</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td><span class="col-8 proj-para"> Url's / Headings Optimization</span></td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">100% Mobile Friendly</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Click To Chat Integration</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Social Media Integration</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Business Email Id</span>
            //                             </td>
            //                         </tr>
            //                         <tr class="table-tr">
            //                             <td>
            //                                 <span class="col-4"><i class="fa-regular fa-circle-check"></i></span>
            //                             </td>
            //                             <td>
            //                                 <span class="col-8 proj-para">Technical Support (6 Months)</span>
            //                             </td>
            //                         </tr>
            //                     </table>
            //                     <button type="button" class="btn btn1"><a href='https://wa.link/3w9ykp' target='_blank' className='serv-link'> Get This Package</a></button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>

            {/* Discuss Develop Deliver */}
            <section>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-lg-4 md-4 sm-12 d-col m-2 d3-col-big" >
                            <div class="row">
                                <div class="discuss col-6" >
                                    <p> Step 1</p>
                                    <h2 className='ddd-head'> Discuss </h2>
                                </div>
                                <div class="discuss col-6 ">
                                    <h2 class="discuss-h2"> 1 </h2>
                                </div>
                            </div>
                            <div>
                                <p>At Amros, the journey begins with a thorough discussion to understand your unique vision and project requirements.We believe that a strong foundation is key to success, and through detailed consultations, we ensure a clear understanding of your business and help you reach more customers. This sets the stage for a partnership built and going on to groundwork for the development process.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 md-4 sm-12 d-col m-2 d3-col-big" >
                            <div class="row">
                                <div class="discuss col-6" >
                                    <p> Step 2</p>
                                    <h2 className='ddd-head'> Develop </h2>
                                </div>
                                <div class="discuss col-6 ">
                                    <h2 class="discuss-h2-2"> 2 </h2>
                                </div>
                            </div>
                            <div>
                                <p>Once the discussion phase is complete, we seamlessly transition to the development stage. Drawing upon the insights gathered during discussions, our skilled development team leverages cutting-edge technologies to bring your vision to life. With a focus on clean and efficient coding, we work diligently to create a robust and scalable solution tailored to your specific needs.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 md-4 sm-12 d-col m-2 d3-col-big" >
                            <div class="row" >
                                <div class="discuss col-6" >
                                    <p> Step 3</p>
                                    <h2 className='ddd-head'> Deliver </h2>
                                </div>
                                <div class="discuss col-6 ">
                                    <h2 class="discuss-h2-3"> 3 </h2>
                                </div>
                            </div>
                            <div>
                                <p>At Amros, our commitment to timely project delivery is our priority. The Deliver phase marks the standards of our collaborative efforts, where we present you with a fully realized website. We understand the importance of meeting deadlines in the challenging industry. Our goal is not just to meet but to exceed your expectations, delivering a website that stands out in design and functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ's */}
            <section>
                <div class="container mt-5">
                    <div class="faq-head text-center">
                        <h2>WEB DESIGN AND DEVELOPMENT FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 md-6 sm-12">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            What type of websites can you help me with?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            We can help you with all kinds of websites like static or dynamic, ecommerce, custom websites based on your requirement and landing pages.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Will the website be SEO friendly?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            Yes, our websites are SEO friendly which means it includes tools through which you can perform SEO on the website.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            How much do you charge for web development?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            Website development charges are completely based on your requirement. You can refer to the pricing table above with the features included. Please get in touch with us to know more about the website development charges.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 md-6 sm-12">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseSix">
                                            Do you only offer website development services?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            No, we provide a full range of services apart from website development that includes search engine optimization (SEO), social media marketing and brand design.

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseFour">
                                            Do you provide support after the website development is complete?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            Yes, we provide FREE support for 3 months for the static package once the website is live. We also provide 6 months FREE support for our higher packages. The support includes monitoring and rectifying website downtime, loading speed, software update, any issues or bugs identified in the existing website. You can opt for our Annual Maintenance packages once the free support period is over.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseFive">
                                            Will the website be responsive mobile friendly?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            Yes, all our websites are responsive web design. They are mobile friendly and adapts to screen sizes of the latest mobile devices.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://wa.me/919082816570" class="whatsapp-btn" target='_blank'>
                    <i class="bi bi-whatsapp"></i></a>
            </section>
            {/* <section>
                <div className='contianer'>
                    <div className='row'>
                        <div className='col-lg-6 md-6 sm-12'></div>
                        <div className='col-lg-6 md-6 sm-12'>
                            <form ref={form} onSubmit={sendEmail} id='form'>
                                <label>Name</label>
                                <input type="text" name="user_name" required />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Phone No.</label>
                                <input type="tel" name="user_number" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" id='submitt' onClick={notify} />
                                <ToastContainer
                                    position="bottom-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover={false}
                                    theme="light"
                                />
                            </form>


                        </div>
                    </div>
                </div>
            </section> */}

            <section className='bg-grey' id='contact'>
                <div class="container">
                    <div class="row contact-row">

                        <div class="contact-info">
                            <h2>Contact Us</h2>
                            <p><strong>We’d love to hear about your project</strong><br></br><br></br>

                                Our clients confide in us about what they need to accomplish, and we give them the real scoop on what’s possible. Somewhere in the mix, the right idea meets the right time, and a little bit of magic happens.

                            </p>
                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <i class="fas fa-phone"></i>
                                </div>

                                <div class="contact-info-content">
                                    <a href='tel:9082816570'>
                                    <h4>Phone</h4>
                                    <p>+91 9082816570</p>
                                    </a>
                                </div>
                            </div>

                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>

                                <div class="contact-info-content">
                                <a href='mailto:amrosweb53@gmail.com'>
                                    <h4>Email</h4>
                                    <p>amrosweb53@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form">
                            <form ref={form} onSubmit={sendEmail} id='form'>

                                <div class="input-box">
                                    <label>Name</label>
                                    <input type="text" name="user_name" />
                                    <label>Email</label>
                                    <input type="email" name="user_email" />
                                    <label>Phone No.</label>
                                    <input type="tel" name="user_number" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input type="submit" value="Send" id='submitt' onClick={notify} />
                                    <ToastContainer
                                        position="bottom-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover={false}
                                        theme="light"
                                    />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}


export default Home
