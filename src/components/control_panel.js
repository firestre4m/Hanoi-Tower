import React from 'react';
import "../css/app.css";


class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDec = this.handleDec.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.reset();
    }
    handleAdd(e) {
        e.preventDefault();
        this.props.addDics();
    }
    handleDec(e) {
        e.preventDefault();
        this.props.decDics();
    }

    render () {
        return (
            <div className="panel" align="center" >
                <button onClick={this.handleAdd}> ADD</button>
                <button onClick={this.handleDec}> DEC </button>
                <button onClick={this.handleClick} > RST </button>
            </div>
        )
    }
}

export default ControlPanel;