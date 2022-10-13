import React, {Component} from "react";
import GenOutput from "./genOutput";

class Output extends Component {
    constructor (props){
        super(props)
        this.General = this.props.General;
        this.GenShow = this.props.GenShow;
    }

    render(){
        return(
            <div id="outputWrapper">
                <GenOutput General={this.General} Show={this.Show} />
            </div>
        )
    }
}

export default Output;