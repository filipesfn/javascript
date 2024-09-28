const contactForm = document.getElementById('contactForm');
const contactTable = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
let contacts = [];

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
    contactForm.reset();
});

function addContact() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    const contact = { nome, telefone, email };
    contacts.push(contact);
    renderContacts();
}

function renderContacts() {
    contactTable.innerHTML = '';
    contacts.forEach((contact, index) => {
        const row = contactTable.insertRow();
        row.insertCell(0).innerText = contact.nome;
        row.insertCell(1).innerText = contact.telefone;
        row.insertCell(2).innerText = contact.email;
        row.insertCell(3).innerHTML = `
            <button onclick="editContact(${index})">Editar</button>
            <button onclick="deleteContact(${index})">Excluir</button>
        `;
    });
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('nome').value = contact.name;
    document.getElementById('telefone').value = contact.phone;
    document.getElementById('email').value = contact.email;

    // Remover o contato original antes de adicionar o editado
    contacts.splice(index, 1);
    renderContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}
