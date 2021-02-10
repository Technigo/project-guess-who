
let fruitsArray = [
    {
    name: 'pineapple',
    color: 'yellow',
    isRound: 'true'
    },

    {
        name: 'banana',
        color: 'yellow',
        isRound: 'false'
        }
    ]


const renderFruits = () => {
    fruitsArray.forEach(fruit => {
        fruitsBoard.innerhtml += "fruit.name"
    })
}

fruitsControl.addEventListener('change', () => {
    console.log(fruitsBoard);
});