let one = document.getElementById('one');
let two = document.getElementById('two')
let btnCont = document.getElementById('btnCont')
let fEdit = document.forms['fEdit']
let btnCont2 = document.getElementById('btnCont2')
let fTable = document.forms['fTable']
let fList1 = document.forms['fList1']
let fList2 = document.forms['fList2']
let f1 = document.forms['f1']
let fValid = document.forms['fValid']
let myModal3 = document.getElementById('myModal3')


// функціі по створенню списків, таблиць
function table() {
    let countTr = fTable.countTr.value;
    let countTd = fTable.countTd.value;
    let widthTd = fTable.widthTd.value;
    let heightTd = fTable.heightTd.value;
    let widthBd = fTable.widthBd.value;
    let styleBd = fTable.styleBd.value;
    let colorBd = fTable.colorBd.value;
    fEdit.textArea.value += `<table style="border-collapse: collapse">`
    for (let i = 1; i <= countTr; i++) {
        fEdit.textArea.value += `<tr>`;
        for (let i = 1; i <= countTd; i++) {
            fEdit.textArea.value += `<td style= "width: ${widthTd}px; height: ${heightTd}px; border: ${widthBd}px ${styleBd} ${colorBd}">${i}</td>`

        }
        fEdit.textArea.value += `</tr>`;
    }
    fEdit.textArea.value += `</table>`;
}

function reset() {
    fTable.reset()
}

function listUl() {
    let countLiUl = fList1.countLiUl.value
    let typeMarkUl = fList1.typeMarkUl.value
    fEdit.textArea.value += `<ul type= ${typeMarkUl}>`;
    for (let i = 1; i < countLiUl; i++) {
        fEdit.textArea.value += `<li>${i}</li>`
    }
    fEdit.textArea.value += `</ul>`
}

function listOl() {
    let countLiOl = fList2.countLiOl.value
    let typeMarkOl = fList2.typeMarkOl.value
    fEdit.textArea.value += `<ol type= ${typeMarkOl}>`;
    for (let i = 1; i < countLiOl; i++) {
        fEdit.textArea.value += `<li>${i}</li>`
    }
    fEdit.textArea.value += `</ol>`
}


// функціі для редагування тексту в текстаріі та збереженні, відображенні змін
function tag() {
    one.style.display = 'none';
    btnCont.style.display = 'none';
    btnCont2.style.display = 'flex'
    two.style.display = 'block';
    fEdit.textArea.value = one.innerHTML
}

function save() {
    one.style.display = 'block';
    btnCont.style.display = 'flex';
    btnCont2.style.display = 'none'
    two.style.display = 'none';
    one.innerHTML = fEdit.textArea.value
}

// функції для нових стилів тексту, фону за допомогою кнопок меню редактора
function bold() {
    one.classList.toggle('bold')
}

function italic() {
    one.classList.toggle('italic')
}

function underline() {
    one.classList.toggle('underline')
}

function stressed() {
    one.classList.toggle('stressed')
}

function textLeft() {
    one.classList.add('textLeft')
    one.classList.remove('textCenter', 'textRight')
}

function textCenter() {
    one.classList.add('textCenter')
    one.classList.remove('textLeft', 'textRight')
}

function textRight() {
    one.classList.add('textRight')
}

let drop1 = document.getElementById('drop1');
for (let i = 0; i < drop1.children.length; i++) {
    drop1.children[i].style.fontFamily = drop1.children[i].innerHTML;
    drop1.children[i].onclick = function () {
        one.style.fontFamily = this.innerHTML
    }
}
let drop2 = document.getElementById('drop2');
for (let i = 0; i < drop2.children.length; i++) {
    drop2.children[i].style.fontSize = drop2.children[i].innerHTML;
    drop2.children[i].onclick = function () {
        one.style.fontSize = this.innerHTML
    }
}


let color = document.getElementById('modal-body');
for (let i = 0; i < color.children.length; i++) {
    color.children[i].onclick = function () {
        one.style.color = this.style.backgroundColor
    }
}

let bgColor = document.getElementById('modal-body2');
for (let i = 0; i < bgColor.children.length; i++) {
    bgColor.children[i].onclick = function () {
        one.style.background = this.style.backgroundColor
    }
}

let bgImage = document.getElementById('modal-body3');
for (let i = 0; i < bgImage.children.length; i++) {
    bgImage.children[i].onclick = function () {
        one.style.backgroundImage = this.style.backgroundImage
    }
}

// функція по додаванню та застосуванню фону вибраного файлу
$(".custom-file-input").on("change", function (event) {
    console.log(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));
    const urlImage = URL.createObjectURL(event.target.files[0])
    one.style.backgroundImage = `url(${urlImage})`
});

// функція по валідації користувача, приймає admin admin
fValid.signIn.onclick = function () {
    if (fValid.uname.value == 'admin' || fValid.pswd.value == 'admin') {
        $(myModal3).modal('hide')
    } else {
        $(myModal3).modal('show')
    }
    fValid.reset()
}