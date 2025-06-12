"use server";

import { profileSchema, validateWithZod } from "@/utils/schemas";

const renderError = (error:unknown):{ message: string} => {
    //code boby
    return {
        message: error instanceof Error ? error.message : 'An Error!!'
    }
}

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validataField = validateWithZod(profileSchema, rawData);
        console.log("validated",validataField);
        return { message: "Create Profile Success!!!" };
        
    } catch (error) {
        console.log(error);
        return renderError(error)
    }


};