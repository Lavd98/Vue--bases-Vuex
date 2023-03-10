export const increment = ( state ) => {
    state.count ++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, val ) => {
    state.count = state.count + val
    state.lastMutation = `increment by ${val}`
    state.lastRandomInt = val
}

export const setLoading = ( state, val ) => {
    state.isLoading = val
    state.lastMutation = `setLoading ${val}`
}