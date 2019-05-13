// Ex2 
let btn = document.getElementById('btn-delete');
let select = document.getElementById('demo-select');

btn.addEventListener('click', () => {
        console.dir(select);
    select.remove(select.selectedIndex);
        }); 