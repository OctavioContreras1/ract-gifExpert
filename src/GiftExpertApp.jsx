import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
 
 const [categories, setCategories] = useState([ 'One Punch']);

 const onAddCategory = ( newCategory) => {
// categories.push(newCategory);
if ( categories.includes(newCategory)) return;

//  console.log(newCategory);
setCategories([newCategory, ...categories]);

 
 }
 
 
    return (
        <>
            {/* {titulo} */}
                <h1>GiftExpertApp</h1>

                {/* { input } */}

                <AddCategory 
                

                onNewCategory = {event => onAddCategory(event)}
                />


               
                
                <ol>
                    { 
                    categories.map((category) => (
                        
                         <GifGrid key={ category}
                         category = {category} />))
                         }
            
                
                </ol>


                {/* { Gif Item } */}

        

        
        </>
  )
}
