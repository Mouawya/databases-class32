const transferMoney = `UPDATE account 
                        SET balance = balance - 1000 
                        WHERE account_number = 101`;

const transferMoney2 = `UPDATE account
                        SET balance = balance + 1000
                        WHERE account_number = 102`;

const insertTransfer = `INSERT INTO account_change VALUES
                        (28, 101, 1000, '2021-08-07', 'transferred to account 102'), 
                        (28, 102, 1000, '2021-08-07', 'received from account 101')`;

module.exports = { transferMoney, transferMoney2, insertTransfer };
