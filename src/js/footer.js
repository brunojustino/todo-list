import { ce, cec } from './domHelpers'

let div = cec("div", "footer")

let p1 = ce('p')
p1.textContent = "This site was made as a part of The Odin Project Course"

let p2 = ce('p')
p2.innerHTML = `Made By <span class="underline--magical">Bruno Justino</span>. No Rights Reserved`

div.appendChild(p1)
div.appendChild(p2)

export const footer = () => {
    return div
}