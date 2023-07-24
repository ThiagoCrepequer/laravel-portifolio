<?php

namespace App\Http\Controllers\Classes;

use App\Http\Controllers\Classes\Dados;
use Illuminate\Support\Facades\DB;

class SobreMimDados extends Dados
{
    static function getAllData()
    {
        $text = DB::table('sobremim_text')->get();
        $jornada = DB::table('sobremim_jornada')
            ->orderByRaw('`date` IS NULL, `date` ASC')
            ->get();
        $qualificacoes = DB::table('sobremim_qualificacoes')->get();

        return [
            'text' => $text,
            'jornada' => $jornada,
            'qualificacoes' => $qualificacoes
        ];
    }
    function updateData($request)
    {
        $this->update($request);
    }
    function deleteData($request)
    {
        $this->destroy($request);
    }
}

?>