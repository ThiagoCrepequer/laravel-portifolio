<?php

namespace App\Http\Controllers\Classes;

class DadosFactory
{
    public static function create($table, $divisor = "_")
    {

        $type = explode($divisor, $table)[0];

        switch ($type) {
            case 'empresa':
                return new EmpresaDados();
            case 'sobremim':
                return new SobreMimDados();
            case 'contatos':
                return new ContatosDados(); 
            case 'header' || "admin":
                return new DashboardDados();
            case 'blog':
                return new BlogDados();
            default:
                return null;
        }
    }

    public static function createRouteToArchive($curretRoute)
    {
        switch ($curretRoute) {
            case 'sobremim.text':
                return 'Admin/SobreMimText';
            case 'sobremim.jornada':
                return 'Admin/Jornada';
            case 'sobremim.qualificacoes';
                return 'Admin/Qualificacoes';
            case 'empresa.text':
                return 'Admin/SobreEmpresa';
            case 'empresa.servicos':
                return 'Admin/Servicos';
            case 'empresa.depoimentos':
                return 'Admin/Depoimentos';
            case 'contatos':
                return 'Admin/Contatos';
            case 'admin':
                return 'Admin/Dashboard';
            default:
                return null;
        }
    }
}

?>