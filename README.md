# block16 - Discount Chain

Overview
You have been hired by a pharmaceutical startup as a junior developer. Things are busy and they need you to start right away. To encourage customer retention, they have been reworking their checkout system to include two different types of discounts.
Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

Directions
Copy and paste the following customer objects into a new index.js file.
 Starter Code
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
 

Using what we know about functions, pseudocode the prompt and a solution with your partner.
HINT: Despite this prompt being one large question, it can be broken down into three smaller prompts. Break your pseudocode into three smaller prompts.
Each of these small prompts should be addressed as an individual function.
Remember, a function should only do one task.
The returns of these functions should be stored in a variable, allowing other functions to use the result.

Assign someone to be the driver for the current function.

As you code, be sure to console.log or debug your solution.

When a solution has been found, be sure to test all three customer objects.

After the solution has been confirmed, move on to the next function and switch drivers.
Note: Each student is required to submit their own file with their solution to the workshop.

Expected Results:

Timmy => "Your grand total is $65"
Sarah => "Your grand total is $37.5."
Rocky => "Your grand total is $102.5"