import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {CircularProgress, LinearProgress} from '@mui/material';

export default function Contact() {
    const [disable, setDisable] = React.useState(false);

    function sendEmail(e) {
        setDisable(true);
        e.preventDefault();
        emailjs.sendForm(
            "default_service",
            "template_z9zlm01",
            e.target,
            "user_FhEWKM5IXCkmUoOqe2yTB"
        ).then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
                setDisable(false)
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Message was not sent! Check console for error.",
                });
                setDisable(false);
            }
        );
    }

    return (
        <section id="contact" className="relative">
            {/*<div style={{textAlign: 'center', zIndex: 2}}>*/}
            {/*    <Link to='#about'>*/}
            {/*        <p >Top of Page</p> <ArrowCircleUpIcon sx={{fontSize: 50, color: '#6366f1', "&:hover": {color: '#a5b4fc'}}}/>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <form
                    onSubmit={sendEmail}
                    name="contact"
                    className="lg:w-1/2 flex flex-col mx-auto w-full md:py-3 mt-8 md:mt-0"
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Work With Me <ion-icon name="happy"></ion-icon>
                    </h2>
                    <p className="leading-relaxed mb-5 mt-2">
                        Send me a message with the form below
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    {disable !== true ? (
                        <button
                            disabled={disable}
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Send
                        </button>

                    ) : (
                        <button
                            disabled={disable}
                            type="submit"
                            className="text-white bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            <CircularProgress className='h-3' sx={{color:'white'}}/>
                        </button>

                    )}
                </form>
            </div>
            <footer className="text-white bg-gray-900 border-t-2 border-t-gray-300">
                <div className=" p-2 ">
                    <div className="flex ">
                        {/* <a href="#!" className="mr-9 text-gray-800 p-2 border-2 rounded border-indigo-600 ">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="google"
                                className="svg-inline--fa fa-google w-7 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                ></path>
                            </svg>
                        </a>*/}
                        {/* <a href="#!" className="mr-9 text-gray-800 p-2 border-2 rounded border-indigo-600 hover:bg-green-700">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                className="svg-inline--fa fa-instagram w-7 text-white "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                ></path>
                            </svg>
                        </a>*/}
                        <a
                            href="https://www.linkedin.com/in/andrew-a-10b88215b/"
                            rel="noreferrer"
                            target="_blank"
                            className="hover:transition-all hover:duration-300 mr-4 text-gray-800 p-1 border-2 rounded border-indigo-600 hover:bg-gray-500 ">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin-in"
                                className="svg-inline--fa fa-linkedin-in w-7 text-blue-400 hover:text-white hover:transition-all hover:duration-700"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.github.com/elchic00/"
                            rel="noreferrer"
                            target="_blank"
                            className="hover:transition-all hover:duration-300 text-gray-800 p-1 border-2 rounded border-indigo-600 hover:bg-gray-500 mr-4">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="github"
                                className="svg-inline--fa fa-github w-7 text-white hover:text-white"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                ></path>
                            </svg>
                        </a>
                        <div className="text-gray-300 sm:text-md my-auto ml-auto text-sm ">
                            © Copyright 2022: Andrew Alagna
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
