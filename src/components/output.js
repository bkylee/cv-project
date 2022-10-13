import React, {Component} from "react";
import GenOutput from "./genOutput";

class Output extends Component {
    constructor (props){
        super(props)
        this.General = this.props.General;
        this.GenShow = this.props.GenShow;
    }

    render(){
        let output;
        if(this.GenShow){
            output = <div id="outputWrapper">
            <GenOutput General={this.General} Show={this.GenShow} />
        </div>
        } else {
            output = null;
        }
        return(
            <>
            {output}
            </>
        )
    }
}

export default Output;