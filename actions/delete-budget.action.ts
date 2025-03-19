"use server"

import getToken from "@/src/auth/token"
import { Budget, ErrorResponseSchema, PasswordValidationSchema, SuccessSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"


type ActionStateType = {
    errors: string[],
    success: string
}

export async function deleteBudget(budgetId: Budget['id'], prevState: ActionStateType, formData: FormData) {
    const currentPassword = PasswordValidationSchema.safeParse(formData.get('password'))
    if (!currentPassword.success) {
        return {
            errors: currentPassword.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // check password
    const token = await getToken()
    const checkPasswordURL = `${process.env.API_URL}/auth/check-password`
    const checkPasswordREQ = await fetch(checkPasswordURL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: currentPassword.data
        })
    })
    const checkPasswordJSON = await checkPasswordREQ.json()
    if (!checkPasswordREQ.ok) {
        const { error } = ErrorResponseSchema.parse(checkPasswordJSON)
        return {
            errors: [error],
            success: ''
        }
    }

    // delete budget
    const deleteBudgetURL = `${process.env.API_URL}/budgets/${budgetId}`
    const deleteBudgetREQ = await fetch(deleteBudgetURL, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const deleteBudgetJSON = await deleteBudgetREQ.json()
    if (!deleteBudgetREQ.ok) {
        const { error } = ErrorResponseSchema.parse(deleteBudgetJSON)
        return {
            errors: [error],
            success: ''
        }
    }
    const success = SuccessSchema.parse(deleteBudgetJSON)
    revalidatePath('/admin')

    return {
        errors: [],
        success
    }
}