let stocks = {
    fruits : ["strawberry", "grapes", "banana","apple"],
    liquid : ["water", "ice"],
    holder : ["cone","cup", "stick"], 
    toppings : ["chocolate", "peanuts"],
}

//Assynchronissity with callbacks and callback hell

/*
let order = (fruit_name, call_production) => {
   setTimeout(() => {
       console.log(`${stocks.fruits[fruit_name]} was selected`)
       call_production();// This function will only be called if a fruit is selected
   }, 2000)
   
}

////////////////////////////////////////////////////////////////////////////////////////
//CALLBACK HELL!!!!!
let production = () => {

    setTimeout(() => {
        console.log('Production has started');

        setTimeout(() => {
            console.log('The fruit has been chopped');

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log('The machine has been started')

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`)

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {console.log("Ice cream has been served")
                           },1000)
                        },1000)
                    }, 2000)
                }, 2000)
            }, 1000)
        }, 2000)
    }, 0000)
};

order(3, production); 



///////////////////////////////////////////////////////////////////////////////////////

//MAKING ICE CREAM WITH CALLBACKS
let is_shop_open = false;

let order = (time,work) => {
    //Notice how a promise is returned
       return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time)
        } else {
            reject(console.log("our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.fruits[0]}`))

.then(()=>{
    return order(0000, () => console.log("production has started"));
})
.then(()=>{
    return order(2000, () => console.log("The fruit has been chopped"))
})
.then(()=>{
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`))
})
.then(()=>{
    return order(1000, () =>console.log("The machine has been started") )
})
.then(()=>{
    return order(2000, () =>console.log(`The ${stocks.holder[1]} has been selected as a container`))
})
.then(()=>{
    return order(1000, () =>console.log(`The ${stocks.toppings[1]} has been selected`))
})
.then(()=>{
    return order(1000, () =>console.log(`The ice cream has been served`))
})

.catch(() => {
    console.log("day ended shop is closed")
})

.finally(() => {
    console.log('We are now closed');
})


////////////////////////////////////////////////////////////////////////////////////////
//UNDERSTANDING ASYNC AWAIT

let is_shop_open = false;

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Which topping would you like?"))
        }, 3000)
    })
}

async function kitchen () {
    console.log("A")
    console.log("B")
    console.log("C")
await toppings_choice()
    console.log("D")
    console.log("E")
}

kitchen();
console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking others orders")

*/
let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve,ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}


async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]}`)

        await time(2000);
        console.log("production has started")

        await time(2000);
        console.log("The fruit has been chopped")

        await time(2000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added)

        await time(2000`);
        console.log("The machine has been started")

        await time(2000);
        console.log(`The ${stocks.holder[1]} has been selected as a container`)

        await time(2000);
        console.log(`The ${stocks.toppings[1]} has been selected`)

        await time(2000);
        console.log(`The ice cream has been served`)

    }
    catch (error) {
        console.log("Customer left", error)
    }
    finally {
        console.log("day ended, shop is closed")
    }
}


kitchen();