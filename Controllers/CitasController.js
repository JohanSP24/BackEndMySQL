import Citas from "../models/citas.js";

export const getAllCitas = async (req, res)=> {
    try {
        const citas = await Citas.findAll();
        res.json(citas)
    } catch (error){
        res.json({msg: error.message})
    }
}

export const getCita = async (x,y)=> {
    try {
        const citas = await Citas.findAll({
            where:{id:x.params.id}
        });
        if(!citas){
            res.status(404).send({msg:'CLIEnte no EXISTE!'});
            return
        }
        y.json(citas[0]);

    } catch (error) {
        console.log(error)
        y.status(404).send('HUBO un error al buscar un CLIENTE');        
    }
}

//   agregar cita

export const agregarCita = async (x,y)=>{
    try {
        await Citas.create(x.body);
        y.json({msg:"Se agrego una CITa"})

    } catch (error) {
        y.json({msg: error.message})
    }
}

//modificar cita

export const modificarCita = async (x,y) =>{
    try {
        await Citas.update(x.body, {
            where:{id:x.params.id}
        })
        y.json({msg:"se modificO LA CIta"})
    } catch (error) {
        res.json({msg:'WHAaaat'})
    }
}

//eliminar

export const eliminarCita = async(req,res)=>{

    try {
        await Citas.destroy({
            where:{id:req.params.id}
        })
        res.json({msg:'se ELImino unA CIta'})

    } catch (error) {
        res.json({msg: error.message})
        
    }
}