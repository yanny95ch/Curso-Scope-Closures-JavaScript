/*function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox : $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
*/ //--------------------No funciona-----Para ahorro 

function myMoneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const moneyBox = myMoneyBox();
moneyBox(5);
moneyBox(10);
moneyBox(15);

const moneyBoxAna =  myMoneyBox();
moneyBoxAna (15);
moneyBoxAna (5);
moneyBoxAna (10);