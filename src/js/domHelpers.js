export const ce = (e) => {
    return document.createElement(e)
}

export const cec = (e, name) => {
    let r = document.createElement(e)
    r.className = name
    return r
}

// export const createLink = (name) => {
//     let li = ce("li")
//     li.className = "hvr-glow"
//     let a = ce("a")
//     a.id = name
//     a.className = "links link glow"
//     a.textContent = name
//     li.appendChild(a)
//     return li
// }