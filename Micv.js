document.getElementById('btn1').addEventListener('click', function() {
    var lista = document.getElementById('lista1');
    lista.style.display = lista.style.display == 'none' ? 'block' : 'none';
});

document.getElementById('btn2').addEventListener('click', function() {
    var lista = document.getElementById('lista2');
    lista.style.display = lista.style.display == 'none' ? 'block' : 'none';
});

document.getElementById('btn3').addEventListener('click', function() {
    var lista = document.getElementById('lista3');
    lista.style.display = lista.style.display == 'none' ? 'block' : 'none';
});

function toggleContactInfo() {
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
}
