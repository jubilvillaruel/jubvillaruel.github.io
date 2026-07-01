import React from 'react'
import { createRoot } from 'react-dom/client'
import AppV2 from './AppV2'
import v2Css from './style.css?inline'

const style = document.createElement('style')
style.dataset.portfolioVersion = 'official'
style.textContent = v2Css
document.head.append(style)

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <AppV2 />
  </React.StrictMode>,
)
