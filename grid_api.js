// get grid host
let grid_container = document.getElementById("display");

// Create grid element

let newPixel = (custom_id = "") => {
    let new_pixel = document.createElement("div");

    new_pixel.classList.add("neon-item");
    new_pixel.setAttribute("id", `${custom_id}`);

    return new_pixel;
};

// generate dynamic grid display
let newGrid = (rows = 3, cols = 3) => {
    let new_grid = document.createElement("div");

    new_grid.classList.add("neon-display");
    new_grid.setAttribute(
        "style",
        `grid-template-rows: repeat(${rows}, auto);`
    );
    new_grid.setAttribute(
        "style",
        `grid-template-columns: repeat(${cols}, auto);`
    );

    let total_children = rows * cols;
    let new_child;
    let row_ind = 1;
    let col_ind = 1;

    for (let i = 1; i <= total_children; i++) {
        col_ind = i % col_ind;

        if (i > col_ind) {
            col_ind = i % col_ind;
            row_ind += 1;
        }
        new_child = newPixel(`g${row_ind}${col_ind}`);

        new_child.addEventListener("click", (e) => {
            e.target.classList.toggle("lit");
        });
        new_child.addEventListener("dragenter", (e) => {
            e.target.classList.toggle("lit");
        });

        col_ind += 1;
        new_grid.appendChild(new_child);
    }

    return new_grid;
};

let addGrid = () => {
    // Delete Previous Grid
    while (grid_container.firstChild) {
        grid_container.firstChild.remove();
    }

    let row_len = document.getElementById("row-num").value;
    let col_len = document.getElementById("col-num").value;

    grid_container.appendChild(newGrid(parseInt(row_len), parseInt(col_len)));
};

// let lightEmUp = () => {
//     document.getElementById("g1").classList.toggle('lit');
//     document.getElementById("g2").classList.toggle('lit');
//     document.getElementById("g3").classList.toggle('lit');
//     document.getElementById("g4").classList.toggle('lit');
//     document.getElementById("g5").classList.toggle('lit');
// }

let reset = () => {
    // Delete Previous Grid
    while (grid_container.firstChild) {
        grid_container.firstChild.remove();
    }
};
