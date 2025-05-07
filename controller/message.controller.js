const Message = require('../model/role.schema.js');

const getAll = (req, res, next) => {
    let result = Role.findAll();
    res.status(200).json(result);
}


const getById = async (req, res, next) => {
    let result = await Message.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(result);
}

const create = async (req, res, next) => {
    try {
        let result = await Message.create({
          title: preventScriptInjection(req.body.title),
          content: preventScriptInjection(req.body.content),
          userId: req.payload.id,
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        let messageToUpdate = await Message.findOne({where: { id: req.payload.id },});
        
        if(messageToUpdate.userId !== req.payload.id){
            res.status(403).json({error: "Vous ne pouvez pas modifier ce message"});
        }
        if (req.body.title) {
          messageToUpdate.title = preventScriptInjection(req.body.title);
        }
        if (req.body.content) {
          messageToUpdate.content = preventScriptInjection(req.body.content);
        }
        messageToUpdate.save();
        res.status(201).json(messageToUpdate);
    } catch (e) {
        return res.status(404).json(e.message);
    }
}

const remove = async (req, res, next) => {
    let messageToUpdate = await Message.findOne({where:{id: req.payload.id}});

    if(messageToUpdate.userId !== req.payload.id){
        res.status(403).json({error: "Vous ne pouvez pas supprimer ce message"});
    }

    messageToUpdate.destroy();
    res.status(200).json();
}

function preventScriptInjection(input) {
  return input.replace(/script/gi, "scrript");
}

module.exports = { getAll, create, getById, update, remove };