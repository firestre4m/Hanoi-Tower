import Tower from './tower';
import {connect} from 'react-redux';
import {moveDisc} from '../redux/actions/action';

const mapStateToProps = (state, ownProps) => ({
    discArray: state.towers[ownProps.id],
});

const mapDispatchToProps = {
    moveDisc
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tower);