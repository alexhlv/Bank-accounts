const MONOBNANK = 'monobank';
const PRIVATBANK = 'privat24';
const MEGABANK = 'megabank';

let MONOBNANK_BALANCE = 100;
let PRIVATBANK_BALANCE = 1000;
let MEGABANK_BALANCE = -1000;

let userBank = null;

function getBalance(bankName) {
    if (bankName === MONOBNANK) {
        return MONOBNANK_BALANCE;
    }

    if (bankName === PRIVATBANK) {
        return PRIVATBANK_BALANCE;
    }

    if (bankName === MEGABANK) {
        return MEGABANK_BALANCE;
    }
}

function getMoney(bankName, money) {
    if (bankName === MONOBNANK) {
        MONOBNANK_BALANCE -= money;

        return money;
    }

    if (bankName === PRIVATBANK) {
        PRIVATBANK_BALANCE -= money;
        
        return money;
    }

    if (bankName === MEGABANK) {
        MEGABANK_BALANCE -= money;
        
        return money;
    }
}

function addMoney(bankName, money) {
    if (bankName === MONOBNANK) {
        MONOBNANK_BALANCE += money;

        return MONOBNANK_BALANCE;
    }

    if (bankName === PRIVATBANK) {
        PRIVATBANK_BALANCE += money;
        
        return PRIVATBANK_BALANCE;
    }

    if (bankName === MEGABANK) {
        MEGABANK_BALANCE += money;
        
        return MEGABANK_BALANCE;
    }
}

function chooseBank(expectedBankName) {
    const currentBank = confirm(`Ваш банк ${expectedBankName}?`);

    return currentBank;
}

function getBank() {
    const isMonobank = chooseBank(MONOBNANK); 
    
    if (isMonobank) {
        return MONOBNANK;
    }

    const isPrivatBank = chooseBank(PRIVATBANK); 
    
    if (isPrivatBank) {
        return PRIVATBANK;
    }

    const isMegabank = chooseBank(MEGABANK); 
    
    if (isMegabank) {
        return MEGABANK;
    }

    return null;
}

function update() {
    const bankBalance = getBalance(userBank);

    bankName.innerText = userBank;
    currentBalance.innerText = `${bankBalance}$`;
}

function chooseBankAccount() {
    userBank = getBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function askToAddMoney() {
    const money = +prompt(`Сколько вы желаете внести на счет ${userBank}`);

    if (money) {
        const amount = addMoney(userBank, money);

        alert(`Теперь на счету банка ${userBank} – ${amount}$`);
        update();
    } else {
        alert('Неверное значение! Попробуйте еще раз!');
    }
}

function askToGetMoney() {
    const money = +prompt(`Сколько вы желаете cнять со счета ${userBank}`);
    const currentBalance = getBalance(userBank);;

    if (currentBalance >= money) {
        const amount = getMoney(userBank, money);

        alert(`Вы сняли ${amount}$ с банка – ${userBank}`);
        update();
    } else {
        alert('Недостаточно средств');
    }
}

chooseBankAccount();