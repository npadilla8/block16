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

// Write 2 functions 
// 1- function for initial cost for refills w/out sub/coupon
// 2- function total cost of refills that include the subsciption > If -else stament 
// Same function will have else if statement that will include the coupon
// Within the if else function: If subscription AND coupon 


function totalCost (pricePerRefill, refills) {
    return pricePerRefill * refills;
}

const cost = totalCost (rocky.pricePerRefill, rocky.refills);



function costSubscription (cost, subscription, coupon) {
    if (subscription && coupon) {
        return cost * 0.75 - 10;
    } else if (subscription) {
        return cost * 0.75;
    } else if (coupon) {
        return cost - 10;
    } else {
        return cost;
    }
}
console.log(costSubscription (cost, rocky.subscription, rocky.coupon));


// Was able to input each value in consoloe log and const cost
// All results were correct (Current results are Rocky's) 
// To test - insrtead of Rocky's add the other names 