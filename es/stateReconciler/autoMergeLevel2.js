/*
  autoMergeLevel2:
    - merges 2 level of substate
    - skips substate if already modified
    - this is essentially redux-perist v4 behavior
*/
export default function autoMergeLevel2(inboundState, originalState, reducedState, { debug }) {
    const newState = Object.assign({}, reducedState);
    // only rehydrate if inboundState exists and is an object
    if (inboundState && typeof inboundState === 'object') {
        const keys = Object.keys(inboundState);
        keys.forEach(key => {
            // ignore _persist data
            if (key === '_persist')
                return;
            // if reducer modifies substate, skip auto rehydration
            if (originalState[key] !== reducedState[key]) {
                if (process.env.NODE_ENV !== 'production' && debug)
                    console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
                return;
            }
            if (isPlainEnoughObject(reducedState[key])) {
                // if object is plain enough shallow merge the new values (hence "Level2")
                newState[key] = Object.assign(Object.assign({}, newState[key]), inboundState[key]);
                return;
            }
            // otherwise hard set
            newState[key] = inboundState[key];
        });
    }
    if (process.env.NODE_ENV !== 'production' &&
        debug &&
        inboundState &&
        typeof inboundState === 'object')
        console.log(`redux-persist/stateReconciler: rehydrated keys '${Object.keys(inboundState).join(', ')}'`);
    return newState;
}
function isPlainEnoughObject(o) {
    return o !== null && !Array.isArray(o) && typeof o === 'object';
}
