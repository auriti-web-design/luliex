'use client'
import React, { useState } from 'react';
import * as zod from 'zod';
import axios from 'axios';
import {useForm} from "react-hook-form";
import { Form } from './ui/form';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = zod.object({
    nomeCompleto: zod.string().min(3),
    nomeAgenzia: zod.string().min(3),
    telefonoAgenzia: zod.string().min(10),
    email: zod.string().email(),
});

const FormGenerale: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        formState: { errors },
        submitForm,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = async (data: any) => {
        setIsSubmitting(true);

        try {
            await axios.post('/api/registrazione', data);
            // In caso di successo, reindirizzare l'utente ad una pagina di conferma
            window.location.href = '/conferma-registrazione';
        } catch (error) {
            console.error(error);
            // In caso di errore, mostrare un messaggio di errore all'utente
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto lg:px-64">
            <Form onSubmit={submitForm}>
                <div className="mb-3">
                    <Label htmlFor="nomeCompleto">Nome Completo</Label>
                    <Input
                        id="nomeCompleto"
                        name="nomeCompleto"
                        type="text"
                        error={errors.nomeCompleto?.message}
                    />
                </div>
                <div className="mb-3">

                    <Label htmlFor="nomeAgenzia">Nome Agenzia</Label>
                    <Input
                        id="nomeAgenzia"
                        name="nomeAgenzia"
                        type="text"
                        error={errors.nomeAgenzia?.message}
                    />
                </div>
                <div className="mb-3">
                    <Label htmlFor="telefonoAgenzia">Telefono Agenzia</Label>
                    <Input
                        id="telefonoAgenzia"
                        name="telefonoAgenzia"
                        type="tel"
                        error={errors.telefonoAgenzia?.message}
                    />
                </div>
                <div className="mb-3">

                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" error={errors.email?.message}/>
                </div>
                    <Button type="submit" disabled={isSubmitting}>
                        Invia Richiesta
                    </Button>
            </Form>
        </div>
);
};

export default FormGenerale;

