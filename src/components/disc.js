import React from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from './types';
import '../css/disc.css';


const DiscSource = {
    canDrag(props) {
        return props.draggable;
    },
    beginDrag(props, monitor, component) {
        const item = {type:ItemTypes.DISC, loc:props.loc, width:props.width};
        return item;
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Disc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover: false}
        this.toggleHover = this.toggleHover.bind(this);
    }
    toggleHover() {
        this.setState({hover: !this.state.hover});
    }


    render () {
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div style={{align:'center'}}>
                <div className="singleDisc"
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                    style={{
                        width:this.props.width,
                        backgroundColor:this.props.color,
                        cursor: this.props.draggable && this.state.hover? (isDragging ? 'grabbing': 'grab'):'default',
                        opacity: this.props.draggable && this.state.hover ? '0.7':'1',
                        transform: this.props.draggable && this.state.hover ? 'scale(1.3)': 'none'
                }}> </div>
            </div>
        )

    }
}




export default DragSource(ItemTypes.DISC, DiscSource, collect) (Disc);
