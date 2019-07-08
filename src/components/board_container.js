import {connect} from 'react-redux';
import Board from './board';
import {gameover, reset} from '../redux/actions/action';

const mapStateToProps = state => ({
    finish: state.finish,
    towers: state.towers,
    discs: state.discs
})

export default connect(
    mapStateToProps,
    {gameover, reset} 
)(Board);