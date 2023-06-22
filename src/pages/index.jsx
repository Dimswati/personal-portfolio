import { BsPerson, BsHouseDoor, BsBriefcase, BsColumns, BsTelephone, BsDownload, BsFillBriefcaseFill, BsPhone, BsPlus, BsArrowUpRightCircle, BsFillChatLeftDotsFill, BsCompass } from "react-icons/bs"
import { FaSkype, FaEnvelope, FaWhatsapp, FaMap, FaFilePdf, FaReact, FaWordpress } from 'react-icons/fa'
import { MdOutlineReviews } from 'react-icons/md'

import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'

import { NavHashLink } from "react-router-hash-link"
import Typed from 'typed.js'
import { useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return `<span className='text-base font-bold p-2 bg-fuchsia-200 rounded-full'>${index + 1}</span>`
    //     },
    //   };

    const typedRef = useRef()

    useEffect(()=>{
        const typed = new Typed(typedRef.current, {
            strings: ['Developer', 'Designer'],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true
        })

        return () => typed.destroy()
    }, [])

  return (
    <>
        <aside className='w-[100px] lg:block lg:fixed lg:inset-y-0 bg-fuchsia-100 hidden'>
            <div className='w-full inline-flex py-2 px-2 justify-center content-center border-b border-fuchsia-300'>
                <a href="" className="w-[90%]">
                    <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/logo.svg" alt="paul logo" />
                </a>
            </div>
            <div className='flex flex-col justify-center items-center gap-8 antialiased mt-6 text-sm font-medium transition duration-300'>
                    <NavHashLink to='/#home' className='flex flex-col items-center gap-2'>
                        <BsHouseDoor size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                        <p>Home</p>
                    </NavHashLink>
                    <NavHashLink to='/#about' className='flex flex-col items-center gap-2'>
                        <BsPerson size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                        <p>About</p>
                    </NavHashLink>
                    <NavHashLink to='/#services' className='flex flex-col items-center gap-2'>
                        <BsBriefcase size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                        <p>Services</p>
                    </NavHashLink>
                    <NavHashLink to='/#portfolio' className='flex flex-col items-center gap-2'>
                        <BsColumns size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                        <p>Portfolio</p>
                    </NavHashLink>
                    <NavHashLink to='/#testimonials' className='flex flex-col items-center gap-2'>
                        <MdOutlineReviews size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                        <p>ratings</p>
                    </NavHashLink>
                    <NavHashLink to='/#contact' className='flex flex-col items-center gap-2'>
                        <BsTelephone size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full'/>
                        <p>Contact</p>
                    </NavHashLink>
            </div>
            {/* <button className='absolute w-full bottom-0 flex justify-center'>
                <BsCircleHalf size={16} className='pt-2  px-4 box-content bg-fuchsia-300 rounded-t-lg'/>
            </button> */}
        </aside>
        <main className="lg:pl-[100px]">
            <section id='home' className='bg-fuchsia-100/20'>
                <div className="container flex justify-center items-center gap-16">
                    <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/home-banner.jpg" className="aspect-square w-96 h-96 rounded-3xl" alt="" />
                    <div>
                        <h5 className="text-xl mb-4 text-neutral-800 font-medium">👋 Hi, I`m</h5>
                        <h1 className="text-6xl mb-4 font-bold text-neutral-800 antialiased">Paul <img className="inline w-16 h-16 object-cover rounded-full" src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/mask.jpg" alt="pauls profile" /> Mbatia</h1>
                        <h2 className="text-2xl text-neutral-800 font-medium mb-6">I`m a <span ref={typedRef}></span></h2>
                        <p className="text-base text-neutral-600 font-normal mb-8">We work with professionals and leaders who want to build careers that fulfil them intellectually, financially</p>
                        <button className="primary-btn">Download cv <BsDownload className="inline"/></button>
                    </div>
                </div>
            </section>
            <section id='about' className='bg-fuchsia-100'>
                <div className="container flex lg:flex-row flex-col justify-center gap-16">
                    <div className="lg:basis-5/12 basis-full px-3">
                        <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-6">about me</h3>
                        <div className="pb-14 pr-6 border-b border-neutral-300 mb-12">
                            <h4 className="uppercase text-base font-semibold text-neutral-900 mb-2">my name is paul mbatia</h4>
                            <h2 className="uppercase text-3xl font-semibold text-neutral-800 mb-7">I AM AVAILABLE FOR UI UX DESIGN PROJECTS</h2>
                            <p className="text-base text-neutral-700 mb-6">Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>
                            <div className="flex gap-6 items-center">
                                <div className="flex gap-3">
                                    <h1 className="text-5xl font-semibold text-neutral-900">5K</h1>
                                    <p>Projects <br/> Completed</p>
                                </div>
                                <div className="flex gap-3">
                                    <h1 className="text-5xl font-semibold text-neutral-900">3K</h1>
                                    <p>Satisfied <br/> Clients</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-6 ">experience</h3>
                        <div className="flex flex-col gap-5">
                            <div className="bg-white p-4 border-2 border-fuchsia-200 rounded-xl flex gap-4">
                                <div className="bg-fuchsia-900 text-fuchsia-100 p-2.5 rounded-full w-fit h-fit">
                                    <BsFillBriefcaseFill size={20} className="box-conten"/>
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-700">2019 - Present</span>
                                    <h2 className="text-lg font-semibold mb-2">Art Director - Facebook Inc</h2>
                                    <p className="text-neutral-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 border-2 border-fuchsia-200 rounded-xl flex gap-4">
                                <div className="bg-fuchsia-900 text-fuchsia-100 p-2.5 rounded-full w-fit h-fit">
                                    <BsFillBriefcaseFill size={20} className="box-conten"/>
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-700">2019 - Present</span>
                                    <h2 className="text-lg font-semibold mb-2">Art Director - Facebook Inc</h2>
                                    <p className="text-neutral-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 border-2 border-fuchsia-200 rounded-xl flex gap-4">
                                <div className="bg-fuchsia-900 text-fuchsia-100 p-2.5 rounded-full w-fit h-fit">
                                    <BsFillBriefcaseFill size={20} className="box-content"/>
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-700">2019 - Present</span>
                                    <h2 className="text-lg font-semibold mb-2">Art Director - Facebook Inc</h2>
                                    <p className="text-neutral-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:basis-7/12 basis-full sticky top-0">
                        <div className="flex gap-6 pt-6 mb-12">
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/about-banner.jpg" className="h-80 min-w-0 basis-7/12 rounded-2xl object-cover" alt=""/>
                            <div className="basis-5/12 flex flex-col gap-4 w-full ">
                                <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                        <FaSkype size={20}/>
                                    </div>
                                    <span className="font-medium text-neutral-700">Skype me</span>
                                </div>
                                <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                        <FaEnvelope size={20}/>
                                    </div>
                                    <span className="font-medium text-neutral-700">Mail me</span>
                                </div>
                                <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                        <FaWhatsapp size={20}/>
                                    </div>
                                    <span className="font-medium text-neutral-700">WhatsApp me</span>
                                </div>
                                <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                        <FaFilePdf size={20}/>
                                    </div>
                                    <span className="font-medium text-neutral-700">Resume</span>
                                </div>
                                <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                    <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                        <FaFilePdf size={20}/>
                                    </div>
                                    <span className="font-medium text-neutral-700">Resume</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-8 ">skills</h3>
                            <div>
                                <h4 className="relative mb-8 font-medium before:absolute before:w-14 before:h-[3px] before:-bottom-2 before:bg-fuchsia-300">Languages</h4>
                                <div className="flex flex-col gap-8 mb-12">
                                    <div>
                                        <h5 className="mb-2 font-medium">HTML5</h5>
                                        <div className="w-full h-[5px] bg-fuchsia-200" role="progressbar">
                                            <div className="h-full bg-fuchsia-900 relative" style={{ width: '95%' }}>
                                                <span className="absolute -top-7 right-0 text-sm">95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 font-medium">CSS3</h5>
                                        <div className="w-full h-[5px] bg-fuchsia-200" role="progressbar">
                                            <div className="h-full bg-fuchsia-900 relative" style={{ width: '90%' }}>
                                                <span className="absolute -top-7 right-0 text-sm">90%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 font-medium">SASS</h5>
                                        <div className="w-full h-[5px] bg-fuchsia-200" role="progressbar">
                                            <div className="h-full bg-fuchsia-900 relative" style={{ width: '75%' }}>
                                                <span className="absolute -top-7 right-0 text-sm">75%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 font-medium">Javascript</h5>
                                        <div className="w-full h-[5px] bg-fuchsia-200" role="progressbar">
                                            <div className="h-full bg-fuchsia-900 relative" style={{ width: '86%' }}>
                                                <span className="absolute -top-7 right-0 text-sm">86%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 font-medium">Typescript</h5>
                                        <div className="w-full h-[5px] bg-fuchsia-200" role="progressbar">
                                            <div className="h-full bg-fuchsia-900 relative" style={{ width: '70%' }}>
                                                <span className="absolute -top-7 right-0 text-sm">70%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="relative mb-8 font-medium before:absolute before:w-14 before:h-[3px] before:-bottom-2 before:bg-fuchsia-300">Frameworks I use</h4>
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                        <FaReact size={32} className=""/>
                                        <span>React</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                        <TbBrandNextjs size={32}/>
                                        <span>NextJs</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                        <FaWordpress size={32}/>
                                        <span>WordPress</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                        <SiTailwindcss size={32}/>
                                        <span>Tailwind</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </section>
            <section id='services' className="bg-fuchsia-100/20">
                <div className="container">
                    <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">my services</h1>
                    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
                        <div className="service-card group">
                            <div className="relative w-fit">
                                <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"/>
                                <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                            </div>
                            <h2 className="text-xl font-medium text-neutral-900 mb-2">Web Design</h2>
                            <p className="text-neutral-800  text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="service-card group">
                            <div className="relative w-fit">
                                <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"/>
                                <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                            </div>
                            <h2 className="text-xl font-medium text-neutral-900 mb-2">Web Design</h2>
                            <p className="text-neutral-800  text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="service-card group">
                            <div className="relative w-fit">
                                <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"/>
                                <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                            </div>
                            <h2 className="text-xl font-medium text-neutral-900 mb-2">Web Design</h2>
                            <p className="text-neutral-800  text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="service-card group">
                            <div className="relative w-fit">
                                <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"/>
                                <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                            </div>
                            <h2 className="text-xl font-medium text-neutral-900 mb-2">Web Design</h2>
                            <p className="text-neutral-800  text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="service-card group">
                            <div className="relative w-fit">
                                <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"/>
                                <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                            </div>
                            <h2 className="text-xl font-medium text-neutral-900 mb-2">Web Design</h2>
                            <p className="text-neutral-800  text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="service-card group">
                            <div className="relative w-fit">
                                <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9"/>
                                <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                            </div>
                            <h2 className="text-xl font-medium text-neutral-900 mb-2">Web Design</h2>
                            <p className="text-neutral-800  text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='portfolio' className="bg-fuchsia-100">
                <div className="container">
                    <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">my services</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 transition-all duration-300 gap-6">
                        <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                            <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                <BsPlus size={24}/>
                            </div>
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-1.jpg" alt="portfolioOne" className=" rounded-xl object-cover object-center"/>
                            <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                <div>
                                    <h5 className=" font-medium mb-1">Mobile App Design</h5>
                                    <p className="text-sm text-neutral-800">Mobile App, App Design</p>
                                </div>
                                <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                ">
                                    <BsArrowUpRightCircle/>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                            <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                <BsPlus size={24}/>
                            </div>
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-2.jpg" alt="portfolioOne" className=" rounded-xl object-cover object-center"/>
                            <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                <div>
                                    <h5 className=" font-medium mb-1">Mobile App Design</h5>
                                    <p className="text-sm text-neutral-800">Mobile App, App Design</p>
                                </div>
                                <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                ">
                                    <BsArrowUpRightCircle/>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                            <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                <BsPlus size={24}/>
                            </div>
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-3.jpg" alt="portfolioOne" className=" rounded-xl object-cover object-center"/>
                            <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                <div>
                                    <h5 className=" font-medium mb-1">Mobile App Design</h5>
                                    <p className="text-sm text-neutral-800">Mobile App, App Design</p>
                                </div>
                                <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                ">
                                    <BsArrowUpRightCircle/>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                            <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                <BsPlus size={24}/>
                            </div>
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-4.jpg" alt="portfolioOne" className=" rounded-xl object-cover object-center"/>
                            <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                <div>
                                    <h5 className=" font-medium mb-1">Mobile App Design</h5>
                                    <p className="text-sm text-neutral-800">Mobile App, App Design</p>
                                </div>
                                <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                ">
                                    <BsArrowUpRightCircle/>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                            <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                <BsPlus size={24}/>
                            </div>
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-5.jpg" alt="portfolioOne" className=" rounded-xl object-cover object-center"/>
                            <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                <div>
                                    <h5 className=" font-medium mb-1">Mobile App Design</h5>
                                    <p className="text-sm text-neutral-800">Mobile App, App Design</p>
                                </div>
                                <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                ">
                                    <BsArrowUpRightCircle/>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                            <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                <BsPlus size={24}/>
                            </div>
                            <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-6.jpg" alt="portfolioOne" className=" rounded-xl object-cover object-center"/>
                            <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                <div>
                                    <h5 className=" font-medium mb-1">Mobile App Design</h5>
                                    <p className="text-sm text-neutral-800">Mobile App, App Design</p>
                                </div>
                                <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full
                                ">
                                    <BsArrowUpRightCircle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='testimonials' className="bg-fuchsia-100/20">
                <div className="container">
                    <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">testimonials</h1>
                    <Swiper
                        modules={[A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={true}
                        loop={true}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        
                    >
                        <SwiperSlide>
                            <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg" className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6" />
                                <h4 className="text-2xl font-medium mb-2">Customers and interested parties engaged.</h4>
                                <p className="text-base text-neutral-800 antialiased mb-6">“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                                <div className="text-base">
                                    <h5 className="font-medium">Jane Kamau</h5>
                                    <p className=" text-neutral-600">CEO at scaleAi</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg" className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6" />
                                <h4 className="text-2xl font-medium mb-2">Customers and interested parties engaged.</h4>
                                <p className="text-base text-neutral-800 antialiased mb-6">“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                                <div className="text-base">
                                    <h5 className="font-medium">Jane Kamau</h5>
                                    <p className=" text-neutral-600">CEO at scaleAi</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg" className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6" />
                                <h4 className="text-2xl font-medium mb-2">Customers and interested parties engaged.</h4>
                                <p className="text-base text-neutral-800 antialiased mb-6">“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                                <div className="text-base">
                                    <h5 className="font-medium">Jane Kamau</h5>
                                    <p className=" text-neutral-600">CEO at scaleAi</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg" className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6" />
                                <h4 className="text-2xl font-medium mb-2">Customers and interested parties engaged.</h4>
                                <p className="text-base text-neutral-800 antialiased mb-6">“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                                <div className="text-base">
                                    <h5 className="font-medium">Jane Kamau</h5>
                                    <p className=" text-neutral-600">CEO at scaleAi</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section id="contact" className="bg-fuchsia-100">
                <div className="container">
                    <div className="flex gap-12">
                        <div className="basis-5/12">
                            <h2 className="text-2xl font-medium mb-7">Let`s Discuss Your Project</h2>
                            <div className="flex flex-col gap-10 mb-8">
                                <div className="flex gap-5">
                                    <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                                        <BsFillChatLeftDotsFill size={20}/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">Chat to us</h4>
                                        <p className="text-base text-neutral-800">Our friendly team is there to help.</p>
                                        <span className="text-base text-neutral-700 font-semibold cursor-pointer">info@domainname.com</span>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                                        <BsCompass size={20}/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">Chat to us</h4>
                                        <p className="text-base text-neutral-800">Come say hello at our office HQ.</p>
                                        <span className="text-base text-neutral-700 font-semibold cursor-pointer">Warnwe Park Streetperrine, 
                                        <br/>
                                        FL 33157 New York City
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                                        <BsPhone size={20}/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">Chat to us</h4>
                                        <p className="text-base text-neutral-800">Mon-Fri from 8am to 5pm.</p>
                                        <span className="text-base text-neutral-700 font-semibold cursor-pointer">+01 (555) 000-0000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-48 border-2 border-fuchsia-200 p-2 rounded-lg bg-white">
                                <iframe className='h-full w-full border-2' frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Eldoret,+Kenya&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                            </div>
                        </div>
                        <form className="basis-7/12 bg-white rounded-xl p-9 border-2 border-fuchsia-200">
                            <h3 className="text-3xl font-medium mb-3">Got Ideas? I've got the skills. Let's team up.</h3>
                            <p className="text-lg mb-6">Tell us more about yourself and what you're got in mind.</p>
                            <div className="w-full flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="flex flex-1 flex-col gap-2">
                                        <label htmlFor="firstName" className="text-sm">First name</label>
                                        <input type="text" id="firstName" className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600"/>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2">
                                        <label htmlFor="yourEmail" className="text-sm">Your Email</label>
                                        <input type="text" id="yourEmail" className="form-input"/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm">Subject</label>
                                    <input type="text" id="subject" className="form-input "/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm">Your Message</label>
                                    <textarea className="resize-none" name="message" rows={10} cols={10} id="message"></textarea>
                                </div>
                                <button className="primary-btn w-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

// lg:w-1/3 lg:basis-1/3 md:w-1/2 md:basis-1/2
// lg:flex-1 lg:w-1/3 md:w-[50%] md:flex[0_0_auto]