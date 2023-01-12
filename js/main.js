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
        "speed": -24
    },
    "legs": {
        "force": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets": {
        "force": 0,
        "power": 28,
        "energy": 0,
        "speed": -3
    }
} 

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.control, event.target.parentNode)
        updateStatistics(event.target.dataset.part, event.target.dataset.control)
    })
} )

function manipulateData(operation, control) {
    const unit = control.querySelector("[data-counter]")
    if (operation === "-") {
        unit.value = parseInt(unit.value) - 1
    } else {    
        unit.value = parseInt(unit.value) + 1
    }
}

function updateStatistics(part, operation) {
    if (operation === "+") {
        statistics.forEach( (element) => {
            element.textContent = parseInt(element.textContent) + parts[part] [element.dataset.statistic]
        }) 
    } else {
        statistics.forEach( (element) => {
            element.textContent = parseInt(element.textContent) - parts[part] [element.dataset.statistic]
        }) 
    }
}

