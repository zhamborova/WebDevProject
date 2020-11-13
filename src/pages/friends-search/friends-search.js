import React from 'react';
import SearchBar from "../../components/search-bar/search-bar";
import FriendCard from "../../components/friend-card/friend-card";
import img4 from "../../assets/Ellipse 4.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 3.png";

const friendsList =
    [
        {id: 123, first_name: "Michelle", last_name: "Steel", host: false, img: img4, url: "", location: "Boston, MA"},
        {id: 234, first_name: "Bryan", last_name: "Young", host: true, img: img2, url: "", location: "Boston, MA"},
        {id: 345, first_name: "Tom", last_name: "Holmes", host: false, img: img3, url: "", location: "Boston, MA"},
    ]

class FriendsSearch extends React.Component {

    state = {
        friends: friendsList
    }

    render() {
        return(
            <div>
                <SearchBar/>
                <div className={'friends-list'}>
                    {
                        this.state.friends.map(friend => <FriendCard friend={friend}/>)
                    }
                </div>
            </div>
        )
    }
}

export default FriendsSearch;