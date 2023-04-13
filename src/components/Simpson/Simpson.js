import React from 'react';

const Simpson = ({simpson}) => {
    const {id,name,surname,age,info,photo} = simpson;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <div>info: {info}</div>
            <img src={photo}/>
        </div>
    );
};

export default Simpson;