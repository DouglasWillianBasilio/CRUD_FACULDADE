'use strict'

const openModal = () => document.getElementById('modal')
    .classList.remove('active')
const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "jao",
    email: "douglasbso12@gmail.com",
    celular: "43 99999-9999",
    cidade: "Londrina"
}


//CRUD
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    db_client.push (client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}

//EVENTOS
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)