function lemonadeChange(bills: number[]): boolean {
    let fiveCount: number = 0;
    let tenCount: number = 0;

    for (let i: number = 0; i < bills.length; i++) {
        let bill = bills[i];
        if (bill === 5) {
            fiveCount += 1;
        } else if (bill === 10) {
            if (fiveCount > 0) {
                fiveCount -= 1;
                tenCount += 1;
            } else {
                return false;
            }
        } else {
            if (tenCount > 0 && fiveCount > 0) {
                tenCount -= 1;
                fiveCount -= 1;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};