document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawFild = document.getElementById("withdraw-fild");
  const newWithdrawValueString = withdrawFild.value;
  const newWithdrawValue = parseFloat(newWithdrawValueString);
  if(isNaN(newWithdrawValue)){
    alert('Please enter a valid number');
    return;
  }
  const withdrawText = document.getElementById("withdraw-text");
  const previousWithdrawValueString = withdrawText.innerText;
  const previouswithdrawValue = parseFloat(previousWithdrawValueString);

  

  const balanceTotalEliment = document.getElementById("balance-text");
  const balanceTotalString = balanceTotalEliment.innerText;
  const balanceTotal = parseFloat(balanceTotalString);
  withdrawFild.value = "";
  if (newWithdrawValue > balanceTotal) {
    alert("Insuficient funds");
    return;
  }

  const currentWithdrawValue = previouswithdrawValue + newWithdrawValue;
  withdrawText.innerText = currentWithdrawValue;
  
  const TotalBalance = balanceTotal - newWithdrawValue;
  balanceTotalEliment.innerText = TotalBalance;
});
