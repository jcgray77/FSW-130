import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }

    //    toggleTheme = () => {
    //        this.setState(prevState => {
    //            return {
    //                theme: prevState.theme === "light" ? "dark" : "light"
    //            }
    //        })
    //    }


    toggleTheme = () => {
        this.setState(prevState => {
            switch (true) {
                case (prevState.theme === 'dark'):
                    return { theme: "light" }
                case (prevState.theme === 'light'):
                    return { theme: "dark" }
                default:
                    return { theme: "light" }
            }
        })
    }
    handleTheme = (event) => {
        this.setState({
            theme: event.target.value
        })
    }
    /*    handleTheme = () => {
           this.setState(theme => {
               switch (true) {
                   case (theme === 'light'):
                       return { theme: "light" }
                   case (theme === 'dark'):
                       return { theme: "dark" }
                   case (theme === 'blue'):
                       return { theme: "blue" }
                   case (theme === "gold"):
                       return { theme: "gold" }
                   default:
                       return { theme: "light"}
               }
           })
       } */
    render() {
        return (
            <Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme, handleTheme: this.handleTheme }}>
                {this.props.children}
            </Provider>
        )
    }

}
export { ThemeContextProvider, Consumer as ThemeContextConsumer }
