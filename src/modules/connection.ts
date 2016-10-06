import { Reducer } from 'redux';
import { Conversation } from '../directLineTypes';

export interface State {
    conversation: Conversation,
    userId: string
}

type ConnectionAction = {
    type: 'Set_UserId', 
    userId: string
} | {
    type: 'Connected_To_Bot',
    conversation: Conversation
}

export const action_setUserId = userId => ({ type: 'Set_UserId', userId } as ConnectionAction);
export const connectedToBot = conversation => ({ type: 'Connected_To_Bot', conversation } as ConnectionAction);

export const reducer:Reducer<ConnectionState> = (
    state: State = {
        conversation: undefined,
        userId: undefined,
    },
    action: ConnectionAction
) => {
    switch (action.type) {
        case 'Set_UserId':
            return { conversation: state.conversation, userId: action.userId };
        case 'Connected_To_Bot':
            return { conversation: action.conversation, userId: state.userId };
        default:
            return state;
    }
}
