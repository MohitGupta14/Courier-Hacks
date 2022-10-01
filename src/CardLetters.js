import React from 'react'
import "./CardLetters.css"
import { Link } from 'react-router-dom'

export const CardLetters = (props) => {
  return (
    <>
    <div className="card cardclass1">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
              
                <img src={props.image} className="card-img-top sizeclass" />
                {/* <Link to="#" className="btn btn-primary">
                  Go somewhere
                </Link> */}
              </div>
            </div>
     
    </>
  )
}

/*       <div className="card cardclass2">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            <div className="card cardclass3">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            */