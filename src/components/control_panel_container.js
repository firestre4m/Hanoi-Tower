import {connect} from 'react-redux';
import ControlPanel from './control_panel';
import {reset, addDics, decDics} from '../redux/actions/action';

export default connect(
    null,
    {reset, addDics, decDics} 
)(ControlPanel);
