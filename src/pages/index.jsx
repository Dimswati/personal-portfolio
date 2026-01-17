import { BsPerson, BsHouseDoor, BsBriefcase, BsColumns, BsTelephone, BsDownload, BsFillBriefcaseFill, BsPlus, BsArrowUpRightCircle, BsFillChatLeftDotsFill, BsCompass } from "react-icons/bs"
import { BsLaptop, BsPhone, BsBarChart, BsBrush, BsCode, BsSearch } from "react-icons/bs";

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

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Desarrollador', 'Diseñador'],
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
                        <BsHouseDoor size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
                        <p>Inicio</p>
                    </NavHashLink>
                    <NavHashLink to='/#about' className='flex flex-col items-center gap-2'>
                        <BsPerson size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
                        <p>Sobre mí</p>
                    </NavHashLink>
                    <NavHashLink to='/#services' className='flex flex-col items-center gap-2'>
                        <BsBriefcase size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
                        <p>Servicios</p>
                    </NavHashLink>
                    <NavHashLink to='/#portfolio' className='flex flex-col items-center gap-2'>
                        <BsColumns size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
                        <p>Portafolio</p>
                    </NavHashLink>
                    <NavHashLink to='/#testimonials' className='flex flex-col items-center gap-2'>
                        <MdOutlineReviews size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
                        <p>Testimonios</p>
                    </NavHashLink>
                    <NavHashLink to='/#contact' className='flex flex-col items-center gap-2'>
                        <BsTelephone size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
                        <p>Contacto</p>
                    </NavHashLink>
                </div>

                {/* <button className='absolute w-full bottom-0 flex justify-center'>
                <BsCircleHalf size={16} className='pt-2  px-4 box-content bg-fuchsia-300 rounded-t-lg'/>
            </button> */}
            </aside>
            <main className="lg:pl-[100px]">
                <section id='home' className='bg-fuchsia-100/20'>
                    <div className="container flex justify-center items-center">
                        <div className="md:text-left text-center">
                            <h5 className="text-xl mb-4 text-neutral-800 font-medium">👋 Hola, soy</h5>
                            <h1 className="mb:text-6xl text-4xl mb-4 font-bold text-neutral-800 antialiased">Antonio García Cases</h1>
                            <h2 className="text-2xl text-neutral-800 font-medium mb-6">Soy <span ref={typedRef}></span></h2>
                            <p className="text-base text-neutral-600 font-normal mb-8">Trabajamos con un profesional o líder que quiera construir una carrera que lo llene intelectualmente y financieramente.</p>
                            <button className="primary-btn">Descargar CV <BsDownload className="inline" /></button>
                        </div>
                    </div>
                </section>
                <section id='about' className='bg-fuchsia-100'>
                    <div className="container flex lg:flex-row flex-col justify-center gap-16">
                        <div className="lg:basis-5/12 basis-full px-3">
                            <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-6">Sobre mí</h3>
                            <div className="pb-14 pr-6 border-b border-neutral-300 mb-12">
                                <h4 className="uppercase text-base font-semibold text-neutral-900 mb-2">Mi nombre es Antonio García Cases</h4>
                                <h2 className="uppercase text-3xl font-semibold text-neutral-800 mb-7">Estoy disponible para proyectos de diseño UI/UX</h2>
                                <p className="text-base text-neutral-700 mb-6">Nacido en el año 2000, actualmente vivo en Estados Unidos. Me especializo en el diseño de interfaces para sitios web y aplicaciones, así como en la implementación front-end. Mi enfoque se basa en explorar continuamente nuevas formas de expresión y en crear mejor código, guiado por lo que realmente nos inspira y motiva.</p>
                                <div className="flex gap-6 items-center">
                                    <div className="flex gap-3">
                                        <h1 className="sm:text-5xl text-4xl font-semibold text-neutral-900">50+</h1>
                                        <p>Proyectos <br /> realizados</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <h1 className="sm:text-5xl text-4xl font-semibold text-neutral-900">70+</h1>
                                        <p>Clientes <br /> satisfechos</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-6 ">Experiencia</h3>
                            <div className="flex flex-col gap-5">
                                {/* Experience 1 */}
                                <div className="bg-white p-4 border-2 border-fuchsia-200 rounded-xl flex gap-4">
                                    <div className="bg-fuchsia-900 text-fuchsia-100 p-2.5 rounded-full w-fit h-fit">
                                        <BsFillBriefcaseFill size={20} className="box-content" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-neutral-700">2019 – Presente</span>
                                        <h2 className="text-lg font-semibold mb-2">Diseñador Web / Front-End Developer – Facebook Inc</h2>
                                        <p className="text-neutral-700">
                                            Desarrollo de interfaces web responsivas y accesibles para aplicaciones internas y externas.
                                            Colaboración con equipos de UX/UI para mejorar la experiencia del usuario.
                                            Implementación de proyectos utilizando React, HTML5, CSS3 y JavaScript moderno.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience 2 */}
                                <div className="bg-white p-4 border-2 border-fuchsia-200 rounded-xl flex gap-4">
                                    <div className="bg-fuchsia-900 text-fuchsia-100 p-2.5 rounded-full w-fit h-fit">
                                        <BsFillBriefcaseFill size={20} className="box-content" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-neutral-700">2017 – 2019</span>
                                        <h2 className="text-lg font-semibold mb-2">Desarrollador Front-End – Agencia Digital XYZ</h2>
                                        <p className="text-neutral-700">
                                            Creación de sitios web corporativos y tiendas online con HTML, CSS y JavaScript.
                                            Integración de APIs y optimización de rendimiento.
                                            Colaboración con clientes y diseñadores para definir la identidad visual digital.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience 3 */}
                                <div className="bg-white p-4 border-2 border-fuchsia-200 rounded-xl flex gap-4">
                                    <div className="bg-fuchsia-900 text-fuchsia-100 p-2.5 rounded-full w-fit h-fit">
                                        <BsFillBriefcaseFill size={20} className="box-content" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-neutral-700">2015 – 2017</span>
                                        <h2 className="text-lg font-semibold mb-2">Diseñador Web Junior – Startup Creativa</h2>
                                        <p className="text-neutral-700">
                                            Apoyo en el desarrollo de interfaces web atractivas y funcionales.
                                            Implementación de diseños responsivos y prototipos en Figma y Adobe XD.
                                            Optimización de imágenes y elementos gráficos para mejorar los tiempos de carga.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="lg:basis-7/12 basis-full sticky top-0">
                            <div className="flex gap-6 pt-6 mb-12 sm:flex-row flex-col">
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/about-banner.jpg" className="sm:basis-7/12 basis-full h-80 min-w-0 rounded-2xl object-cover" alt="" />
                                <div className="sm:basis-5/12 basis-full flex flex-col gap-4 w-full">
                                    <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                        <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                            <FaSkype size={20} />
                                        </div>
                                        <span className="font-medium text-neutral-700">Skype me</span>
                                    </div>
                                    <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                        <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                            <FaEnvelope size={20} />
                                        </div>
                                        <span className="font-medium text-neutral-700">Mail me</span>
                                    </div>
                                    <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                        <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                            <FaWhatsapp size={20} />
                                        </div>
                                        <span className="font-medium text-neutral-700">WhatsApp me</span>
                                    </div>
                                    <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                        <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                            <FaFilePdf size={20} />
                                        </div>
                                        <span className="font-medium text-neutral-700">Resume</span>
                                    </div>
                                    <div className="flex items-center gap-5 bg-white py-3 pl-4 border-2 border-fuchsia-200 rounded-xl w-full hover:bg-fuchsia-200 transition-all duration-300 hover:cursor-pointer">
                                        <div className="bg-fuchsia-100 p-2.5 rounded-3xl ">
                                            <FaFilePdf size={20} />
                                        </div>
                                        <span className="font-medium text-neutral-700">Resume</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="uppercase relative text-xl font-semibold antialiased tracking-widest text-neutral-900 before:absolute before:w-[8px] before:h-[8px] before:bg-fuchsia-400 before:top-[10px] before:left-[0px] pl-6 mb-8 ">Habilidades</h3>
                                <div>
                                    <h4 className="relative mb-8 font-medium before:absolute before:w-14 before:h-[3px] before:-bottom-2 before:bg-fuchsia-300">Lenguajes de programación</h4>
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
                                            <FaReact size={32} className="" />
                                            <span>React</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                            <TbBrandNextjs size={32} />
                                            <span>NextJs</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                            <FaWordpress size={32} />
                                            <span>WordPress</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
                                            <SiTailwindcss size={32} />
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
                        <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">
                            Mis Servicios
                        </h1>
                        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">

                            {/* Servicio 1 */}
                            <div className="service-card group">
                                <div className="relative w-fit">
                                    <BsLaptop size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9" />
                                    <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                                </div>
                                <h2 className="text-xl font-medium text-neutral-900 mb-2">Diseño Web</h2>
                                <p className="text-neutral-800 text-base">Creación de sitios web modernos, responsivos y atractivos que representan tu marca profesionalmente.</p>
                            </div>

                            {/* Servicio 2 */}
                            <div className="service-card group">
                                <div className="relative w-fit">
                                    <BsPhone size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9" />
                                    <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                                </div>
                                <h2 className="text-xl font-medium text-neutral-900 mb-2">Aplicaciones Móviles</h2>
                                <p className="text-neutral-800 text-base">Desarrollo de apps móviles intuitivas para Android y iOS con experiencia de usuario optimizada.</p>
                            </div>

                            {/* Servicio 3 */}
                            <div className="service-card group">
                                <div className="relative w-fit">
                                    <BsBarChart size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9" />
                                    <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                                </div>
                                <h2 className="text-xl font-medium text-neutral-900 mb-2">Marketing Digital</h2>
                                <p className="text-neutral-800 text-base">Estrategias de publicidad online, SEO y redes sociales para aumentar tu visibilidad y ventas.</p>
                            </div>

                            {/* Servicio 4 */}
                            <div className="service-card group">
                                <div className="relative w-fit">
                                    <BsBrush size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9" />
                                    <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                                </div>
                                <h2 className="text-xl font-medium text-neutral-900 mb-2">Diseño Gráfico</h2>
                                <p className="text-neutral-800 text-base">Creación de logotipos, branding y material visual para que tu marca destaque.</p>
                            </div>

                            {/* Servicio 5 */}
                            <div className="service-card group">
                                <div className="relative w-fit">
                                    <BsCode size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9" />
                                    <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                                </div>
                                <h2 className="text-xl font-medium text-neutral-900 mb-2">Desarrollo de Software</h2>
                                <p className="text-neutral-800 text-base">Soluciones de software personalizadas para automatizar procesos y mejorar la productividad.</p>
                            </div>

                            {/* Servicio 6 */}
                            <div className="service-card group">
                                <div className="relative w-fit">
                                    <BsSearch size={32} className="box-content relative z-50 p-4 bg-fuchsia-300 rounded-xl text-neutral-800 mb-9" />
                                    <span className="absolute inset-0 bg-fuchsia-200 rounded-xl z-30 rotate-12 origin-bottom-right group-hover:rotate-0 transition-all ease-in duration-300"></span>
                                </div>
                                <h2 className="text-xl font-medium text-neutral-900 mb-2">Optimización SEO</h2>
                                <p className="text-neutral-800 text-base">Mejora del posicionamiento web para atraer tráfico orgánico y aumentar la visibilidad en buscadores.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='portfolio' className="bg-fuchsia-100">
                    <div className="container">
                        <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">
                            Mis Proyectos
                        </h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 transition-all duration-300 gap-6">

                            {/* Proyecto 1 */}
                            <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                    <BsPlus size={24} />
                                </div>
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-1.jpg" alt="App Finanzas" className=" rounded-xl object-cover object-center" />
                                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <div>
                                        <h5 className="font-medium mb-1">App Finanzas Personales</h5>
                                        <p className="text-sm text-neutral-800">Aplicación móvil para gestionar gastos y presupuestos de usuarios.</p>
                                    </div>
                                    <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full">
                                        <BsArrowUpRightCircle />
                                    </div>
                                </div>
                            </div>

                            {/* Proyecto 2 */}
                            <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                    <BsPlus size={24} />
                                </div>
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-2.jpg" alt="Sitio Restaurante" className=" rounded-xl object-cover object-center" />
                                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <div>
                                        <h5 className="font-medium mb-1">Sitio Web Restaurante</h5>
                                        <p className="text-sm text-neutral-800">Página web moderna con reservas online y menú interactivo.</p>
                                    </div>
                                    <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full">
                                        <BsArrowUpRightCircle />
                                    </div>
                                </div>
                            </div>

                            {/* Proyecto 3 */}
                            <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                    <BsPlus size={24} />
                                </div>
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-3.jpg" alt="Tienda Online Moda" className=" rounded-xl object-cover object-center" />
                                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <div>
                                        <h5 className="font-medium mb-1">Tienda Online de Moda</h5>
                                        <p className="text-sm text-neutral-800">E-commerce con catálogo de productos, carrito y pasarela de pago segura.</p>
                                    </div>
                                    <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full">
                                        <BsArrowUpRightCircle />
                                    </div>
                                </div>
                            </div>

                            {/* Proyecto 4 */}
                            <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                    <BsPlus size={24} />
                                </div>
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-4.jpg" alt="Blog Tecnología" className=" rounded-xl object-cover object-center" />
                                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <div>
                                        <h5 className="font-medium mb-1">Blog de Tecnología</h5>
                                        <p className="text-sm text-neutral-800">Plataforma de contenido con artículos, tutoriales y noticias tecnológicas.</p>
                                    </div>
                                    <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full">
                                        <BsArrowUpRightCircle />
                                    </div>
                                </div>
                            </div>

                            {/* Proyecto 5 */}
                            <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                    <BsPlus size={24} />
                                </div>
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-5.jpg" alt="Portfolio Fotografía" className=" rounded-xl object-cover object-center" />
                                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <div>
                                        <h5 className="font-medium mb-1">Portfolio de Fotografía</h5>
                                        <p className="text-sm text-neutral-800">Colección de trabajos fotográficos profesionales con galería interactiva.</p>
                                    </div>
                                    <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full">
                                        <BsArrowUpRightCircle />
                                    </div>
                                </div>
                            </div>

                            {/* Proyecto 6 */}
                            <div className="relative rounded-xl bg-white border-2 border-fuchsia-200 p-2.5 transition-all duration-300 group overflow-hidden">
                                <div className="p-2 bg-fuchsia-300 absolute top-5 right-5 rounded-full">
                                    <BsPlus size={24} />
                                </div>
                                <img src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/project-6.jpg" alt="App Educativa" className=" rounded-xl object-cover object-center" />
                                <div className="absolute bottom-0 right-0 left-0 mx-5 p-5 bg-fuchsia-100 rounded-xl flex justify-between transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <div>
                                        <h5 className="font-medium mb-1">Aplicación Educativa</h5>
                                        <p className="text-sm text-neutral-800">App para aprendizaje interactivo con lecciones, quizzes y seguimiento de progreso.</p>
                                    </div>
                                    <div className="p-1.5 bg-fuchsia-300 h-fit rounded-full">
                                        <BsArrowUpRightCircle />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='testimonials' className="bg-fuchsia-100/20">
                    <div className="container">
                        <h1 className="relative uppercase font-semibold text-4xl antialiased text-black before:absolute before:w-14 before:h-[3px] before:-bottom-3 before:bg-fuchsia-300 mb-14">Testimonios</h1>
                        <Swiper
                            modules={[A11y]}
                            // slidesPerView={1}
                            spaceBetween={10}
                            autoplay={true}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
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
                                    <h4 className="text-2xl font-medium mb-2">Excelente soporte y resultados</h4>
                                    <p className="text-base text-neutral-800 antialiased mb-6">
                                        “Trabajar con este equipo ha sido una experiencia increíble. Cumplieron los plazos y superaron nuestras expectativas en cada proyecto.”
                                    </p>
                                    <div className="text-base">
                                        <h5 className="font-medium">Carlos Méndez</h5>
                                        <p className="text-neutral-600">CTO, Innovatech Solutions</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                    <h4 className="text-2xl font-medium mb-2">Profesional y confiable</h4>
                                    <p className="text-base text-neutral-800 antialiased mb-6">
                                        “El nivel de profesionalismo y atención al detalle es excepcional. Recomiendo totalmente sus servicios.”
                                    </p>
                                    <div className="text-base">
                                        <h5 className="font-medium">María López</h5>
                                        <p className="text-neutral-600">Directora de Marketing, Creativa Global</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                    <h4 className="text-2xl font-medium mb-2">Resultados medibles</h4>
                                    <p className="text-base text-neutral-800 antialiased mb-6">
                                        “Desde que comenzamos a trabajar con ellos, hemos visto un aumento del 40% en nuestra productividad y alcance digital.”
                                    </p>
                                    <div className="text-base">
                                        <h5 className="font-medium">Andrés Ramírez</h5>
                                        <p className="text-neutral-600">CEO, TechVision</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                    <h4 className="text-2xl font-medium mb-2">Creatividad y dedicación</h4>
                                    <p className="text-base text-neutral-800 antialiased mb-6">
                                        “Su equipo combina creatividad y eficiencia, lo que hace que cada proyecto sea único y exitoso.”
                                    </p>
                                    <div className="text-base">
                                        <h5 className="font-medium">Lucía Fernández</h5>
                                        <p className="text-neutral-600">Fundadora, StartUp Labs</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                    <h4 className="text-2xl font-medium mb-2">Comunicación impecable</h4>
                                    <p className="text-base text-neutral-800 antialiased mb-6">
                                        “Siempre estuvieron disponibles y atentos a nuestras necesidades, haciendo que el proceso fuera transparente y fluido.”
                                    </p>
                                    <div className="text-base">
                                        <h5 className="font-medium">Diego Torres</h5>
                                        <p className="text-neutral-600">Gerente de Operaciones, Soluciones Tech</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                                    <h4 className="text-2xl font-medium mb-2">Superaron nuestras expectativas</h4>
                                    <p className="text-base text-neutral-800 antialiased mb-6">
                                        “El equipo no solo entregó a tiempo, sino que también aportó ideas innovadoras que mejoraron el proyecto significativamente.”
                                    </p>
                                    <div className="text-base">
                                        <h5 className="font-medium">Sofía Gutiérrez</h5>
                                        <p className="text-neutral-600">CEO, Creative Minds Agency</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>
                <section id="contact" className="bg-fuchsia-100">
                    <div className="container">
                        <div className="flex lg:flex-row flex-col gap-12">
                            <div className="lg:basis-5/12 basis-full">
                                <h2 className="text-2xl font-medium mb-7">Hablemos de Tu Proyecto</h2>
                                <div className="flex flex-col gap-10 mb-8">

                                    {/* Chat */}
                                    <div className="flex gap-5">
                                        <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                                            <BsFillChatLeftDotsFill size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">Chatea con nosotros</h4>
                                            <p className="text-base text-neutral-800">Nuestro equipo amable está aquí para ayudarte.</p>
                                            <span className="text-base text-neutral-700 font-semibold cursor-pointer">--coming soon--</span>
                                        </div>
                                    </div>

                                    {/* Oficina */}
                                    <div className="flex gap-5">
                                        <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                                            <BsCompass size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">Visítanos</h4>
                                            <p className="text-base text-neutral-800">Ven a saludarnos a nuestra oficina principal.</p>
                                            <span className="text-base text-neutral-700 font-semibold cursor-pointer">
                                                Concordia Street, 18, Benejuzar
                                                03390 Benejuzar
                                            </span>
                                        </div>
                                    </div>

                                    {/* Teléfono */}
                                    <div className="flex gap-5">
                                        <div className="p-5 bg-fuchsia-950 text-fuchsia-200 rounded-full w-fit h-fit">
                                            <BsPhone size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">Llámanos</h4>
                                            <p className="text-base text-neutral-800">Lun-Vie de 8:00 a 17:00.</p>
                                            <span className="text-base text-neutral-700 font-semibold cursor-pointer">+34613915905</span>
                                            <br/>
                                            <span className="text-base text-neutral-700 font-semibold cursor-pointer">+447782276409</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <form className="lg:basis-7/12 basis-full bg-white rounded-xl p-9 border-2 border-fuchsia-200">
                                <h3 className="text-3xl font-medium mb-3">¿Tienes ideas? Yo tengo las habilidades. Vamos a colaborar.</h3>
                                <p className="text-lg mb-6">Cuéntanos más sobre ti y lo que tienes en mente.</p>
                                <div className="w-full flex flex-col gap-4">

                                    {/* Nombre y Email */}
                                    <div className="flex gap-4 sm:flex-row flex-col">
                                        <div className="flex flex-1 flex-col gap-2">
                                            <label htmlFor="firstName" className="text-sm">Nombre</label>
                                            <input type="text" id="firstName" className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600" />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-2">
                                            <label htmlFor="yourEmail" className="text-sm">Correo Electrónico</label>
                                            <input type="text" id="yourEmail" className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600" />
                                        </div>
                                    </div>

                                    {/* Asunto */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="subject" className="text-sm">Asunto</label>
                                        <input type="text" id="subject" className="border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600 " />
                                    </div>

                                    {/* Mensaje */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-sm">Tu Mensaje</label>
                                        <textarea className="resize-none w-full h-32 border focus:border-fuchsia-600 border-fuchsia-200 rounded-lg caret-fuchsia-600" name="message" rows={10} cols={10} id="message"></textarea>
                                    </div>

                                    {/* Botón */}
                                    <button className="primary-btn w-full">Enviar Mensaje</button>
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