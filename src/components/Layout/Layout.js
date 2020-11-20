import React, { Fragment } from 'react'
import "./styles.css"

export const Layout = ({children, title}) => {
    return (
        <Fragment>
            <div>
            {title && <h1>{title}<h1>}
                {children}
            </div> 
        </Fragment>
    )
}