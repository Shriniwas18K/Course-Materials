import { FC } from "react";
import { person } from "./interfaces";
export const LargePersonListItem:FC<person>=(personProp)=>{
    const {name,age,hairColor,hobbies}:person=personProp;
    return (<>
        <h3>{name}</h3>
        <p>Age:{age}</p>
        <p>Hair Color:{hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby=> <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    );
}