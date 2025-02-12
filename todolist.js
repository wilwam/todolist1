function submitFunction() {
    let input = document.getElementById("text").value;

    if (input ===''){
        alert('Masukan Tugas')
        return;
    }
    
    let ttugas = document.createElement('p')
    ttugas.innerText = input;
    ttugas.classList.add('tesi')

    let hpsbtn = document.createElement('button')
    hpsbtn.innerHTML = '<i class="fas fa-trash"></i>';
    let donebtn = document.createElement('button')
    donebtn.innerHTML = '<i class="fas fa-check"></i>';

    let itemWrapper = document.createElement("div");  
    itemWrapper.classList.add("item");
   



    itemWrapper.appendChild(ttugas)
    itemWrapper.appendChild(donebtn)
    itemWrapper.appendChild(hpsbtn)
  
    document.getElementById("container").appendChild(itemWrapper);

   

    donebtn.addEventListener('click', function (){
        ttugas.style.textDecoration = 'line-through';
        alert('Tugas Selesai')
    })
    
    hpsbtn.addEventListener('click', function (){
        itemWrapper.remove()
        alert('Tugas Di Hapus')
    })
}

