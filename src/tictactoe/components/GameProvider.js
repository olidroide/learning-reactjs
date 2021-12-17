import React, { useContext } from 'react';

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
    const [cart, updateCart] = useImmer([])
    const onPlayerClick = (productName) => {
        updateCart((draft) => {
            let item = draft.find((elem) => elem.name === productName)

            if (!item) {
                item = { name: productName, quantity: 0 }
                draft.push(item)
            }

            item.quantity += 1
        })
    }

    return (
        <GameContext.Provider value={{ cart, onPlayerClick }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => useContext(GameContext)

export default GameProvider
