<?php
namespace App\Http\Controllers\Classes;

use App\Http\Controllers\Classes\Dados;
use FiveamCode\LaravelNotionApi\Entities\Page;
use FiveamCode\LaravelNotionApi\Entities\Properties\Title;
use FiveamCode\LaravelNotionApi\Notion;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class BlogDados extends Dados
{
    private $notion;

    public function __construct()
    {
        $this->notion = new Notion(env('NOTION_API_TOKEN'));
    }
    static function getAllData()
    {
        $pages = DB::table('blog')
            ->orderBy('created_at', 'desc')
            ->get();

        return [
            'pages' => $pages,
        ];        
    }

    function getDadosPost($id) {
        $response = Http::get('https://notion-api.splitbee.io/v1/page/' . $id);

        DB::table('blog')
            ->where('url_arquivo', $id)
            ->increment('views');

        if ($response->successful()) {
            return ['block' => $response->json()];
        } 

        return ['error' => "erro"];
    }

    function createNewNotionPage() {
        $parentID = '065f6d041a064b97a86272c91bcffc68';

        $page = new Page();
        $page->set('Name', Title::value('I was created from Laravel'));

        $newPage = $this->notion->pages()->createInPage($parentID, $page);
        $id = str_replace('-', '', $newPage->getId());

        return $id;
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