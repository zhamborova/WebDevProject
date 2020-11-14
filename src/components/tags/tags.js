import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import './tags.css'
const Tags =  (props) => {

    let {tags,editing, removeTag, addTag} = props
    let [tag, setTag] = useState("")

   return <div className="event-tags ">
       {editing ?
       <>
       <label htmlFor="tag" >Add tag </label>
        <div className="d-flex">
       <input name={"tag"} className="form-control tag-name mb-2"
              value={tag}
              onChange={(e)=> setTag(e.target.value)}/>
       <FontAwesomeIcon icon={faPlus} onClick={()=> {addTag(tag);
                                                     setTag("")}} className="m-auto "/> </div>
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
