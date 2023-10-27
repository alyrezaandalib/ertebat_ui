'use client'

import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Pagination} from 'swiper/modules';
import Image from "next/image";

export default function Main7() {
    return (
        <>
            <h2 className={"card-title pt-16 pr-12"}>
                نظرات مشتریان ما
            </h2>
            <section className={"pl-12 pr-12 pt-8 pb-24 flex flex-row items-start justify-center w-full"}>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="chat chat-end flex flex-row-reverse">
                            <div className="chat-bubble">
                                <h6 style={{fontWeight:500,marginBottom:10}}>مهندس بهنام زارع :</h6>
                                <p>از وقتی با این برنامه آشنا شدم خیلی فرق کرده.</p>
                            </div>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image src="/images/stock/photo-1534528741775-53994a69daeb.jpg" width={40}
                                           height={40} alt={'آقایی'}/>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="chat chat-end flex flex-row-reverse">
                            <div className="chat-bubble">
                                <h6 style={{fontWeight:500,marginBottom:10}}>مهندس بهنام زارع :</h6>
                                <p>از وقتی با این برنامه آشنا شدم خیلی فرق کرده.</p>
                            </div>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image src="/images/stock/photo-1534528741775-53994a69daeb.jpg" width={40}
                                           height={40} alt={'آقایی'}/>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="chat chat-end flex flex-row-reverse">
                            <div className="chat-bubble">
                                <h6 style={{fontWeight:500,marginBottom:10}}>مهندس بهنام زارع :</h6>
                                <p>از وقتی با این برنامه آشنا شدم خیلی فرق کرده.</p>
                            </div>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image src="/images/stock/photo-1534528741775-53994a69daeb.jpg" width={40}
                                           height={40} alt={'آقایی'}/>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="chat chat-end flex flex-row-reverse">
                            <div className="chat-bubble">
                                <h6 style={{fontWeight:500,marginBottom:10}}>مهندس بهنام زارع :</h6>
                                <p>از وقتی با این برنامه آشنا شدم خیلی فرق کرده.</p>
                            </div>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image src="/images/stock/photo-1534528741775-53994a69daeb.jpg" width={40}
                                           height={40} alt={'آقایی'}/>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}