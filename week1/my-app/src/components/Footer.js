import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p>React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on. Context is often touted as a simpler, lighter solution to using Redux for state management.</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer