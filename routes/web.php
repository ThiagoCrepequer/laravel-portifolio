<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\Classes\DashboardDados;
use App\Http\Controllers\Classes\EmpresaDados;
use App\Http\Controllers\Classes\SobreMimDados;
use App\Http\Controllers\ProfileController;
use App\Mail\EmailContato;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome/Welcome', [
        'sobremim' => SobreMimDados::getAllData(),
        'empresa' => EmpresaDados::getAllData(),
        'header' => DashboardDados::getAllHeaderData(),
        'contatos' => DB::table('contatos')->get()
    ])->withViewData(['header' => DashboardDados::getAllHeaderData(),
    ])->rootView('welcome');
})->name('home');

Route::get('/blog', function() {
    return Inertia::render('Blog/Blog', [
        'posts' => DB::table('blog')->orderBy('created_at', 'desc')->get(),
        'contatos' => DB::table('contatos')->get(),
        'maisFamosos' => DB::table('blog')->orderBy('views', 'desc')->limit(3)->get(),
        'header' => DashboardDados::getAllHeaderData(),
    ]);
})->name('blog');
Route::get('/blog/post/{id}', [BlogController::class, 'openPost'])->name('blog.openPost');

Route::post('sendEmail', function () {
    $data = request()->validate([
        'nome' => 'required',
        'email' => 'required|email',
        'mensagem' => 'required'
    ]);

    Mail::to('thiago.crepequer@hotmail.com')->send(new EmailContato($data));

    return response()->json(['success' => true]);
})->name('email.send');


Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {

    Route::get('/', [AdminController::class, 'getDados'])->name('admin');

    Route::get('/blog', [BlogController::class, 'index'])->name('admin.blog');
    Route::post('/blog/newPost', [BlogController::class, 'createNewPost'])->name('blog.createNewPost');
    Route::get('/blog/redirect/{id}', [BlogController::class, 'redirectToNotion'])->name('blog.redirectToNotion');
    Route::post('/blog/destroy', [BlogController::class, 'destroy'])->name('blog.destroy');

    Route::get('/contatos', [AdminController::class, 'getDados'])->name('contatos');

    Route::post('/update', [AdminController::class, 'update'])->name('admin.update');
    Route::delete('/destroy', [AdminController::class, 'destroy'])->name('admin.destroy');

    Route::prefix('sobremim')->middleware(['auth', 'verified'])->group(function () {
        Route::get('/text', [AdminController::class, 'getDados'])->name('sobremim.text');
        Route::get('/jornada', [AdminController::class, 'getDados'])->name('sobremim.jornada');
        Route::get('/qualificacoes', [AdminController::class, 'getDados'])->name('sobremim.qualificacoes');
    });

    Route::prefix('empresa')->middleware(['auth', 'verified'])->group(function () {
        Route::get('/text', [AdminController::class, 'getDados'])->name('empresa.text');
        Route::get('/servicos', [AdminController::class, 'getDados'])->name('empresa.servicos');
        Route::get('/depoimentos', [AdminController::class, 'getDados'])->name('empresa.depoimentos');
    });
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';