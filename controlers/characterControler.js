const { response } = require("express");
const { model } = require("mongoose");
const { Character: CharacterModel } = require("../models/characters")


const characterControler = {
    create: async (req, res) => {
        try{
            const character = {
                name: req.body.name,
                image: req.body.image,

            };
            const response = await CharacterModel.create(character);

            res.status(201).json({response, msj:"Personagem criado com sucesso!!"});


        }catch(error){
            console.log(error);

        }
    },

    getAll: async (req, res) =>{
        try{
            const characters = await CharacterModel.find();

            res.json(characters)

        }catch(error){
            console.log(error)
        }
    },
    getByName: async (req, res) =>{
        try {
            
            const name = req.params.name 
            const character = await CharacterModel.find({name: name}).exec();
            res.json(character)

            if(!character){
                res.status(404).json({msg:"Serviço não encontraddo."})
                return;
            }

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) =>{
        try {
            const id = req.params.id 
            const character = await CharacterModel.findById(id);
            //res.json(character)

            if(!character){
                res.status(404).json({msg:"Personagem não encontraddo."});
                return;
            }

            const deletedCharacter = await CharacterModel.findByIdAndDelete(id)
            res.status(200).json({deletedCharacter, msg:"Personagem Excluido"})
        } catch (error) {
            console.log(error)

        }
    },
    update: async (req, res) =>{
        try {
            const id = req.params.id 
            const character = {
                name: req.body.name,
                image: req.body.image,
            };

            const UpdaetCharacter = await CharacterModel.findByIdAndUpdate(id, character)

            if(!UpdaetCharacter){
                res.status(404).json({msg:"Personagem não encontraddo."});
                return;
            }

            res.status(200).json({character, msg: "Serviço atualizado com sucesso"})
        } catch (error) {
            console.log(error)

        }
    }
    
}

module.exports = characterControler