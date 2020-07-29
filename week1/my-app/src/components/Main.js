import React from 'react'
import { ThemeContextConsumer } from './themeContext'
function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p >By using context, we will eliminate the need to pass data or functions down as props and just render the component. To start out using the context API we create a file, and in that file, we call React. createContext() and save the result in a variable.</p>
                </div>
            )}

        </ThemeContextConsumer>
    )
}

export default Main