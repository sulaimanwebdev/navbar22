import Link from 'next/link';
import React, {useState} from 'react';
import LoginBtn from '../../LoginBtn';
import Logo from '../logo';

function Navbar() {

  const [showPanel, setshowPanel] = useState("-translate-x-full");
  const [opacityLink, setopacityLink] = useState("opacity-70");
  const [overflowToggle, setoverflowToggle] = useState("overflow-hidden");
  const [iconToggle, seticonToggle] = useState("far fa-bars text-2xl");
  const [showRightBar, setshowRightBar] = useState("-translate-x-full");

  let showPanelFunction = () =>{
    if(showPanel === "-translate-x-full"){
        setshowPanel('-translate-x-0');
        seticonToggle('far fa-times text-2xl');
        setoverflowToggle('overflow-hidden');
    } else {
        setshowPanel('-translate-x-full');
        seticonToggle('far fa-bars text-2xl');
        setoverflowToggle('overflow-hidden');
        setopacityLink('opacity-70');
    }
  }

  let functionOpacity = () =>{
    if(opacityLink === "opacity-70"){
      setopacityLink('opacity-100');
      setoverflowToggle('');
    } else {
      setopacityLink('opacity-70');
      setoverflowToggle('overflow-hidden')
    }

      if (window.innerWidth < 640) {
        setshowRightBar('-transform-x-0');
    }
  }

let closeSideBarMobilRight = () =>{
  setshowRightBar('-translate-x-full') 
  setopacityLink('opacity-70')
}


let closeAllSideBars = () =>{
  seticonToggle('far fa-bars text-2xl');
  setshowPanel('-translate-x-full');
  setoverflowToggle('overflow-hidden');
}
  return (
  <>
<div className="w-full h-16 bg-[#262626]  text-white flex items-center justify-between px-6">
  <div className="flex gap-2 items-center">
    <div className="opacity-90 cursor-pointer" onClick={showPanelFunction}>
        <i className={iconToggle}></i>
    </div>
    <div className="h-42 w-64 hidden sm:flex z-10 mt-8 py-5 cursor-pointer">
        <Logo/>
    </div>
  </div>

  <div className="flex items-center opacity-90 gap-5 sm:gap-10">
     <div className="font-bold text-2xl sm:mr-3 hidden md:block">Intesa San Paolo</div>
     <LoginBtn/>
     <select  className="bg-transparent border-none outline-none w-14 text-xl">
       <option className="text-black" value="ITA">ITA</option>
       <option className="text-black" value="EN">EN</option>
     </select>
  </div>
</div>

<div className={`absolute md:opacity-90 top-0 sm:top-16 z-50 left-0 w-screen h-screen    py-5 pt-20 sm:pt-5 sm:w-[255px] bg-[#262626] text-white pl-6 pr-6 transition transform ${showPanel} ${overflowToggle}`}>
    <i className="far fa-times sm:hidden text-2xl text-white absolute top-5 left-5 cursor-pointer" onClick={closeAllSideBars}></i>

    <div className="flex gap-5 flex-col">
        <Link href="/"><span className="opacity-70 hover:opacity-100 cursor-pointer">HOME PAGE</span></Link>
        <a href="#" className="opacity-70 hover:opacity-100">DIRETTE</a>
        <a href="#" onClick={functionOpacity} className={`flex items-center hover:opacity-100 gap-5 w-fit sm:w-auto justify-between opacity-70 ${opacityLink}`}>ON DEMAND <i className="fal fa-angle-right text-2xl"></i></a>
        <a href="#" className="opacity-70 hover:opacity-100">ABBONAMENTI</a>
        <a href="#" className="opacity-70 hover:opacity-100">SCUOLE</a>
        <a href="#" className="flex w-fit opacity-70 hover:opacity-100 gap-5 items-center justify-between">ITA <i className="fal fa-angle-down text-2xl"></i></a>
        <a href="#" className="text-[red] font-bold sm:mt-7 mb-3 text-sm sm:mx-auto w-fit px-10 py-3 border border-red-600 sm:px-0 sm:py-0 sm:border-none">LOGIN</a>

        <div className="h-16 mx-auto w-72 h-auto flex sm:hidden">
            <Link href="/"><Logo/></Link>
        </div>
        <a href="#" className="opacity-70 hover:opacity-100 text-center sm:text-left transform translate-y-3 sm:translate-y-0">Supporto</a>
        <a href="#" className="opacity-70 hover:opacity-100 text-center sm:text-left">Vai al sito ufficiale</a>
    </div>

    <div className={`absolute flex gap-5 flex-col right-0 sm:right-[-87%] top-0 bg-[#0f0f0f] px-0 sm:px-[48.5px] py-2 pt-5 h-full w-full sm:w-auto transition transform sm:-translate-x-0 ${showRightBar}`}>
        <div className="sm:hidden  cursor-pointer border-b border-[rgba(255, 255, 255, 0.623)] pb-2"  onClick={closeSideBarMobilRight}>
            <div className="flex items-center gap-3 px-10 transform -translate-x-6">
                <i className="fal fa-angle-left cursor-pointer text-4xl"></i>ON DEMAND
            </div>
        </div>
        <Link href="/category"><span className="opacity-90 px-10 sm:px-0 cursor-pointer">OPERA</span></Link>
        <Link href="/category"><span className="opacity-90 px-10 sm:px-0 cursor-pointer">BALLETTO</span></Link>
        <Link href="/category"><span className="opacity-90 px-10 sm:px-0 cursor-pointer">CONCERTI</span></Link>
        <a href="#" className="opacity-90 px-10 sm:px-0">BAMBINI</a>
        <a href="#" className="opacity-90 px-10 sm:px-0">PLAYLIST</a>
        <a href="#" className="opacity-90 px-10 sm:px-0">DOCUMENTARI</a>
        <a href="#" className="opacity-90 px-10 sm:px-0">BALLETTO</a>
        <a href="#" className="opacity-90 px-10 sm:px-0">INTERVISTE</a>
    </div>
</div>
</>
  );
}

export default Navbar;
