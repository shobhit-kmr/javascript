const accountId = 1112223
let accountEmail = "raj@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"

console.log(accountId)

// accountId = 2 // not allowed



accountEmail = "boby@gmail.com"
accountPassword = "54321"
accountCity = "Agra"

/*prefer not use var
because of issue in block scope and funtional scope
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity])