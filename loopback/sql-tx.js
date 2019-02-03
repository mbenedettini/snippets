/* Begin transaction, commit, rollback */

const sqlTx = await CashboxTransfer.beginTransaction({
    isolationLevel: CashboxTransfer.Transaction.REPEATABLE_READ
});

const sqlTxOpts = {
    transaction: sqlTx
};

// commit
await Promise.promisify(sqlTx.commit, {context: sqlTx})();


// rollback
await Promise.promisify(sqlTx.rollback, {context: sqlTx})();
