import React, {Component} from "react";

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (<div>
            <h1 className='f1'>MechDech</h1>
        </div>
        );
    }
}

export default Header;