<?php
namespace App\Http\Controllers\Classes;

use App\Http\Controllers\Classes\Dados;
use Illuminate\Support\Facades\DB;

class EmpresaDados extends Dados
{
    static function getAllData()
    {
        $text = DB::table('empresa_text')->get();
        $servicos = DB::table('empresa_servicos')->get();
        $depoimentos = DB::table('empresa_depoimentos')->get();

        return [
            'text' => $text,
            'servicos' => $servicos,
            'depoimentos' => $depoimentos
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