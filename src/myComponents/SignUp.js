import React, { useState, useEffect } from "react";
// import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
// import { toast } from "react-toastify";

function SignUp() {
  const [formvalue, setFormValue] = useState("");
  const onUploadImage = (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mypodcast_web");
    axios
      .post("http://api.cloudinary.com/v1_1/dcmztntur/image/upload", formData)
      .then((resp) => {
        console.log("response", resp);
        alert("image uploaded successfully");
        setFormValue({...formvalue,imageUrl:resp.data.url})
      }).catch((err)=>{
        alert("something went wrong",err)
      })
  };
  const getInput=(e)=>{
      const{name,value}=e.target;
      setFormValue({...formvalue,[name]:value})
  }
  useEffect(()=>{getData()},[])
  const getData=()=>axios.get("http://localhost:3000/users").then(res=>setFormValue(res.data))
  const handleSubmit=(e)=>{
    e.preventDefault();  
    axios.post("http://localhost:3000/users",{formvalue})};

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' name="userName" onChange={e=>getInput(e)}placeholder="enter your name"></input>
        <input type='password' name="password" onChange={e=>getInput(e)} placeholder='enter your password'></input>
        <input type='file' name='image' onChange={e=>onUploadImage(e.target.files)}></input>
        <input type='submit' value='click to submit'></input>
    </form>
  );
}
export default SignUp;