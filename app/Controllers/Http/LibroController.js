'use strict'
const Libro=use('App/Models/Libro.js')
const { validate } = use ('Validator')



class LibroController 
{


    async prueba({request}){
        const abcd = request.all()
        return abcd
    }

    async mostrar({params}){

        if(params.id)
        {
            const bar=Libro.find(params.id)
            return bar
        }
        return await Libro.all()
    }

    async agregar ({request, response}) 
    {
        const reglasInput={
            nombre:'required',
            editorial:'required',
            serial:'required|number',
            fechaPub:'required|number'
        }
        let libr=request.all()
        const validation = await validate(libr,reglasInput)
        if(validation.fails()){
            return response.status(418).json({mensaje:'informacion no valida',explicacion:validation.messages()})
        }
        let newLibr = await Libro.create
        (
            {
            nombre: libr.nombre,
            editorial: libr.editorial,
            serial: libr.serial,
            fechaPub: libr.fechaPub
            }
        )
        return response.status(201).json({mensaje:'informacion aceptada',contenido:newLibr})
        //return await Libro.all()
    }



    async editar({params,request,response}){
        if(params.id)
        {
            
            const reglasInput={
                nombre:'required',
                editorial:'required',
                serial:'required|number',
                fechaPub:'required|number',
            }
            let datosInput=request.all()
            const validation = await validate(datosInput,reglasInput)

            if(validation.fails()){
                return response.status(418).json({mensaje:'informacion no valida',explicacion:validation.messages()})
            }

            const datosBuscados=await Libro.find(params.id)
            datosBuscados.nombre=request.input('nombre')
            datosBuscados.editorial=request.input('editorial')
            datosBuscados.serial=request.input('serial')
            datosBuscados.fechaPub=request.input('fechaPub')

            await datosBuscados.save()
            return datosBuscados       
        }
        return response.status(418).json({mensaje:'informacion no valida'})
    }




    async eliminar({params,response}){
        if(params.id){
            const datosBuscados=await Libro.find(params.id)
            await datosBuscados.delete()
            return await Libro.all()
        }
        return response.status(418).json({mensaje:'informacion no valida'})
    }
}

module.exports = LibroController