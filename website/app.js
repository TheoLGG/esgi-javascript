let rootDiv = document.getElementById("root");
let table = document.createElement('table');

for (let i = 0; i < 4; i++) {
    let tr = document.createElement("tr")
    for (let j = 0; j < 4; j++) {
        let td = document.createElement("td");
        let text =  document.createTextNode("lorem ipsum");
        td.appendChild(text);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
rootDiv.appendChild(table);

document.querySelectorAll('td').forEach(td => {
    td.addEventListener('click', function () {
        if(this.getElementsByTagName("input").length) return;
        let text = this.innerText;
        let input = document.createElement('input');
        input.value = text;
        this.removeChild(this.childNodes[0]);
        this.appendChild(input);

        input.focus();

        input.addEventListener('blur', function () {
            let text =this.value;
            let parentNode = this.parentNode;
            parentNode.removeChild(this);
            let textNode = document.createTextNode(text);
            parentNode.appendChild(textNode);
        });

    });
});