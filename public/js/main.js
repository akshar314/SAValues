function itemAction(item, action) {
    let itemIndex = Number(item.getAttribute('id').split(/item/)[1])
    let valueObj = toDoItem.items[itemIndex]

    // Set value along with the action
    valueObj.value = {
        item,
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
        var valueObj = new Value()
        toDoItem.item = valueObj

        // Calling the dependencies
        valueObj.value = textArea.textContent
        textArea.textContent = ''
    }
}