<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EmailContato extends Mailable
{
    use Queueable, SerializesModels;

    private $message;
    private $name;
    private $email;

    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->message = $data['mensagem'];
        $this->name = $data['nome'];
        $this->email = $data['email'];
    }

    public function build() {
        return $this->subject('Email')
                    ->markdown('emails.contato')
                    ->with([
                        'name' => $this->name,
                        'message' => $this->message,
                        'email' => $this->email
                    ]);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nova Mensagem de Contato',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contato',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
