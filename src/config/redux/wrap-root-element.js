import React from 'react'
import { Provider } from 'react-redux'

import configStore  from './configStore'

/* 
GatsbyJS convention for wrapping the root element with a provider
See https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
*/

export const wrapRootElement = ({ element }) => {
    const store = configStore()

    return <Provider store={store}>{element}</Provider>
}
    