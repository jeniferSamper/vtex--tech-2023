import React from 'react'

import useProfileContext from '../../context/ProfileContext/UseProfileContext'

const Component1 = () => {
    const { state } = useProfileContext()

    return <div className="strong">{state?.name} </div>
}

export default Component1
