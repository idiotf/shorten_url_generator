import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.createElement('div')
root.id = 'root'
createRoot(document.body.appendChild(root)).render(<App />)
