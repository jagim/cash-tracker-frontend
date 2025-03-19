import { verifySesion } from "@/src/auth/dal"
import getToken from "@/src/auth/token"

export async function GET(request: Request, { params }: { params: { budgetId: string, expenseId: string } }) {
    await verifySesion()

    const budgetId = (await params).budgetId
    const expenseId = (await params).expenseId
    const token = await getToken()
    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`
    const req = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }

    })
    const json = await req.json()

    if (!req.ok) {
        return Response.json(json.error, { status: 403 })
    }

    return Response.json(json)
}