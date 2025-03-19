import { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/components/auth/LoginForm"

export const metadata: Metadata = {
    title: "CashTracker - Login",
    description: "Inicia sesión para gestionar tus finanzas"
};

export default function LoginPage() {
    return (
        <>
            <h1 className="text-6xl font-black text-purple-950">Inicia Sesión</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <LoginForm />
            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    href={'/auth/register'}
                    className="text-center text-gray-500"
                >No tienes una cuenta? Crea una aquí</Link>
                <Link
                    href={'/auth/forgot-password'}
                    className="text-center text-gray-500"
                >Olvidaste tu contraseña? Reestablecer</Link>
            </nav>
        </>
    )
}