<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Classes\DadosFactory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Route;

class AdminController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Dashboard');
    }

    public function getDados()
    {
        $currentRoute = Route::currentRouteName();
        $routeToArchive = DadosFactory::createRouteToArchive($currentRoute);
        $objectFactored = DadosFactory::create($currentRoute, ".");

        return Inertia::render($routeToArchive, [
            'dados' => $objectFactored::getAllData()
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'table' => 'required'
        ]);

        $factory = DadosFactory::create($request->table);
        $factory->updateData($request);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'table' => 'required',
            'id' => 'required'
        ]);

        $factory = DadosFactory::create($request->table);
        $factory->deleteData($request);
    }
}