import React from 'react'

import FirstLine from './header/common/firstLine'
import Header from './header/index'


const Layout = ({children}) => {
    return (
        <div lang='el'>
            <FirstLine />
            <Header />  
            {children}
        </div>
    )
}

export default Layout
