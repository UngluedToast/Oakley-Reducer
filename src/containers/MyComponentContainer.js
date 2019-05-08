import { connect } from 'react-redux'
import MyComponent from '../Components/MyComponents'
import {
    setActivityEat,
    setActivityNap,
    setActivityPlay
} from '../action-reducers'



const mapStateToProps = state => {
    return {
        activity: state.activity,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClickEat: () => {
            dispatch(setActivityEat());
        },
        handleClickNap: () => {
            dispatch(setActivityNap());
        },
        handleClickPlay: () => {
            dispatch(setActivityPlay());
        }
    }
}

const makeSmartComponent = connect (
    mapStateToProps,
    mapDispatchToProps
);

const mySmartComponent = makeSmartComponent(MyComponent);

export default mySmartComponent;