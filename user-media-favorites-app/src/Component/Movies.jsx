import React, {Components, Component} from 'react'


class Movie extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div>
            <h1>{this.props.moviesArray}</h1>
        </div>
    )
}
}
export default Movie