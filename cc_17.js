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
const cusotmer1 = new Customer("Lena", "Lena23@gmail.com")
console.log(cusotmer1);

//adding a purchase of $150.00
console.log(cusotmer1.addPurchase(150));
//adding a purchase of $785.00
console.log(cusotmer1.addPurchase(785))
//adding a purchase of $412.00
console.log(cusotmer1.addPurchase(412));
//Total
console.log(cusotmer1.getTotalSpending());