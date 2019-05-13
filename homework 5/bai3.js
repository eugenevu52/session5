 // Ex3
let btn = document.getElementById('btn-demo');
let table = document.getElementById('table-demo');
btn.addEventListener('click', () => {
    console.dir(table);
    let rowNumber = prompt('Enter row number');
    let columnNumber = prompt('Enter column number');
    let content = prompt('Enter content');
    table.rows[`${rowNumber}`].cells[`${columnNumber}`].innerHTML = `${content}`;
    return newTable += table.value;
})    
