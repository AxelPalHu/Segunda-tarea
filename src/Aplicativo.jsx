import  {useState} from 'react';
import { FormGif } from "./FormGif"
import { CardPersonaje } from './CardPersonaje';

export const Aplicativo = () => {
    const [categories,setCategories]= useState(["Rick"])

    const addCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }
    return(
        <main>
        <FormGif addCategory= {addCategory}/>

        {
            categories .map((category)=>(
                <CardPersonaje key={category} category= {category} />
            ))
        }

       

        <article>
            <img src="" alt="" />
            <img src="" alt=""/>
            <img src="" alt="" />
            <img src="" alt=""/>



        </article>


    
    </main>
    )
}

