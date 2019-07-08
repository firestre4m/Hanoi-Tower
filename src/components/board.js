import React from 'react';
import TowerContainer from './tower_container';
import Modal from './modal';
import showModal from '../utils/show_modal';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.displayModal = this.displayModal.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (!this.props.finish &&this.props.towers[2].length && this.props.towers[2].length === this.props.discs.length) {
            console.log('calling gameover');
            this.props.gameover();
        }

        if (this.props.finish !== prevProps.finish && this.props.finish) {
            this.props.reset();
            this.displayModal();
            console.log("Finished");
        }
    }

    displayModal() {
        showModal();
    }

    render() {
        return (
            <div className='board' style={{width:'60%', height:'300px'}}>
                <div style={{width:'100%', height:'300px',display:'flex', flexDirection:'row'}}> 
                    <TowerContainer id={0} />
                    <TowerContainer id={1} />
                    <TowerContainer id={2} />
                </div>
                <Modal />
            </div>
        )
    }
}

export default Board;