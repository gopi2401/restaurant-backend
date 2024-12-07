const db = require('../config/db.config');

const getAllMenu = async () => {
    const [rows] = await db.query('SELECT * FROM menus');
    return rows;
};

const getMenuById = async (id) => {
    const [rows] = await db.query('SELECT * FROM menus WHERE id = ?', [id]);
    return rows[0];
};

const createMenu = async (menuData) => {
    const { name, price, pic_url } = menuData;
    const [result] = await db.query(
        'INSERT INTO menus (name, price, pic_url) VALUES (?, ?, ?)',
        [name, price, pic_url]
    );
    return result.insertId;
};

const updateMenu = async (id, menuData) => {
    const { name, price, pic_url } = menuData;
    const [result] = await db.query(
        'UPDATE menus SET name = ?, price = ?, pic_url = ? WHERE id = ?',
        [name, price, pic_url, id]
    );
    return result.affectedRows;
};

const deleteMenu = async (id) => {
    const [result] = await db.query('DELETE FROM menus WHERE id = ?', [id]);
    return result.affectedRows;
};

module.exports = {
    getAllMenu,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu,
};