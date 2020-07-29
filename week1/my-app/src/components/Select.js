import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Select() {
    return (
        <ThemeContextConsumer>
            {context => (

                <select onClick={context.handleTheme} className={`${context.theme}-theme`}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="blue">Blue</option>
                    <option value="gold">Gold</option>
                </select>

            )}
        </ThemeContextConsumer>
    )
}

export default Select