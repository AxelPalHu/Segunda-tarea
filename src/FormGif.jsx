import  {useState} from 'react';
 
export const FormGif  = ({addCategory}) => {

    const [inputValue, setnputValue]= useState("")
    const onInputChange = (event) =>{
        setnputValue(event.target.value)
    }

    const onAddGif = (event) =>{
        event.preventDefault()
        addCategory(inputValue)
        console.log("YA NO SE ACTUALIZA")
    } 

    return (
        
        <form onSubmit={onAddGif}>
            <input value={inputValue} type="text" onChange={onInputChange} />
            <button>Buscar</button>

        </form>
        
    )
}
 

