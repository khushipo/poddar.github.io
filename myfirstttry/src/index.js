import React from "react"
import { BrowserRouter } from "react-router-dom"

import App from "./jsx/App"
import ReactDom from "react-dom"
ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))
