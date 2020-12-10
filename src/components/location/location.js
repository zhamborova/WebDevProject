import React from 'react';
import TextField from "@material-ui/core/TextField";


const Location = (props) => {

    let {city, street, country,zip} = props.location;
    const {setLocation} = props;


    return props.editing ?
        <div className="event-location d-flex flex-column">
            <TextField id="outlined-basic" label="Street" variant="outlined"  margin="normal"
                       value={street}
                       onChange={(e)=> setLocation({...props.location, street: e.target.value})}/>
            <TextField id="outlined-basic" label="City" variant="outlined"   margin="normal"
                       value={city}
                       onChange={(e)=>  setLocation({...props.location, city: e.target.value})}/>
            <TextField id="outlined-basic" label="Country" variant="outlined"   margin="normal"
                       value={country}
                       onChange={(e)=> setLocation({...props.location, country: e.target.value})}/>
            <TextField id="outlined-basic" label="Zip" variant="outlined"   margin="normal"
                       value={zip}
                       onChange={(e)=>  setLocation({...props.location, zip: e.target.value})}/>

            </div>
       :
        <div>
        <p className="event-loc-city mb-0">{street},{city}</p>
        <p className="event-loc-city">{country}, </p>
      </div>

}

export  default Location;
