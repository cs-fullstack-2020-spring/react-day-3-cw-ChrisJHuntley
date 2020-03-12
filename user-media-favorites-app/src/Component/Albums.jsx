
 import React, {Components, Component} from 'react'


 class Album extends Component{
     constructor(props){
         super(props)
     }
     render(){
     return(
         <div>
             <h1>{this.props.albumsArray}</h1>
         </div>
     )
 }
 }
 export default Album