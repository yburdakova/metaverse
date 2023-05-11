import React , { Dispatch, SetStateAction } from "react";

export interface  ExploreCardProps {
    id?: any;
    imgUrl?: string | StaticImageData;
    title?: string;
    active?:string;
    index?: any;
    handleClick: Dispatch<SetStateAction<string>>;
}
export interface NavbarStylesProps {
    innerWidth: string;
    interWidth: string;
    paddings: string;
    yPaddings: string;
    xPaddings: string;
    topPaddings: string;
    bottomPaddings: string;
    flexCenter: string;
    flexStart: string;
    flexEnd: string;
    navPadding: string;
    heroHeading: string;
    heroDText: string;
}

export interface StaggerContainerProps {
    staggerChildren: any;
    delayChildren: any;

}

export interface slideInProps {
    direction: string;
    type: string; 
    delay: number; 
    duration: number;
}