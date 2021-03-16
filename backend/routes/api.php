<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ScheduleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

route::post('schedule', [ScheduleController::class, 'create']);
route::get('getSpecialties', [ScheduleController::class, 'getSpecialties']);
route::get('getProfessionals/{id}', [ScheduleController::class, 'getProfessionals']);
route::get('getSources', [ScheduleController::class, 'getSources']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
