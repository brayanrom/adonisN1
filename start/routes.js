'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/prueba','LibroController.prueba')

Route.get('/mostrar/:id?','LibroController.mostrar')
Route.post('/agregar','LibroController.agregar').middleware(['fechaPub'])

Route.put('/editar/:id?','LibroController.editar').middleware(['fechaPub'])

Route.delete('/eliminar/:id?','LibroController.eliminar')







