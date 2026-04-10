import { type JSX, useState, useEffect } from "react";

interface AgeProp {
    BirthDate: Date
}

const Age = ({ BirthDate }: AgeProp): JSX.Element => {
    const [Now, SetNow] = useState(new Date());

    useEffect((): () => void => {
        const Interval = setInterval((): void => {
            SetNow(new Date());
        }, 1000);

        return (): void => clearInterval(Interval);
    }, []);

    const Years: number = Now.getFullYear() - BirthDate.getFullYear();
    const HasHadAnniversary: boolean = Now.getMonth() > BirthDate.getMonth() || 
        (Now.getMonth() === BirthDate.getMonth() && Now.getDate() >= BirthDate.getDate())
    ;
    
    return <span>{HasHadAnniversary ? Years : Years - 1}</span>;
};

export default Age;