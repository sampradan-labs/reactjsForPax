import React, {useState} from 'react';

export function Loop(){
    var people=[{id:1, name:"Eena"},{id:2, name:"Meena"},{id:3, name:"Deeka"}];
    const [list, setList] = useState(people);
   
    
    function handleEnter(e){
        if(e.key == 'Enter'){
            //list.push({id: 4, name:e.target.value});
            const newList = list.concat({ name:e.target.value, id: list.length });
            setList(newList);
        }
    }


        return (
            <div>
            <hr></hr>
            <input type='text' placeholder='Enter a name to add' onKeyUp={(e)=>handleEnter(e)}/>
            <h4>Printing arrays in ordered list</h4>
            <ol>
                {
                    list.map(function(person){
                        return <li key={person.id}>{person.name}</li>
                    })
                }
            </ol>
            </div>
        )
    
}

