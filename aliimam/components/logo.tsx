import { cn } from "@/lib/utils";
import * as React from "react";
import { JSX } from "react/jsx-runtime";

export const Logo = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        width={658}
        height={376}
        viewBox="0 0 658 376"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M326.063 0L376.777 137.054L513.831 187.768L376.777 238.482L326.063 375.536L275.349 238.482L138.295 187.768L275.349 137.054L326.063 0Z"
            fill="#00A8FF"
        />
        <path
            d="M420.049 321.622V277.733L627.998 184.731V189.956L420.049 96.9536V53.0649L657.257 159.652V215.035L420.049 321.622Z"
            fill="#00A8FF"
        />
        <path
            d="M237.208 321.622L0 215.035V159.652L237.208 53.0649V96.9536L29.2591 189.956V184.731L237.208 277.733V321.622Z"
            fill="#00A8FF"
        />
    </svg>
); 


export const IconGridLines = ({ className }: { className?: string }) => {
    return (
      <svg
        width="1026"
        height="1026"
        viewBox="0 0 1026 1026"
        className={cn("h-80 w-auto", className)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1024.53 896.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 768.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 640.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 512.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 384.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 256.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 128.53H0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M896.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M768.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M640.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M512.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M384.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M256.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M128.53 1024.53V0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 0.530273L0.530273 1024.53"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M1024.53 1024.53L0.530273 0.530273"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M512.53 922.53C738.967 922.53 922.53 738.967 922.53 512.53C922.53 286.094 738.967 102.53 512.53 102.53C286.094 102.53 102.53 286.094 102.53 512.53C102.53 738.967 286.094 922.53 512.53 922.53Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M512.53 768.53C653.915 768.53 768.53 653.915 768.53 512.53C768.53 371.145 653.915 256.53 512.53 256.53C371.145 256.53 256.53 371.145 256.53 512.53C256.53 653.915 371.145 768.53 512.53 768.53Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M512.53 614.53C568.863 614.53 614.53 568.863 614.53 512.53C614.53 456.197 568.863 410.53 512.53 410.53C456.197 410.53 410.53 456.197 410.53 512.53C410.53 568.863 456.197 614.53 512.53 614.53Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </svg>
    )
  }
  