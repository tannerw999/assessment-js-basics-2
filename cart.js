///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc + curr));


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
calcFinalPrice(cartTotal, couponValue, tax) => { 
    cart.cartTotal = cart.tax * (1 - couponValue);
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    name: Name is an important identifier for the restaurant to know.
       Datatype: Will be a string since it will contain only letters.

    address: Since this is a cart im assuming it will be delivered or picked up.  Also need address if paying with CC to verify card info.
        Datatype: Will also be a string since address may contain letters and numbers.

    returning customer: Good information for the restaurant to know to see how many new vs. repeat customers they have.
        Datatype: Boolean since it's a yes or no question and can be determined by true or false.

    payment type: Type of payment being used; cash or credit card
        Datatype: Will be a string because it will be only letters.

    credit card number: Payment number if paying with credit card.
        Datatype: Number since credit card # contain only numbers.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = [
    {
        name: "Tanner",
        address: "1483 South 320 East Orem, UT",
        returning: "Yes",
        paymentType: "Credit Card",
        creditCardNumber: 0000111122223333,
    }
]