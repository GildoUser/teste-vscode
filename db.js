const customers = [{
    id: 1,
    nome:"Gildo",
    idade: 22,
    uf: "SP"
}]

function insertCustomer(customer){
    customers.push(customer)

}

function findCustomer(id){
    const customer = customers.find(c => c.id === id)
    return customer
}

function findCustomers(){
    return customers
}

module.exports= {
    findCustomers,
    findCustomer,
    insertCustomer,
}