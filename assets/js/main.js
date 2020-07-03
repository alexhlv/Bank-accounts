const MONOBNANK = 'monobank';
const PRIVATBANK = 'privat24';
const MEGABANK = 'megabank';
const PUMB = 'pumb'; 
const OSCHADBANK = 'oschadbank'; 
const AVAL = 'aval';

let MONOBNANK_BALANCE = 100;
let PRIVATBANK_BALANCE = 1000;
let MEGABANK_BALANCE = -1000;
let PUMB_BALANCE = 500; 
let OSCHADBANK_BALANCE = 120; 
let AVAL_BALANCE = 70;

let IS_MONOBNANK_ENABLED = true;
let IS_PRIVATBANK_ENABLED = true;
let IS_MEGABANK_ENABLED = true;
let IS_PUMB_ENABLED = true;
let IS_OSCHADBANK_ENABLED = true;
let IS_AVAL_ENABLED = true;

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

    if (bankName === PUMB) {
        return PUMB_BALANCE;
    }

    if (bankName === OSCHADBANK) {
        return OSCHADBANK_BALANCE;
    }

    if (bankName === AVAL) {
        return AVAL_BALANCE;
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

    if (bankName === PUMB) {
        PUMB_BALANCE -= money;
        
        return money;
    }

    if (bankName === OSCHADBANK) {
        OSCHADBANK_BALANCE -= money;
        
        return money;
    }

    if (bankName === AVAL) {
        AVAL_BALANCE -= money;
        
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

    if (bankName === PUMB) {
        PUMB_BALANCE += money;
        
        return PUMB_BALANCE;
    }

    if (bankName === OSCHADBANK) {
        OSCHADBANK_BALANCE += money;
        
        return OSCHADBANK_BALANCE;
    }

    if (bankName === AVAL) {
        AVAL_BALANCE += money;
        
        return AVAL_BALANCE;
    }
}

function chooseBank(expectedBankName) {
    const currentBank = confirm(`Ваш банк ${expectedBankName}?`);

    return currentBank;
}
// 1



// 2
function getBank() {
    if (IS_MONOBNANK_ENABLED) {
        const isMonobank = chooseBank(MONOBNANK); 
    
        if (isMonobank) {
            return MONOBNANK;
        }
    }
    
    if (IS_PRIVATBANK_ENABLED) {
        const isPrivatBank = chooseBank(PRIVATBANK); 
    
        if (isPrivatBank) {
            return PRIVATBANK;
        }
    }
    
    if (IS_MEGABANK_ENABLED) {
        const isMegabank = chooseBank(MEGABANK); 
    
        if (isMegabank) {
            return MEGABANK;
        }
    }
    
    if (IS_PUMB_ENABLED) {
        const isPumb = chooseBank(PUMB); 
    
        if (isPumb) {
            return PUMB;
        }
    }
    
    if (IS_OSCHADBANK_ENABLED) {
        const isOschadbank = chooseBank(OSCHADBANK); 
    
        if (isOschadbank) {
            return OSCHADBANK;
        }
    }
    
    if (IS_AVAL_ENABLED) {
        const isAval = chooseBank(AVAL); 
    
        if (isAval) {
            return AVAL;
        }
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

function deactivate() {
    switch(userBank) {
        case MONOBNANK: IS_MONOBNANK_ENABLED = false; break;
        case PRIVATBANK: IS_PRIVATBANK_ENABLED = false; break;
        case MEGABANK: IS_MEGABANK_ENABLED = false; break;
        case PUMB: IS_PUMB_ENABLED = false; break;
        case OSCHADBANK: IS_OSCHADBANK_ENABLED = false; break;
        case AVAL: IS_AVAL_ENABLED = false; break;
    }

    chooseBankAccount();
}

chooseBankAccount();