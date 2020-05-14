import { INCREMENT } from '../types';
//these are our action creators are funcs that just returns an object
// the object that an action creators should MUST HAVE a type property

export const increment = () => {
    return {
        type:INCREMENT
    };
};
