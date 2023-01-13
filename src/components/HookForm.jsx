import { useState } from 'react';

const HookForm = () => {
  const [firstname, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email , setEmail ] = useState('');
  const [password , setPassword ] = useState('');
  const [cpassword, setCpassword] = useState('');

  // when user create another form(click the button we should see all the toHaveFormValues
  //   that typed in)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = {
  //     firstname: firstname,
  //     lname: lname,
  //     email: email,
  //     password: password,
  //     cpassword: cpassword,
  //   }
  // setForms([... forms, form]) to get all infor entered with
  // spread method first
  // }

  return (
    <div className='card'>
      <h5 className="card-header">Hook Form</h5>
      <div className="card-body">

        {/* if you have a btn and to active it- write this 
        <form onSubmit={(e) => handleSubmit(e)}> */}

        <form>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name:</label>
            <input type="text" name="firstname" id="firstname" className="form-control" value={firstname} onChange={(e)=> setName(e.target.value)} /> 
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name:</label>
            <input type="text" name="lname" id="lname" className="form-control" value={lname} onChange={(e)=> setLname(e.target.value)}/> 
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="text" name="email" id="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/> 
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="text" name="password" id="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          {/* type input suppose to be number? */}
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password:</label>
            <input type="text" name="cpassword" id="cpassword" className="form-control" value={cpassword} onChange={(e)=> setCpassword(e.target.value)}/> 
          </div>
          {/* this is for img url if u wanna add it
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input type="text" name="image" id="image" className="form-control" />
          </div> */}

          {/* this is a how to add button
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Create Form</button>
          </div> */}
          
        </form>
        <div className="mb-3">
          <h1>My form data</h1>
          <p> {firstname}</p>
          <p> {lname}</p>
          <p> {email}</p>
          <p> {password}</p>
          <p> {cpassword}</p>
        </div>
      </div>

    </div>
  )
}

export default HookForm