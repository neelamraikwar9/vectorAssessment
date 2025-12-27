// // import React from 'react'

// import { Handle, Position } from 'reactflow';
// import { useState } from 'react';


// const Common = (props) => {
//     const { nodetype, data={}, id='', dropdowntype=[], handleIdName = "", isInput={}, isnameType={}} = props



//  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data.inputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   }



//   return (
//      <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>{nodetype}</span>
//       </div>
      
//       { isInput &&
//       <div>
      
//         <label>
//            Name: 
//           <input 
//             type="text" 
//             value={currName} 
//             onChange={handleNameChange} 
//           />
//         </label>
      
//       { isnameType &&
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             {dropdowntype.map((drop) => 
// {
//                 console.log(drop,'fuiukiukiu')

//             return(
//             <option value={drop}>
//             {drop}
//             </option>)}
            
//             )}
           
//           </select>
//         </label>
//       }
//         </div>
//         }
      
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-${handleIdName}`}
//       />





    
//     </div>


//   )
// }

// export default Common;