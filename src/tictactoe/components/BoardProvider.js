import React, {useContext} from "react";

const Context = React.createContext([])

const BoardProvider = ({ children }) => {
    const state = new Array(9).fill(null)

    if (state.loading) {
        return <>Loading...</>
    }

    if (state.error) {
        return <>Error!</>
    }

    return <Context.Provider value={state.value}>{children}</Context.Provider>
}

export const useBoard = () => useContext(Context)

export default BoardProvider