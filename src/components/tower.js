import React from 'react';
import Disc from './disc';
import {DropTarget} from 'react-dnd';
import ItemTypes from './types';
import '../css/tower.css';

const towerTarget = {
    drop: (props, monitor, component) => {
        const item = monitor.getItem();
        component.handleDrop(item);
    },
    canDrop: (props, monitor) => {
        const draggedItem = monitor.getItem();
        const currTopItem = props.discArray[0];
        return currTopItem === undefined || draggedItem.width < currTopItem.width;
    },
}


const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: !!monitor.isOver(),
    canDrop: !!monitor.canDrop()

})


class Tower extends React.Component {
    constructor(props) {
        super(props);

        this.renderDisc = this.renderDisc.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }


    handleDrop(item) {
        console.log(`drop at tower: ${this.props.id}`);
        console.log(`last loc: ${item.loc}`);
        this.props.moveDisc(item.loc, this.props.id);
    }


    renderDisc(loc, width, color, draggable){
        return <Disc loc={loc} width={width} color={color} draggable={draggable}/>
    }

    render () {
        const {isOver, canDrop, connectDropTarget} = this.props;

        let discs = []
        

        this.props.discArray.forEach((element, index) => {
            discs.push(this.renderDisc(element.loc, element.width, element.color, index===0))
        });

        

        return connectDropTarget(
            <div className="outerBox" >
                {isOver && canDrop && <div className="hoveredPillar"></div>}
                {isOver && !canDrop && <div className="pillar"></div>}
                {!isOver && <div className="pillar"></div>}
                <div align='center' className="discsList">
                        {discs.map((disc, id) => <div key={id} className="disc">{disc}</div>)}
                </div>
                {isOver && canDrop && <div className="hoveredBase" ></div>}
                {isOver && !canDrop && <div className="base" ></div>}
                {!isOver && <div className="base" ></div>}
            </div>
        )
    }
}

export default DropTarget(ItemTypes.DISC, towerTarget, collect)(Tower);