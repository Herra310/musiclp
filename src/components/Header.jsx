import React from "react";
import CenterMenu from "./CenterMenu";

function header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]' ;
  return (
    <div className="header bg-[#071530] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* logo */}
      <img src={require("../img/MuzicLogo.png")} alt="" className="logo w-[42px] h-[42px] " />
      {/* side menu */}
      <CenterMenu/>
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232a4e] `+buttonStyle}>Sign in</button>
        <button className={`bg-[#232a4e] `+buttonStyle}>Log in</button>
      </div>
    </div>
  );
}

export default header;
