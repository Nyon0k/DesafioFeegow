<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function create(Request $request){ //Instancia um agendamento no banco
        $schedule = new Schedule;
        $schedule->createSchedule($request); //Chama a funcao de criacao de agendamento na model Schedule
        return response()->json(['Success create'=>$schedule], 200);
    }

    public function getSpecialties(){
        $res = Http::get('https://api.feegow.com/v1/api/specialties/list',[
            'Host' => 'api.feegow.com/v1',
            'Content-Type' => 'application/json',
            'x-access-token' => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38'
        ]);
        return $res;
    }

    public function getProfessionals($especialidade_id){
        $res = Http::get('https://api.feegow.com/v1/api/professional/list?especialidade_id='.$especialidade_id, [
            'Host' => 'https://api.feegow.com/v1',
            'Content-Type' => 'application/json',
            'x-access-token' => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38'
        ]);
        return $res;
    }

    public function getSources(){
        $res = Http::get('https://api.feegow.com/v1/api/patient/list-sources',[
            'Host' => 'api.feegow.com/v1',
            'Content-Type' => 'application/json',
            'x-access-token' => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38'
        ]);
        return $res;
    }
}
