import { ce, cec } from './domHelpers'

let div = ""
let divProjects = cec("div", "projects")
// let projectsTitle = cec("h3","projectTitle")
// projectsTitle.innerHTML = `Your Projects <span><i style="color: green" class="far fa-plus-square"></i></span>`
// let ul = ce("ul")
let divApp = cec("div", "mainApp")

divProjects.innerHTML = `
<h3 class="projectTitle">Your Projects <span><i style="color: green" class="far fa-plus-square"></i></span></h3>

    <ul>
        <li >Project 1
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 2
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 3
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 4
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 5
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 6
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 7
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
    </ul>
`

divApp.innerHTML = `
<div class="mainApp">
<h2>Project 1 <span><i style="color: green" class="far fa-plus-square"></i></span></h2>
<div class="items">
    <ol class="itemsGeneral">
        <li class="itemsOptions"><span class="task complete">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li class="itemsOptions"><span class="task">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li class="itemsOptions"><span class="task">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li class="itemsOptions"><span class="task">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>

    </ol>
</div>
</div>
`
export const project = () => {
    return divProjects

}
export const mainApp = () => {
    return divApp
}


/* <div class="projects">
<h3 class="projectTitle">Your Projects <span><i style="color: green" class="far fa-plus-square"></i></span></h3>

    <ul>
        <li >Project 1
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 2
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 3
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 4
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 5
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 6
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li>Project 7
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
    </ul>

</div>
<div class="mainApp">
<h2>Project 1 <span><i style="color: green" class="far fa-plus-square"></i></span></h2>
<div class="items">
    <ol class="itemsGeneral">
        <li class="itemsOptions"><span class="task complete">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li class="itemsOptions"><span class="task">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li class="itemsOptions"><span class="task">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>
        <li class="itemsOptions"><span class="task">correr com o cachorro</span>
            <span>Completed?<input type="checkbox" name="complete" id="cbComplete"></span>
            <span><i style="color: blue" class="fas fa-edit"></i></span>
            <span><i style="color: red" class="far fa-trash-alt"></i></span>
        </li>

    </ol>
</div>
</div> */