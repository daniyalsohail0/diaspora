import React from "react";


const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 gap-4">
      <div className="flex justify-center items-center md:w-1/4">
        <h1 className="text-white">Diaspora</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 flex-wrap sm:mt-0 mt-5 md:ml-5 md:w-3/4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">
            About
          </h1>
          <a className="text-white" href="/">About Us</a>
          <a href="https://whitepaperv.1.racersutopia.com" className="text-white">Whitepaper</a>
          <a href="https://whitepaperv.1.racersutopia.com/overall-documentation/tokenomics" className="text-white">Tokenomics</a>
          <a href="https://whitepaperv.1.racersutopia.com/overall-documentation/roadmap" className="text-white">Roadmap</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">
            Social
          </h1>
          <a className="text-white" href='https://twitter.com/racersutopia' target='_blank' rel="noreferrer">Twitter</a>
          <a className="text-white" href='https://youtube.com/channel/UCikk3coHDPkwVlX3rHjwHOQ' target='_blank' rel="noreferrer">YouTube</a>
          <a className="text-white" href="https://t.me/racersutopia" target='_blank' rel="noreferrer">Telegram</a>
          <a className="text-white" href='https://discord.gg/qMes9y3B' target='_blank' rel="noreferrer">Discord</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">
            Info
          </h1>
          <a className="text-white">Disclaimer</a>
          <a className="text-white">Terms & Conditions</a>
          <a className="text-white">Privacy Policy</a>
        </div>
      </div>
    </div>
    
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@diaspora.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@diaspora2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
