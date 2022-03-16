let stocks = {
    fruits : ["strawberry", "grapes", "banana","apple"],
    liquid : ["water", "ice"],
    holder : ["cone","cup", "stick"], 
    toppings : ["chocolate", "peanuts"],
}



let order = (fruit_name, call_production) => {
   setTimeout(() => {
       console.log(`${stocks.fruits[fruit_name]} was selected`)
       call_production();// This function will only be called if a fruit is selected
   }, 2000)
   
}

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