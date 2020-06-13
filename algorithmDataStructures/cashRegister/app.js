function checkCashRegister(price, cash, cid) {
    let returnVal = { status: "empty", change: [] };
    // console.log(cid);
    // console.log(cid[0][1]);
    
    let chngDue = cash - price;
    console.log(chngDue);

    let subTotal = [
        cid[0][1],
        cid[1][1],
        cid[2][1],
        cid[3][1],
        cid[4][1],
        cid[5][1],
        cid[6][1],
        cid[7][1],
        cid[8][1]
    ]
    let drawerTotal = subTotal.reduce((a, b) => a + b, 0);
    drawerTotal = drawerTotal.toFixed(2);
    console.log(drawerTotal);

    
    if (drawerTotal < chngDue) {
        returnVal.status = "INSUFFICIENT_FUNDS";
        return returnVal;
    }

    // let afterChng = chngDue - cid[8][1] - cid[7][1] - cid[6][1] - cid[5][1] - cid[4][1] - cid[3][1] - cid[2][1] - cid[1][1] - cid[0][1];
    let afterChng = chngDue;
    for (let i = 0; i < cid.length; i++) {
        console.log(afterChng);
        afterChng =- cid[i][1];
        console.log(afterChng);
    }
    console.log(afterChng);

    if (afterChng < 0 ) {
        returnVal.status = "INSUFFICIENT_FUNDS";
        return returnVal;
    }


    var change;
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  