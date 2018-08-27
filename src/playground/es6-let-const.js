var nameVar = 'Nicole'
var nameVar = 'Changed'

console.log({ nameVar })

let nameLet = 'Nicole'
// let nameLet = 'Changed' -> Throws error

console.log({ nameLet })

const nameConst = 'Nicole'

console.log({ nameConst })

{
  let petName = 'Pet Name'
}

var fullName = 'Nicole Sattler'

if (fullName) {
  const firstName = fullName.split(' ')[0]
  console.log({ firstName })
}
