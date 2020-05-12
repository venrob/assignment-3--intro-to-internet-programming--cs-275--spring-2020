let cells; //Holds all cell elements, initialized on load
window.onload = () => {
    cells = document.getElementsByTagName(`td`); //Store all cell elements
    for(let q = 0; q < cells.length; ++q)
    {
        cells[q].addEventListener(`click`, () => {
            updateCells(q);
        });
    }
};

function updateCells(index)
{
    for(let q = 0; q < cells.length; ++q)
    {
        if(q == index) //Clicked cell
        {
            if(cells[q].className === `active`) //Deactivate
                cells[q].className = ``;
            else cells[q].className = `active`; //Activate
        }
        else if(cells[q].className === `active`)
            cells[q].className = ``; //Deactivate all others
    }
}
