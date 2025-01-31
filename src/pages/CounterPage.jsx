import Button from '../components/Buttons';
import { useReducer } from 'react';
import { produce } from 'immer';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'change-value'
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return;
    }
}

const CounterPage = ({ initialCount }) => {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        dispatch({
            type:INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type:DECREMENT_COUNT
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type:ADD_VALUE_TO_COUNT,
        })
    }
    return (
        <Panel className='m-3'> 
            <h1 className='text-lg'>COUNT IS {state.count}</h1>
            <div className='flex-row flex'>
                <Button primary onClick={increment}>
                    Increment
                </Button>
                <Button primary onClick={decrement}>
                    Decrement
                </Button>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Add a lot!</label>
                <input type="number" name="" value={state.valueToAdd || ""} onChange={handleChange} className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button danger>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage