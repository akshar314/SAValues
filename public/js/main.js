function itemAction(item) {
    // Delete item
    toDoItem.item = {
        item,
        action: "remove"
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
        toDoItem.item = textArea.textContent
        textArea.textContent = ''
    }
}