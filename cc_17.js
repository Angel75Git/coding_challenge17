//Task 1
//Creating Customer Class
class Customer {
    constructor(name, email) {
        this.name = name,
        this.email = email,
        this.purchaseHistory = []
    }
    //Adding purchases made
    addPurchase(amount){
        //Pushing new amounts to array purchaseHistory
        this.purchaseHistory.push(amount);
        return `Purchase added $${amount.toFixed(2)}`

    }
    //Total amount function
    getTotalSpending(){
        //Reduce array to a single amount
        const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        return `Total $${totalSpent.toFixed(2)}`
    }
}
//Logging new customer
const customer1 = new Customer("Lena", "Lena23@gmail.com")
console.log(customer1);

//adding a purchase of $150.00
console.log(customer1.addPurchase(150));
//adding a purchase of $785.00
console.log(customer1.addPurchase(785))
//adding a purchase of $412.00
console.log(customer1.addPurchase(412));
//Total
console.log(customer1.getTotalSpending());

//Task 2
//Sales Rep Class
class SalesRep {
    constructor(name) {
        this.name = name,
        this.clients = []
    }
    addClient(customer){
        //adding customer to list
        this.clients.push(customer)
    }
    //adding for loop to find customer
    getClientTotal(name){
        for (let i = 0; i < this.clients.length; i++){
            const client = this.clients[i];
            //Checking if client is in client array
            if (client.name === name){
                return `${client.name} has spent ${client.getTotalSpending()}`
            }
        return `Customer not found`    
        }
    }
}
//creating new sales representatives Bella 
const salesPerson1 = new SalesRep("Bella")
salesPerson1.addClient(customer1)
console.log(salesPerson1.clients);

//Looking up what Lena has spent
console.log(salesPerson1.getClientTotal("Lena"));

//Example of error message
console.log(salesPerson1.getClientTotal("Bob"));
