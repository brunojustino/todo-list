import { ce, cec } from './domHelpers'

let div = cec('div', 'header')
let title = cec('h2', 'underline--magical')
title.textContent = "Just Do It"
div.appendChild(title)
let p = ce('p')
p.textContent = "Create your projects to-do lists and achieve your goals"
div.appendChild(p)

export const header = () => {
    return div
}