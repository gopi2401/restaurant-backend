const Menu = require('../model/menu.model');

const menuCreate = async (req, res) => {
    try {
        const data = await Menu.createMenu(req.body);
        res.status(200).json({ message: "Menu created successfully", data });
    } catch (e) {
        res.status(500).json(
            { message: "internal server error" + e.message }
        )
    }
};

const menuGetAll = async (req, res) => {
    try {
        let menus = await Menu.getAllMenu();
        res.status(200).json({ message: 'Menu get successfully', data: menus });
    } catch (e) {
        res.status(500).json(
            { message: "internal server error" + e.message }
        )
    }
};

const menuGetById = async (req, res) => {
    try {
        const data = await Menu.getMenuById(req.params.id);
        res.status(200).json({ message: 'Menu get successfully', data });
    } catch (e) {
        res.status(500).json(
            { message: "internal server error" + e.message }
        )
    }
};

const menuUpdateById = async (req, res) => {
    try {
        const data = await Menu.updateMenu(req.params.id, req.body);
        if (data) {
            res.status(201).json({ message: "Menu updated successfully" });
        }
    } catch (e) {
        res.status(500).json(
            { message: "internal server error" + e.message }
        )
    }
};

const menuDeleteById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Menu.deleteMenu(id);
        res.status(200).json({ message: "Menu deleted successfully", data });
    } catch (e) {
        res.status(500).json(
            { message: "internal server error" + e.message }
        )
    }
};

module.exports = { menuCreate, menuGetAll, menuGetById, menuUpdateById, menuDeleteById }