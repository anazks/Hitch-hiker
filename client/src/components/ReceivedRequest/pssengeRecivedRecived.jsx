import React from 'react';
function passengerRecivedRecived() {
    return ( 
        <section className="bg-gray  section mx-auto" style={{marginTop:'5rem'}} >
            <div className="container">
                <div className="card">
                <div className="card-body text-dark" style={{height:'10rem',backgroundColor:'#f4f0f0',fontFamily: "'IM Fell English', serif",fontFamily: "'Inika', serif", fontFamily: "'Rubik', sans-serif"}}>
                    <div className=" row align-items-center my-auto" style={{height:'8rem'}}>
                    <div className="col-sm-9 text-center text-sm-left " >
                        <h5 className="mt-3"><b>Hello ,   I'm your Hitch-Hiking Partner</b></h5>
                        <p className="mb-3">More about, How me work....!</p>
                    </div>
                    <div className="col-sm-3 text-center text-sm-right " >
                        <button className="btn btn-light rounded">Let's Go</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}

export default passengerRecivedRecived;