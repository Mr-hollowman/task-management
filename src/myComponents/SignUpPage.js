// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function SignUpPage() {
//   const [data,setData]=useState([
//     {
//         userName:'',
//         age:'',
//     }
//   ]);
//   const onUploadImage=(file)=>{
//     console.log("file",file);
//   }
//   useEffect(()=>{getData()},[])
//   const getData=()=>axios.get("http://localhost:3000/users").then(res=>setData(res.data))
//   const addData=()=>axios.post("http://localhost:3000/users",);
//   return (
//     <div className="App">
//       <input type='text' name='username' ></input>
//       <input type='text' name='age'></input>
//       <input type='file' onChange={onUploadImage}></input>
//       <button onClick={()=>addData()}>clickme</button>
//       {data.map((item,index)=><div key={index}><h1>{item.name}</h1><img width='300px' src={item.src} alt='myphoto'></img></div>)}
//     </div>
//   );
// }

// export default SignUpPage;
