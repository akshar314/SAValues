function itemAction(item, action) {
    // Delete item

    let itemId = item.getAttribute('id')
    let itemIndex = Number(itemId.split(/item/)[1])
    let valueObj = toDoItem.items[itemIndex]

    valueObj.value = {
        item,
        itemId,
        itemIndex,
        action: 'remove' 
    }
}

function toggleInputDisplay() {
    var inputElement = document.getElementsByClassName('input')[0]
    var displayElement = document.getElementsByClassName('display')[0]
    inputElement.classList.toggle('hideElement')

    // Move display to the right after hiding input div
    if(inputElement.classList.contains('hideElement')) {
        displayElement.classList.remove('displayLeft')
        displayElement.classList.add('displayRight')
    }
    // Move display to the left
    else {
        displayElement.classList.remove('displayRight')
        displayElement.classList.add('displayLeft')
    }
}

function detectEnter(event, textArea) {
    var code = (event.keyCode ? event.keyCode : event.which)
    if (code == 13) {
        // Creating new Value object
        toDoItem.item = new Value()

        // Getting the Value object 
        const currentItem = toDoItem.item

        // Calling the dependencies
        currentItem.value = textArea.textContent
        textArea.textContent = ''
    }
}