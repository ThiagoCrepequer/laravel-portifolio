<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sobremim_text', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('title');
            $table->text('paragraph_1');
            $table->text('paragraph_2');
            $table->string('url_imagem');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sobremim_text');
    }
};
