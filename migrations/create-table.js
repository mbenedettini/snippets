exports.up = function(db) {
    return db.createTable('operationtype', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        name: { type: 'string', notNull: true }
    });
};

exports.down = function(db) {
    return db.dropTable('operationtype');
};
