import React from 'react'
import { InputButton } from 'vtex.styleguide'

import useProfileContext from '../../context/ProfileContext/UseProfileContext'

const Component2 = () => {
    const { state, dispatch } = useProfileContext()

    const handleOnChange = (e: any) => {
        dispatch({
            type: 'SET_NAME',
            args: {
                name: e.target.value,
            },
        })
    }

    return (
        <div className="strong">
            <InputButton
                placeholder="tu nombre"
                size="regular"
                label="Danos tu nombre"
                button="enviar"
                value={state?.name ?? ''}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default Component2
