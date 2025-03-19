export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-white text-center bg-red-600 font-bold my-4 p-3 uppercase text-sm">{children}</p>
    )
}