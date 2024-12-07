const db = require('../config/db.config');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM user');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [id]);
    return rows[0];
};

const findUser = async (phone) => {
    const [rows] = await db.query('SELECT * FROM user WHERE phone = ?', [phone]);
    return rows[0];
};
const createUser = async (userData) => {
    const { phone, password } = userData;
    const [result] = await db.query(
        'INSERT INTO user (phone, password) VALUES (?, ?)',
        [phone, password]
    );
    return result.insertId;
};

const updateUser = async (id, userData) => {
    const { phone, password } = userData;
    const [result] = await db.query(
        'UPDATE user SET phone = ?, password = ? WHERE id = ?',
        [phone, password, id]
    );
    return result.affectedRows;
};

const deleteUser = async (id) => {
    const [result] = await db.query('DELETE FROM user WHERE id = ?', [id]);
    return result.affectedRows;
};

module.exports = {
    getAllUsers,
    getUserById,
    findUser,
    createUser,
    updateUser,
    deleteUser,
};