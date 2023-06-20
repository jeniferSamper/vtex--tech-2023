import React from 'react'

import { ProfileContextProvider } from '../../context/ProfileContext'

const MyComponent = ({ children }: any) => {
    return (
        <ProfileContextProvider>
            <div className="flex flex-column green">{children}</div>
        </ProfileContextProvider>
    )
}

export default MyComponent
