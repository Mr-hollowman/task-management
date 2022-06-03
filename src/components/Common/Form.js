import * as React from 'react';
import Button from './Button';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { Link } from 'react-router-dom';
export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
  return (
        // <div className='myContainer'>
        //     <div>
        //     <div className="heading-container">
        //         <h3>
        //             {title} Form
        //         </h3>
        //     </div>
        //     <Box
        //         component="form"
        //         sx={{
        //             '& > :not(style)': { m: 2, width: '25ch' },
        //         }}
        //         noValidate
        //         autoComplete="off"
        //     >
        //         <TextField
        //             id="email"
        //             label="Enter the Email"
        //             variant="outlined"
        //             onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <TextField
        //             id="password"
        //             label="Enter the Password"
        //             variant="outlined"
        //             onChange={(e) => setPassword(e.target.value)}
        //         />
        //     </Box>
        //     <div className='heading-container'>
        //     <Button title={title} handleAction={handleAction}/>
        //     </div>
        //     </div>
        <div className='selva'>
            <div className='selva2'>
        <MDBContainer>
        <MDBRow>
          <MDBCol md="3">
            <form>
            <p className="h4 text-center mb-5">{title} Form</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
              required
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}

              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
              required
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}

              />
              <div className="text-center mt-5">
                 <Button title={title} handleAction={handleAction}/><br></br><br></br>
                 <div className={title==="Register"?'notvisible':'visible'}>{" Or "}<br></br><br></br>Not a user <Link to='/register'> Register</Link></div>
                 <div className={title==="Register"?'visible':'notvisible'}>{" Or "}<br></br><br></br>already a user <Link to='/login'> Login</Link></div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      </div>
    );
}