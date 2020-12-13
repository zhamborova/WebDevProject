import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import './tags.css'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
const Tags =  (props) => {

    let {tags,editing, removeTag, addTag} = props
    let [tag, setTag] = useState("")

   return <div className="event-tags ">
       {editing ?
       <>
       <Box display="flex"
            bgcolor="background.paper"
            justifyContent="space-between">
            <TextField  label="Add tags..."
                       variant="outlined"
                       name="image"
                       value={tag}
                       onChange={(e)=> setTag(e.target.value)}
                       margin="normal"

            />

       <FontAwesomeIcon icon={faPlus} onClick={()=> {
           if (tag === '') {
               window.alert("Can't add an empty tag")
           } else {
               addTag(tag);
               setTag("")
           }
           }}
                        className="mr-auto mt-auto mb-auto ml-4"/>
       </Box>
       </>
       : null}
        <ul className="nav">
            {tags.map(tag=>
            editing ?

                <li className="nav-item" key={tag}>
                    {tag}
                    <FontAwesomeIcon icon={faTimes}
                                     className="remove-tag-btn"
                                     onClick={()=> removeTag(tag)}/>
                </li>
                :<li className="nav-item" key={tag}>
                    {tag}
                </li>
            )}
        </ul>
    </div>
}

export default Tags;
