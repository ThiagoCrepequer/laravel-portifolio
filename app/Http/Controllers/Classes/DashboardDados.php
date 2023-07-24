<?php
namespace App\Http\Controllers\Classes;

use App\Http\Controllers\Classes\Dados;
use Illuminate\Support\Facades\DB;

class DashboardDados extends Dados
{
    static function getAllData()
    {
        return [
            'header' => DashboardDados::getAllHeaderData()
        ];
    }

    static function getAllHeaderData()
    {
        $header = DB::table('header')->first();

        return $header;
    }

    function updateData($request)
    {
        $this->update($request, "logo");
    }
    function deleteData($request)
    {
        $this->destroy($request);
    }
}

?>