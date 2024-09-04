"use client";
import Image  from 'next/image'
import {CustomButtonProps} from "@/types";

const CustomButton = ({title, containerStyles, handlClick, btnType}:CustomButtonProps) => {
    return (
        <button
        disabled={false}
        type={btnType||"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handlClick}
        >
          <span className={'flex-1'}>
              {title}
          </span>
        </button>
    )
}
export default CustomButton
