import React from 'react';


const Location = (props) => {
    let {city, street, country, zip,
    } = props.location;
   const {setLocation} = props;


    return props.editing ?
        <div className="event-location">
             {/*Abstract these inputs*/}
                <label htmlFor="street" className="mb-0">Street</label>
                <input className="form-control mb-3 mt-0"
                       value={street}
                       onChange={(e)=> setLocation({...props.location, street: e.target.value})}/>

                <label htmlFor="city" className="mb-0">City</label>
                <input className="form-control mb-2"
                       value={city}
                       onChange={(e)=>  setLocation({...props.location, city: e.target.value})}/>

               <label htmlFor="country" className="mb-0">Country</label>
                <input className="form-control mb-2"
                       value={country}
                       onChange={(e)=> setLocation({...props.location, country: e.target.value})}/>

                <label htmlFor="zip" className="mb-0">Zip</label>
                <input className="form-control mb-2"
                       value={zip}
                       onChange={(e)=>  setLocation({...props.location, zip: e.target.value})}/>
            </div>
       :
        <div>
        <p className="event-loc-city mb-0">{street},{city}</p>
        <p className="event-loc-city">{country}, {zip}</p>
      </div>

}

export  default Location;
