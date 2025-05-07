const Role = require('../model/role.schema.js');

const getAll = (req, res, next) => {
    let result = Role.findAll();
    res.status(200).json(result);
}


const getById = async (req, res, next) => {
    let result = await Role.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(result);
}

const create = async (req, res, next) => {
    try {
        let result = await Role.create({
            name: req.body.name
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const update = (req, res, next) => {
    let result = Role.updateOne(req.body, { id: req.params.id });
    res.status(201).json(result);
}

const remove = (req, res, next) => {
    let result = Role.remove(req.params.id);
    res.status(200).json(result);
}

module.exports = { getAll, create, getById, update, remove };