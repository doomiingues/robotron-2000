const control = document.querySelectorAll("[data-control]")
const statistics = document.querySelectorAll("[data-statistic]")
console.log(statistics)
const parts = {
    "arms": {
        "force": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },
    "armor": {
        "force": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores": {
        "force": 0,
        "power": 7,
        "energy": 48,
        "speed": -4
    },
    "legs": {
        "force": 27,
        "power": 21,
        "energy": -32,
        "speed": 43
    },
    "rockets": {
        "force": 0,
        "power": 28,
        "energy": 0,
        "speed": -7
    }
} 

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.control, event.target.parentNode)
        updateStatistics(event.target.dataset.part)
    })
} )

function manipulateData(operation, control) {
    const peco = control.querySelector("[data-counter]")
    if (operation === "-") {
        peco.value = parseInt(peco.value) - 1
    } else {    
        peco.value = parseInt(peco.value) + 1
    }
    while (parseInt(peco.value) < 0) {
        alert("Não pode haver peças com valor negativo, revise seus dados.")
        peco.value = "00"
    }
}

function updateStatistics(part) {
    
    statistics.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + parts[part] [element.dataset.statistic]
    }) 
}

