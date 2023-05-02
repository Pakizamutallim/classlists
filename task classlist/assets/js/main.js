// const p = document.querySelector("p.text-danger");
// function changeClass() {
//     // p.classList.toggle("text-danger");
//     document.body.classList.toggle("light");
//     document.body.classList.toggle("dark");
// }


function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
function createStudent(){
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    const tbody = document.querySelector("tbody");
    // let objectPerson = {
    //     index: "s/s",
    //     name: "ad", 
    //     surname: "soyad"
    // } 
    const array = [nameInp, surnameInp]  

    console.log("array");

    array[nameInp, surnameInp] += `<tr><td>1</td><td>${array.nameInp}</td><td>${array.surnameInp}</td><td><p class="m-0" ind="">x</p></td></tr>`;
    nameInp.value = ''; 
    surnameInp.value = '';
    closeModal();
}







// let objectPerson = {
//     index: "1",
//     name: "ad", 
//     surname: "soyad"
// }; 
// function Student (index, ad, soyad) {
//     this.index = index
//     this.name = ad, 
//     this.surname = soyad
// }

// let adam = new Student ("1", "aga", "aliyev"); 


// console.log(adam); 
// console.log(objectPerson)
