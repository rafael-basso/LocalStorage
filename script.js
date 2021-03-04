const inpKey = document.querySelector('#inputKey')
const inpValue = document.querySelector('#inputValue')
const btnInsert = document.querySelector('#btnInsert')
const btnDelete = document.querySelector('#btnDelete')
const isOutput = document.querySelector('#isOutput')
const deleteKey = document.querySelector('#deleteKey')

btnInsert.addEventListener('click', () => {
    const key = inpKey.value
    const value = inpValue.value
    
    //console.log(key, value)    
    
    if (key && value) {
    // Check if values in LocalStorage exist
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == key) {
            alert('Name already taken!')
            return
        }
    }
        localStorage.setItem(key, value)
        location.reload() // refresh the page
    }
})

btnDelete.addEventListener('click', () => {
    for (let i = 0; i < localStorage.length; i++){
        if (deleteKey.value == localStorage.key(i)) {
            localStorage.removeItem(deleteKey.value)
            location.reload()
        }
        // else {
        //     alert('Please, enter a valid key')
        //     return
        // }    
    }        
})

// Print Output
for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    
    isOutput.innerHTML += `${key}: ${value}<br>`
}
