const calcBill = () => {
    const billInp = document.getElementById('billInput').value;
    console.log(billInp);
}

const key = () => {
    const inp = document.getElementById('tipInput').value;
    let convertDec = parseFloat(inp) / 100.0;
    console.log(convertDec);
}

const keyOne = () => {
    const inpOne = document.getElementById('numPersonInput').value;
    console.log(inpOne);
}

const reset = () => {
    document.getElementById('resetBtn').reset();
}

const selectAll = document.querySelectorAll('button');
    for(let button of selectAll){
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.add('hover:scale-110', 'hover:bg-[#26c0ab]');
            let btnVal = parseFloat(button.value) / 100.0;
            console.log(btnVal);
        })
    }







