export default function SuccessMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-white text-center bg-amber-500 font-bold my-4 p-3 uppercase text-sm">{children}</p>
    )
}