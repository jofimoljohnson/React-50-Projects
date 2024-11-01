import { useState } from "react";

const App = () => {
    const [typeColor, setTypeColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const handleCreateHexColor=()=>{
      const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      let  hexColor="#"
      for(let i=0;i<6;i++){
        hexColor+=hex[randomUtilityColor(hex.length)]
        setColor(hexColor)

      }

    }
    const handleCreateRgbColor=()=>{
      const r=randomUtilityColor(256)
      const g=randomUtilityColor(256)
      const b=randomUtilityColor(256)
      setColor(`rgb(${r},${g},${b})`)

    }

    const randomUtilityColor=(length)=>{
      return Math.floor(Math.random()*length)
    }



    return (
        <div style={{width:"100vw",height:"100vh",backgroundColor:color}}>
            <button onClick={()=>setTypeColor('rgb')}>Create RGB Color</button>
            <button onClick={()=>setTypeColor('hex')}>Create HEX Color</button>
            <button onClick={typeColor==='hex'?handleCreateHexColor:handleCreateRgbColor}>
              Generate Random Color</button>
            <div>
              <h1>{typeColor==="rgb"?"RGB Color":"HEX Color"}</h1>

              <h3>{color}</h3>

            </div>
        </div>
    );
};

export default App;
