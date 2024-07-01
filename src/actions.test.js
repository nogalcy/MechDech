import * as actions from './actions.js';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants.js"
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

const mockStore = configureMockStore([thunk])

it('should create an action to search robots', () => {
    const text = 'hello';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots api call', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
})