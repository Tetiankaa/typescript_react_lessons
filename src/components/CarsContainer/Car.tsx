import React, {FC, useRef, useState} from 'react';
import {ICar} from "../../interfaces";
import emptyImage from '../../assets/images/empty.jpg';
import {carService} from "../../services";
import {FILE} from "dns";
interface IProps {
    car: ICar
}

const Car:FC<IProps> = ({car}) => {
    const {id, brand, year, price,photo} = car;
    const fileInput = useRef<HTMLInputElement>();

    const [image, setImage] = useState<string>(null);

    const addPhoto = async ():Promise<void>=>{
        const formData = new FormData();
        const file:Blob = fileInput.current.files[0];
        formData.append('photo',file);

        await carService.addPhoto(id,formData);

        setImage(URL.createObjectURL(file))
    }
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <img
                src={photo || image || emptyImage}
                alt={brand}
                style={{width:200,cursor:photo || image ? 'default' : 'pointer'}}
                onClick={()=>fileInput.current.click()}
            />
            <input
                type="file"
                accept={'image/jpeg, image/png'}
                ref={fileInput}
                style={{display:"none"}}
                disabled={!!photo || !!image}
                onChange={addPhoto}
            />
        </div>
    );
};

export {Car};