import React, {FC, PropsWithChildren} from 'react';
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren{

}
const Component:FC<IProps> = () => {

    const params = useParams<{id:string; name:string}>();
    return (
        <div>
            
        </div>
    );
};

export {Component};