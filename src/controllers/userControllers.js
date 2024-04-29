import User from "../models/userModel";

const create = async (req, res) => {
    try {
        //Tomar datos del body 
        const userData = new User(req.body);

        //Buscar si existe un usuario (filtrar por email)
        const {email}= userData;
        const userExist  = User.findOne({ email });
        if (userExist){
            return res.status(400).json({message: "User already exist"})
        }

        //Validacion por si no existe un usuario
        //Guardar el usuario
        //Mostrar informacion del usuario guardado

    } catch (error) {
        
    }
}