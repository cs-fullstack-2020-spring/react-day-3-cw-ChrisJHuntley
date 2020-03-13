import React, { Component } from 'react';

let user_input = prompt('What is your favorite movie')
let user_input2 = prompt('What is your second favorite movie')
let user_album1=prompt('What is your Favorite album')
let user_album2=prompt('What is your second Favorite album')

class Favorites extends Component {
    render() {
        let moviesArray = []
        let albumsArray=[]
        console.log(moviesArray)
        return (
            moviesArray.push(favMovie1, favMovie2)
            albumsArray.push(Album1, Album2);
            < div >
            <h1>This is a list of your favorite movies and albums</h1>
            {/* <Favorites favMovie1={user_input} />
            <Favorites favMovie2={user_input2} /> */}
            <Albums Album1= {user_album1}/>
            <Albums Album2 ={user_album2}/>
            </div >
        );
    }
}
export default Favorites