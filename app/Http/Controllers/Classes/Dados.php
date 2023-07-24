<?php

namespace App\Http\Controllers\Classes;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Route;
use Spatie\LaravelImageOptimizer\Facades\ImageOptimizer;
use Storage;

abstract class Dados
{
    abstract static function getAllData();
    abstract function updateData($request);
    abstract function deleteData($request);

    protected function update($request, $name = null)
    {
        $valores = $this->getValuesToUpdate($request);
        
        $id = $this->sendUpdateOrInsert($request, $valores);
        
        if ($request->hasfile('image')) {
            $pathName = $this->getPathName($request, $id, $name);

            DB::table($request->table)->where('id', $id)->update(['url_imagem' => '/storage/' . $pathName]);

            $image = $request->file('image');
            $this->saveImage($image, $pathName);
        }
    }

    function getValuesToUpdate($request)
    {
        $valores = $request->except(['table', 'image']);

        return $valores;
    }

    function getPathName($request, $id, $name) {
        $folderName = str_replace('_', '/', $request->table);
        $archiveName = ($name ? $name : $request->table  . $id);
        
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();

        $completPath = $folderName . '/' . $archiveName . '.' . $extension;

        return $completPath;
    }
    
    function saveImage($image, $finalPath)
    {
        $tempPath = $image->store('temp', 'public');

        $tempImagePath = Storage::disk('public')->path($tempPath);

        ImageOptimizer::optimize($tempImagePath);
        
        Storage::disk('public')->move($tempPath, $finalPath);
    }

    function sendUpdateOrInsert($request, $valores)
    {
        if ($this->isNewValue($request)) {
            $valores['created_at'] = $this->getCurrentTime();
            
            if ($request->hasfile('image')) {
                $valores['url_imagem'] = "temp";
            }

            return DB::table($request->table)->insertGetId($valores);
        } else {
            $valores['updated_at'] = $this->getCurrentTime();

            DB::table($request->table)->where('id', $request->id)->update($valores);

            return $request->id;
        }
    }

    function isNewValue($request)
    {
        return $request->id ? false : true;
    }

    function getCurrentTime()
    {
        return Carbon::now()->timezone('America/Sao_Paulo');
    }

    protected function destroy($request) {
        DB::table($request->table)->where('id', $request->id)->delete();
    }
}

?>