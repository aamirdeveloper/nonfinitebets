import React, { createContext, useContext, useReducer } from 'react'
import reducer from './AllReducer';
import axios from 'axios';

const AllContext = createContext()

const initialState = {
    transactions: [],
    bets: [],
    userGamesDetails: {},
    events: {}
}

const AllContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getTransactionHistory = async (userToken) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/transaction/list`, {
                headers: {
                  Authorization: `${userToken.token}`
                }
            })
            const data = await response.data

            dispatch({ type: "setTransactionHistory", payload: data })
        } catch (error) {
            console.log("Error:", error);
        }

    }

    const getBets = async (userToken) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/bets/list`, {
                headers: {
                  Authorization: `${userToken.token}`
                }
            })
            const data = await response.data

            dispatch({ type: "setBets", payload: data })
        } catch (error) {
            console.log("Error:", error);
        }

    }

    const getUserGamesDetails = async (userToken) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/dashboard`, {
                headers: {
                  Authorization: `${userToken.token}`
                }
            })
            const data = await response.data

            dispatch({ type: "setUserGamesDetails", payload: data })
        } catch (error) {
            console.log("Error:", error);
        }
    }

    const getEvents = async (formattedDate, type) => {
        try {
            const response = await axios.get(`https://dev-zilla.com/projects/nonfinite_bets_after/games.json`)
            const data = await response.data

            dispatch({ type: "setEvents", payload: data })
        } catch (error) {
            console.log("Error:", error);
        }
    }

    const getEventsByDate = async (formattedDate, type) => {
        try {
            const response = await axios.get(`https://eapi.enetpulse.com/event/daily/?username=nbetsapiusr&token=4d695ad0f5f645df21e34b78ae96cfb1&sportFK=1&language_typeFK=3&date=${formattedDate}`)
            const data = await response.data

            dispatch({ type: "setEvents", payload: data })
        } catch (error) {
            console.log("Error:", error);
        }
    }


    
    return <AllContext.Provider value={{...state, getTransactionHistory, getBets, getUserGamesDetails, getEvents, getEventsByDate}}>
        {children}
    </AllContext.Provider>
}

const useAllContext = () => {
    return useContext(AllContext)
}

export { AllContextProvider, useAllContext }