<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Classes\BlogDados;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BlogController extends Controller
{
    private $blogDados;

    public function __construct()
    {
        $this->blogDados = new BlogDados();
    }

    public function index()
    {
        return Inertia::render('Admin/Blog/Blog', $this->blogDados->getAllData());
    }

    public function openPost($id)
    {
        return Inertia::render('Blog/PostPage', [
            'page' => $this->blogDados->getDadosPost($id),
            'data' => DB::table('blog')->where('url_arquivo', $id)->first(),
        ]);
    }

    public function createNewPost(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        
        $id = $this->blogDados->createNewNotionPage();

        $request['url_arquivo'] = $id;

        $this->blogDados->updateData($request);

        return $id;
    }

    public function redirectToNotion($id)
    {
        return redirect('https://www.notion.so/resumo/' . $id);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);

        DB::table('blog')->where('id', $request->id)->delete();
    }
}