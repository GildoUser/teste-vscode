const customers = [{
    id: 1,
    nome:"Gildo",
    idade: 22,
    uf: "SP"
}]

function updateCustomer(id, customerData){
    const customer = customers.find(c=>c.id===id)
    if(!customer) return;
    customer.nome = customerData.nome
    customer.idade = customerData.idade
    customer.uf  = customerData.idade
}

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

function deleteCustomer(id){
    const index = customers.findIndex(c=>c.id===id)
    if(id > customers.length){
        return "This user do not exist!"
    }
    customers.splice(index,1);
}

module.exports= {
    findCustomers,
    findCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
}