'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class EdadChecker {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response}, next) {
    console.log("Entro al middleware")
    const fecha = request.input('fechaPub')
    console.log(fecha)

    if(fecha>1999)
    {
      console.log("procesando el middleware")
      console.log(fecha)
      return await next()
    }
    console.log("no aplico ni madres")
    return response.status(418).json({mensaje:'informacion no valida'})
  }
}

module.exports = EdadChecker
