import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Header() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p>YAY, FIRST ASSIGNMENT OF FSW-130 AT BRYAN UNIVERSITY!!!! I AM SO EXCITED TO LEARN!!!</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Header