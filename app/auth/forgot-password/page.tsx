import Link from "next/link"
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "CashTracker - Olvide mi Password",
    description: "Recupera tu contraseña y continua manejando tus gastos"
};

export default function ForgotPasswordPage() {
    return (
        <>
            <h1 className="text-6xl font-black text-purple-950">Olvidaste tu Contraseña?</h1>
            <p className="text-3xl font-bold">aquí puedes <span className="text-amber-500">reestablecerla</span></p>

            <ForgotPasswordForm />
            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    href={'/auth/login'}
                    className="text-center text-gray-500"
                >Ya tienes una cuenta? Inicia Sesión</Link>
                <Link
                    href={'/auth/register'}
                    className="text-center text-gray-500"
                >No tienes una cuenta? Crea una aquí</Link>
            </nav>
        </>
    )
}