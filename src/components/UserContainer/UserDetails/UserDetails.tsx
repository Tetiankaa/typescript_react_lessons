import React, {FC} from 'react';
import {IUser} from "../../../interfaces/userInterface";

interface IProps{
    userDetails:IUser
}
const UserDetails:FC<IProps> = ({userDetails}) => {

    const {id,name,username, address:{city}} = userDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {UserDetails};