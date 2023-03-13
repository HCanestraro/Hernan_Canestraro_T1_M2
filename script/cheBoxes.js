var arrCategory = [];
var arrA = [];
arrCategory.push(data.events[0].category.toLowerCase());
var arr3 = [];
var checkBoxActivos = [];
var cactivos = [];

function cheBoxes() {
    // a=document.getElementById('homeCards');
    for(let i=0;i<=data.events.length-1;i++) {
        arrA.push(data.events[i].name.toLowerCase());
        arrA.push(data.events[i].description.toLowerCase());
        category1=data.events[i].category.toLowerCase();
        if (arrCategory.indexOf(category1)===-1) {
            arrCategory.push(category1);
        }
    } 

    for(let i=0;i<=arrCategory.length-1;i++) {
        document.open();
        document.write(`<label><input type="checkbox" id="category${i}" name="category">${arrCategory[i]}<span>  </span></label>`);
        document.close();
    }
}

function checkActivated() {
    arr3=document.querySelectorAll("input[type=checkbox]");
    newarr3 = Object.entries(arr3).map(i => i[i]);
    console.log("CHECKACTIVATED LEN ARR3:",arr3.length);
    d=0;
    for(const property in arr3) {
        console.log("property:",property);
        console.log(`ARR3[${d}]:`,arr3[d].labels[0].form[0].nextSibling.data);
       d++;
    }
    console.log("arr3",arr3);
    console.log("arr3.innertext",arr3.innertext);
}

//function chActivo() {
//    console.log("CHACTIVO");
//    for (let q=0;q<arr3.length;q++) {
//        console.log("Nro:",q," is checked: ",arr3[q].checked);/* [6].checked */
        /* console.log("Nombre: ",arr3[q].ownerDocument.activeElement.labels[0].ownerDocument.activeElement.ownerDocument.activeElement.ownerDocument.activeElement.labels[0].innerText); */
//        console.log("Nombre: ",arr3[q].ownerDocument.activeElement.labels[q].ownerDocument.activeElement.ownerDocument.activeElement.ownerDocument.activeElement.labels[q].innerText);
//        checkBoxActivos.push(arr3[q].ownerDocument.activeElement.labels[q].ownerDocument.activeElement.ownerDocument.activeElement.ownerDocument.activeElement.labels[q].innerText);        
//    }
//    console.log("checkboxactivos:",checkBoxActivos.length);
//    ca= document.querySelector("category");
//    console.log(ca);
//}

function chActivo() {
    for (let q=0;q<arr3.length;q++) {
                console.log("Nro:",q," is checked: ",arr3[q].checked);/* [6].checked */
                /* console.log("Nombre: ",arr3[q].ownerDocument.activeElement.labels[0].ownerDocument.activeElement.ownerDocument.activeElement.ownerDocument.activeElement.labels[0].innerText); */
                console.log("Nombre: ",arr3[q].ownerDocument.activeElement.labels[q].ownerDocument.activeElement.ownerDocument.activeElement.ownerDocument.activeElement.labels[q].innerText);
                checkBoxActivos.push(arr3[q].ownerDocument.activeElement.labels[q].ownerDocument.activeElement.ownerDocument.activeElement.ownerDocument.activeElement.labels[q].innerText);        
            }
            console.log("checkboxactivos:",checkBoxActivos.length);
            ca= document.querySelector("category");
            console.log(ca);
}
chActivo();

function chche() {
 console.log("CHCHE");
    const list = document.querySelectorAll("input[type=checkbox]");
    let a=0;
    for (let checkbox of list) {
        console.log(a," - ",arrCategory[a]);
        if (checkbox.checked == true) {
            console.log("true");
            cactivos.push(arrCategory[a]);
        } else {
            console.log("false");
        }
        a++;
    }
}