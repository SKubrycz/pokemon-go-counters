import { useState, useEffect } from 'react';

import { Type } from '../getTypes';

import {
    Reset, Random
  } from '../image-import';

type ChooseTypeFunction = (type: Type | null) => void;
type RandomizeTypesFunction = (arr: Type[]) => void;
type ResetTypesFunction = () => void;

interface ComponentProps {
    selectedImage: (Type | null)[] | null;
    chooseType: ChooseTypeFunction;
    randomizeTypes: RandomizeTypesFunction;
    resetTypes: ResetTypesFunction;
    arr: Type[];
}

const TypesChosen: React.FC<ComponentProps> = ({ selectedImage, chooseType, randomizeTypes, resetTypes, arr }) => {

    return (
        <div className='types-chosen'>
            <div className='types-chosen-absolute'>
            {selectedImage && selectedImage.map((image, index) => (
            <img 
                key={index} 
                className='types-img' 
                onClick={() => chooseType(image)} 
                src={image?.src || ''} 
                alt={image?.alt || ''} 
                title={image?.title || ''}
                style={{
                    animation: '.3s chosen 1',
                }}
            />
            ))}
            </div>
            <div className='types-reset-container'>
            <img className='types-reset' src={Random} onClick={() => randomizeTypes(arr)} title='Randomize' alt='randomize'></img>
            <img className='types-reset' src={Reset} onClick={resetTypes} title='Reset' alt='reset'></img>
            </div>
        </div>
    );
}

export default TypesChosen;
