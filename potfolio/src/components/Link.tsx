import type { JSX } from "react";

interface LinkProp {
    children?: React.ReactNode, 
    ResourceName?: string, 
    Href?: string, 
    Title?: string,
    ClassName?: string,
    ID?: string
}


const Link = ({ children = undefined, ResourceName = undefined, Href = undefined, Title = undefined, ClassName = undefined, ID = undefined }: LinkProp): JSX.Element => {
    const Open = (): void => {
        if(Href) {
            window.open(Href, "blank_");
        }
    };

    return (
        <>
            {ResourceName ? <img 
                src={`${ResourceName}`} 
                className={`h-[1em] w-fit${Href ? " hover:cursor-pointer" : ""}`} 
                title={Title} 
                onClick={Open}
            /> : <></>}
            <span 
                className={`w-fit${Href ? " hover:cursor-pointer" : ""} ${ClassName}`} 
                title={Title} 
                onClick={Open}
                id={ID}
            >{children}</span>
        </>
    );
};

export default Link;