import React, { FC, createContext, useReducer } from 'react'

interface State {
    name: string
    lastName: string
    email: string
}

interface Actions {
    type: string
    args: any
}

const initialState: State = {
    name: 'Jenifer',
    lastName: 'Samper',
    email: 'prueba@gmail.com',
}

interface ProfileContextType {
    state: State
    dispatch: any
}
export const ProfileContext = createContext<ProfileContextType>({
    state: initialState,
    dispatch: () => { },
})

const reducer = ({ name, lastName, email }: State, { type, args }: Actions) => {
    switch (type) {
        case 'SET_NAME':
            // Llamado a API para que los datos persistan
            return { name: args?.name ?? '', lastName, email }

        case 'SET_MAIL':
            return { name, lastName, email }

        default:
            return { name, lastName, email }
    }
}

export const ProfileContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}
