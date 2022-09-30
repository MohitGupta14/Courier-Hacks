import React from 'react'
import './Form.css'

export const Form = () => {

  return (
    <div>
     
    <div class="card mycard">
    <div class="card-body">
    <div>
        <form action="/" method="POST">
      <div className="form-group my-3">
        <div className="form-group mb-3 marginclass my-3">
          <label forName="Name">Subject</label>
          <input type="text" className="form-control" name="subject" autocomplete="off" required />
        </div>

        <div className="form-group mb-3 marginclass my-3">
          <label hmtlFor="body" >Email address</label>
          <input type="text" className="form-control" name="body" autocomplete="off" required />
        </div>

        <div className="form-group mb-3 marginclass my-3">
          <label htmlFor="body" className="form-label">Content</label>
          <input type="text" className="form-control" name="content" autocomplete="off" required />
        </div>
       
        <button type="submit" class="btn btn-primary" onClick={()=>{
            return <div className={"alert alert-primary marginbottom"} role="alert">
            Your mail was delivered!
            </div>
        }}>Submit</button>

        </div>
      </form>
      </div>
      </div>
      </div>

      <div className="container class">
      <h5 className="margintop ">
        If the mail has not been delivered yet, please check that the email address is correct.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aut nisi quis, aliquid natus, repudiandae fugit iusto dolor adipisci quibusdam eligendi suscipit blanditiis repellat doloribus expedita odit voluptatibus architecto officiis!
      </h5>
      </div>
    
    </div>
  )
}
