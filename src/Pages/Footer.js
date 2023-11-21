import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <section className='footer-bg'>
             <div className="container">
                <div className="row">
                    <div className="col-md-3">
                       <p>2023@copyrights.reserved</p>
                    </div>
                    <div className="col-md-3">
                       <Link to="/">CREATE</Link>
                    </div>
                    <div className="col-md-3">
                       <Link to="/read">READ</Link>
                    </div>
                    <div className="col-md-3">
                       <Link to="/update">UPDATE</Link>
                    </div>
                </div>
             </div>
        </section>
    </div>
  )
}

export default Footer