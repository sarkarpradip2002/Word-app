import React from 'react'

export default function Alert(props) {
    
      return (
          <div style={{height: "60px"}}>
        {props.show &&<div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.show.message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>}
        </div>
    )
}
