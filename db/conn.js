const mongoose = require("mongoose")

async function main() {
    try{
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://ADMIN:ADMIN@cluster0.6s8rfxc.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Conectado ao banco")
    }catch (error){
        console.log(`Error:${error}`);
    }

}

module.exports = main;