document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-fild');
    const newDepositValueString = depositFild.value;
    const newDepositValue = parseFloat(newDepositValueString);
    if(isNaN(newDepositValue)){
        alert('Please enter a valid number');
        return;
      }
    const depositText = document.getElementById('deposit-text');
    const previousDepositValueString = depositText.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    const currentDepositValue = previousDepositValue + newDepositValue;
    depositText.innerText = currentDepositValue;

    const balanceTotalEliment = document.getElementById('balance-text');
    const balanceTotalString = balanceTotalEliment.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const TotalBalance = balanceTotal + newDepositValue;
    balanceTotalEliment.innerText= TotalBalance;
    depositFild.value = '';
})