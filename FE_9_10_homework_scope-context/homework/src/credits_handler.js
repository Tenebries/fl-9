let currentDate = new Date();
let dateTime = currentDate.getDate() + '/'
    + (currentDate.getMonth() + 1) + '/'
    + currentDate.getFullYear() + ', '
    + currentDate.getHours() + ':'
    + currentDate.getMinutes() + ':'
    + currentDate.getSeconds();

function userCard (index) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        tax = 0.5;

    return {
        getCardOptions: function () {
            return {balance, transactionLimit, historyLogs, key: index};
        },

        putCredits: function (amount) {
            if (amount < 1) {
                console.log(`Amount can't be less then 1$!`);
            } else {
                balance += amount;
                historyLogs.push({operationType: `Received credits`, credits: amount, operationTime: dateTime});
            }
        },

        takeCredits: function (amount) {
            if (amount < 1) {
                console.log(`Amount can't be less then 1$!`);
            } else if (transactionLimit < amount || balance < amount) {
                console.log(`You can't handle this!`);
            } else {
                balance -= amount;
                historyLogs.push({operationType: `Withdrawal credits`, credits: amount, operationTime: dateTime});
            }
        },

        setTransactionLimit: function (amount) {
            if (amount < 1) {
                console.log(`Amount can't be less then 1$!`)
            } else {
                transactionLimit = amount;
                historyLogs.push({operationType: `Transaction limit change`, credits: amount, operationTime: dateTime});
            }
        },

        transferCredits: function (amount, card) {
            let HUNDRED = 100;
            let amountWithTax = amount + tax / HUNDRED;

            if (balance < amountWithTax) {
                console.log(`You don't have so much on the card.`);
            } else if (transactionLimit < amount) {
                console.log(`Limit exceeded`);
            } else {
                this.takeCredits(amountWithTax);
                card.putCredits(amount);
            }
        }
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.MAX_CARDS = 3;
    }

    addCard() {
        if (this.cards.length < this.MAX_CARDS) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log(`You can't create more cards.`);
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
