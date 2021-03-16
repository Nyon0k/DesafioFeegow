<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    public function createSchedule($request){
        $this->name = $request->name;
        $this->birthdate = $request->birthdate;
        $this->cpf = $request->source_id;
        $this->source_id = $request->source_id;
        $this->specialty_id = $request->specialty_id;
        $this->date_time = $request->date_time;
        $this->save();
    }
}
