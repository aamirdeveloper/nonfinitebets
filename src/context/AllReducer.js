
const reducer = (state, action) => {
    switch (action.type) {
        case "setTransactionHistory":
            return {
                ...state,
                transactions: action.payload.data
            }

        case "setBets":
            return {
                ...state,
                bets: action.payload.data
            }

        case "setUserGamesDetails":
            return {
                ...state,
                userGamesDetails: action.payload
            }

        case "setEvents":
            return {
                ...state,
                events: action.payload
            }
            
    
        default:
            return state;
    }
    
}

export default reducer