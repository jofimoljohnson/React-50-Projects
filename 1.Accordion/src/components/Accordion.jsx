import { useState } from 'react'
import data from '../data'
const Accordion = () => {
  const [selected,setSelected]=useState(data)
  const [enableMultiSelection,setEnableMultiSelection]=useState(false)
  const [multiple,setMultiple]=useState([])

  const handleSingleSelection=(currentId)=>{
    setSelected(currentId===selected?null:currentId)
  }

  const handleMultiSelection=(currentId)=>{
    const copyMultiple=[...multiple]
    const finalIndexOfCurrentId=copyMultiple.indexOf(currentId)
    if(finalIndexOfCurrentId===-1)copyMultiple.push(currentId)
      else copyMultiple.splice(finalIndexOfCurrentId,1)
    setMultiple(copyMultiple)

  }


  return (
    <div>
      <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button>
      {
        data&& data.length>0?(
          data.map((item)=>{
            return(
              <div key={item.id} onClick={enableMultiSelection?     
                 ()=>handleMultiSelection(item.id):

                ()=>handleSingleSelection(item.id)
              }>
                <h1>{item.question}</h1>
                <span >+</span>
                

               {
                enableMultiSelection ?multiple.indexOf(item.id)!==-1 && <div>{item.answer}</div>:
                selected===item.id && <div>{item.answer}</div>
               }

              </div>

            )
          })
        ):(
          <div>No data found</div>
        )
      }






    </div>
  )
}

export default Accordion