import React from 'react';


const Location = (props) => {
    let {city, street, country, zip,editing,
        setStreet, setCity, setZip, setCountry,
    } = props.location;

    return props.editing ?
            <div>
                <label htmlFor="street">Street</label>
                <input className="form-control mb-2" onChange={(e)=> setStreet(e.target.value)}/>

               <label htmlFor="city">City</label>
                <input className="form-control mb-2" onChange={(e)=> setCity(e.target.value)}/>

                    <label htmlFor="country">Country</label>
                <input className="form-control mb-2"  onChange={(e)=> setCountry(e.target.value)}/>

                <label htmlFor="zip">Zip</label>
                <input className="form-control mb-2" onChange={(e)=> setZip(e.target.value)}/>
            </div>
       :
        <div>
        <p className="event-loc-city mb-0">{street}</p>
        <p className="event-loc-city">{country}</p>
      </div>

}

export  default Location;
