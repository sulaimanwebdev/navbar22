import React,{ useState} from 'react'
import Image from 'next/image'

import { gsap } from 'gsap'
// import { Link } from 'react-router-dom'
// import { Container,Col,Row,Nav,Tab, } from 'react-bootstrap'
// import FsLightbox from 'fslightbox-react';
// import Select from 'react-select'

// img
// import logo from '../public/images/mockup/streamit/'
// import icon from '../../../assets/video/trailer.mp4'

// favorite img
import fav1 from '../public/images/mockup/streamit/favorite/01.jpg'
import fav2 from '../public/images/mockup/streamit/favorite/02.jpg'
import fav3 from '../public/images/mockup/streamit/favorite/03.jpg'
import fav4 from '../public/images/mockup/streamit/favorite/04.png'
import fav5 from '../public/images/mockup/streamit/favorite/05.jpg'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade,Navigation,Thumbs,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link'
SwiperCore.use([EffectFade,Navigation,Thumbs,Pagination]);

const gsapAnimate = {
   getData: (elem) => {
      const option = {
         opacity: 0,
         scale: 1,
         position: {
               x: 0,
               y:0,
         },
         ease: "",
         duration: 1,
         delay: .4,
         rotate: 0
      }
      if(elem !== undefined) {
         option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0)

         option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0)

         option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0)

         option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1)

         option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0)

         option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, .4)

         option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5)

        //  option.ease = gsapAnimate.validValue(elem.dataset.iqEase, '')

         const setOption = {opacity: option.opacity, scale: option.scale, x: option.position.x, y: option.position.y, ease: option.ease, rotate: option.rotate, duration: option.duration, delay: option.delay}

         return setOption
      } else {
         return {opacity: 0}
      }
   },
   onStart : (elem) => {
      
      const setOption = gsapAnimate.getData(elem)

      gsap.from(elem, setOption)

   },

   onEnd : (elem) => {
      
      const setOption = gsapAnimate.getData(elem)
      
      gsap.to(elem, setOption)

   },

   onStartEnd : (elem) => {

      const setOption = gsapAnimate.getData(elem)
      const setEndOption = gsapAnimate.getData(elem)

      setEndOption.opacity = 1
      setEndOption.position.x = 0
      setEndOption.position.y = 0
      setEndOption.rotate = 0
      setEndOption.scale = 1

      gsap.fromTo(elem, setOption, setEndOption)
   },
   validValue: (attr, defaultVal) => {
      if (attr !== undefined && attr !== null) {
         return Number(attr)
      }
      return Number(defaultVal)
   }
}

const Homepage =()=>{
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const [toggler1, setToggler1] = useState(false);
   const [toggler2, setToggler2] = useState(false);
   const [toggler3, setToggler3] = useState(false);

   const animationInit = () => {
      if(document.querySelector('.swiper-container .swiper-slide-active') !== null) {

         const gsapElem = document.querySelector('.swiper-container .swiper-slide-active').querySelectorAll('[data-iq-gsap="onStart"]') ?? {};

         Array.from(gsapElem, (elem) => {
            return gsapAnimate.onStartEnd(elem)
         })
      }
   }
   
  
   const options1 = [
      { value: 'season 1', label: 'Season 1' },
      { value: 'season 2', label: 'Season 2' },
      { value: 'season 3', label: 'Season 3' }
   ]

   const options2 = [
      { value: 'season 1', label: 'Season 1' },
      { value: 'season 2', label: 'Season 2' }
   ]

   return(
      <>
         <div className="main-content">
            <section id="iq-favorites">
                <div className="container mx-auto">
                    <div className="grid grid-rows-1">
                     <div className="overflow-hidden">
                        <div className="d-flex align-items-center justify-content-between">
                           <h4 className="main-title">Latest Movies</h4>
                           <Link href="/movie-category"><span>View All</span></Link>                   
                        </div>
                        <div id="favorites-contens">
                           <div id="prev" className="swiper-button swiper-button-prev"><i className= "fa fa-chevron-left"></i></div>
                           <div id="next" className="swiper-button swiper-button-next"><i className= "fa fa-chevron-right"></i></div>
                           <Swiper  
                              navigation={{
                                 prevEl: '#prev',
                                 nextEl: '#next'
                              }} 
                              breakpoints={{
                                 320: { slidesPerView: 1 },
                                 550: { slidesPerView: 2 },
                                 991: { slidesPerView: 3 },
                                 1400: { slidesPerView: 4 }
                              }}
                              loop={true}  
                              slidesPerView={4} 
                              spaceBetween={20}  
                              className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction">
                              <SwiperSlide>
                                 <div className=" block-images position-relative">
                                    <div className="img-box">
                                       <Image src={fav1} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="block-description">
                                       <h6 className="iq-title"><Link href="/show-details">Sand Dust</Link></h6>
                                       <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                          <div className="badge badge-secondary p-1 mr-2">13+</div>
                                          <span className="text-white">2h 30m</span>
                                       </div>
                                       <div className="hover-buttons">
                                          <Link href="/show-details" role="button" className="btn btn-hover iq-button">
                                             <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="block-social-info">
                                       <ul className="list-inline p-0 m-0 music-play-lists">
                                          <li className="share">
                                             <span><i className="ri-share-fill"></i></span>
                                             <div className="share-box">
                                                <div className="d-flex align-items-center">
                                                   <Link href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                                                   <Link href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                                                   <Link href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <span><i className="ri-heart-fill"></i></span>
                                             <span className="count-box">19+</span>
                                          </li>
                                          <li><span><i className="ri-add-line"></i></span></li>
                                       </ul>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="block-images position-relative">
                                    <div className="img-box">
                                       <Image src={fav2} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="block-description">
                                       <h6 className="iq-title"><Link href="/show-details">Last Race</Link></h6>
                                       <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                          <div className="badge badge-secondary p-1 mr-2">7+</div>
                                          <span className="text-white">2 Seasons</span>
                                       </div>
                                       <div className="hover-buttons">
                                          <Link href="/show-details" role="button" className="btn btn-hover iq-button"><i className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="block-social-info">
                                       <ul className="list-inline p-0 m-0 music-play-lists">
                                          <li className="share">
                                             <span><i className="ri-share-fill"></i></span>
                                             <div className="share-box">
                                                <div className="d-flex align-items-center">
                                                   <Link href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                                                   <Link href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                                                   <Link href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <span><i className="ri-heart-fill"></i></span>
                                             <span className="count-box">19+</span>
                                          </li>
                                          <li>
                                             <span><i className="ri-add-line"></i></span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="block-images position-relative">
                                    <div className="img-box">
                                       <Image src={fav3} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="block-description">
                                       <h6 className="iq-title"><Link href="/show-details">Boop Bitty</Link></h6>
                                       <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                          <div className="badge badge-secondary p-1 mr-2">15+</div>
                                          <span className="text-white">2h 30m</span>
                                       </div>
                                       <div className="hover-buttons">
                                          <Link href="/show-details" role="button" className="btn btn-hover iq-button">
                                             <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="block-social-info">
                                       <ul className="list-inline p-0 m-0 music-play-lists">
                                          <li className="share">
                                             <span><i className="ri-share-fill"></i></span>
                                             <div className="share-box">
                                                <div className="d-flex align-items-center">
                                                   <Link href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                                                   <Link href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                                                   <Link href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
                                                </div>
                                             </div>
                                          </li>
                                          <li>  
                                             <span><i className="ri-heart-fill"></i></span>
                                             <span className="count-box">19+</span>
                                          </li>
                                          <li>
                                             <span><i className="ri-add-line"></i></span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="block-images position-relative">
                                    <div className="img-box">
                                       <Image src={fav4} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="block-description">
                                       <h6 className="iq-title"><Link href="/show-details">Dino Land</Link></h6>
                                       <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                          <div className="badge badge-secondary p-1 mr-2">18+</div>
                                          <span className="text-white">3 Seasons</span>
                                       </div>
                                       <div className="hover-buttons">
                                          <Link href="/show-details" role="button" className="btn btn-hover iq-button">
                                             <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="block-social-info">
                                       <ul className="list-inline p-0 m-0 music-play-lists">
                                          <li className="share">
                                             <span><i className="ri-share-fill"></i></span>
                                             <div className="share-box">
                                                <div className="d-flex align-items-center">
                                                   <Link href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                                                   <Link href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                                                   <Link href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <span><i className="ri-heart-fill"></i></span>
                                             <span className="count-box">19+</span>
                                          </li>
                                          <li>
                                             <span><i className="ri-add-line"></i></span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className="block-images position-relative">
                                    <div className="img-box">
                                       <Image src={fav5} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="block-description">
                                       <h6 className="iq-title"><Link href="/show-details">Jaction action</Link></h6>
                                       <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                          <div className="badge badge-secondary p-1 mr-2">10+</div>
                                          <span className="text-white">1 Season</span>
                                       </div>
                                       <div className="hover-buttons">
                                          <Link href="/show-details" role="button" className="btn btn-hover iq-button">
                                             <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                             Play Now
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="block-social-info">
                                       <ul className="list-inline p-0 m-0 music-play-lists">
                                          <li className="share">
                                             <span><i className="ri-share-fill"></i></span>
                                             <div className="share-box">
                                                <div className="d-flex align-items-center">
                                                   <Link href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-facebook-fill"></i></Link>
                                                   <Link href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" className="share-ico" tabIndex="0"><i className="ri-twitter-fill"></i></Link>
                                                   <Link href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" className="share-ico iq-copy-link" tabIndex="0"><i className="ri-links-fill"></i></Link>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <span><i className="ri-heart-fill"></i></span>
                                             <span className="count-box">19+</span>
                                          </li>
                                          <li>
                                             <span><i className="ri-add-line"></i></span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           </Swiper>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         
         </div>
      </>
   )
}


export default Homepage