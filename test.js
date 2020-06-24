
function checkCard(str) {
    var win = new RegExp(/^[0-9]{4}$/)
    return win.test(str)
}

console.log(checkCard("37280"))