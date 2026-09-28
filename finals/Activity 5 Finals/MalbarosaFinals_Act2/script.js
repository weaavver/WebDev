const message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const Button2 = document.getElementById("loadBtn2")

const grade = document.getElementById("grade");
const schedule = document.getElementById("schdule");
const card = document.getElementById("card");


function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Loading")
        },2000)
    })
}


Button.addEventListener("click",function(){
    message.innerHTML = "Loading..." 
    message.style.color = "red"
    showMessage()

    .then(function(result){
        message.innerHTML = result //PRINTS "Checking Account..."
        message.style.color = "blue"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Profile...")
            }, 1000)
        })
    })
    .then(function(result){
        message.innerHTML = result //PRINTS "Loading Profile..."
        message.style.color = "green"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Assets")
            }, 2000)
        })
        
    })
    .then(function(result){
        message.innerHTML = result //PRINTS "Loading Profile..."
        message.style.color = "cyan"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Images")
            }, 3000)
        })
        
    })
    .then(function(result){
        message.innerHTML = result //PRINTS "Loading Profile..."
        message.style.color = "pink"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Done Loading")
            }, 3000)
        })
        
    })

    .then(function(result){
        setTimeout(function(){
            message.innerHTML = result
        }, 3000)
    })
})

function showMessage(text){
    message.innerHTML = text
}

function showMessage(text){
    message.innerHTML = text
}
Button2.addEventListener("click", function(){
    Button.style.backgroundColor = "blue"
    Button2.style.backgroundColor = "red"

    grade.innerHTML = "Grade: Done"
    schdule.innerHTML = "Schedule: Dpne"
    card.innerHTML = "Card: Done"


    
})

Button2.addEventListener("click",function(){
    showMessage()

    .then(function(result){
        grade.innerHTML = result //PRINTS "Checking Account..."

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Grade: Done")
            }, 1000)
        })
    })
    .then(function(result){
        schedule.innerHTML = result //PRINTS "Loading Profile..."

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Schedule: Done")
            }, 2000)
        })
        
    })
    .then(function(result){
        card.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Card: Done")
            }, 2000)
        })
        
    })
    .then(function(result){
        setTimeout(function(){
            message.innerHTML = result
        }, 2000)
    })
})




