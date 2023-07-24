<?php
namespace App\Http\Controllers\Classes;

use App\Http\Controllers\Classes\Dados;
use Illuminate\Support\Facades\DB;

class ContatosDados extends Dados
{
    static function getAllData()
    {
        $contatos = DB::table('contatos')->get();

        return [
            'contatos' => $contatos,
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