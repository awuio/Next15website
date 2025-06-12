import { z, ZodSchema } from "zod";

// const profileSchema = z.string().min(2,{message:"String must contain at least 2 character"})

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "firstName must contain at least 2 character" }),
  lastName: z
    .string()
    .min(2, { message: "lastName must contain at least 2 character" }),
  userName: z
    .string()
    .min(2, { message: "userName must contain at least 2 character" }),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown):T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    //code
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
