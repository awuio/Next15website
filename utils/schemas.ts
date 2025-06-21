import { z, ZodSchema } from "zod";

// const profileSchema = z.string().min(2,{message:"String must contain at least 2 character"})

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "firstName must contain at least 2 character." }),
  lastName: z
    .string()
    .min(2, { message: "lastName must contain at least 2 character." }),
  userName: z
    .string()
    .min(2, { message: "userName must contain at least 2 character." }),
});

const validateImage = () => {
  const maxFileSize = 5 * 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less than 5MB.");
};
export const imageSchema = z.object({
  image: validateImage(),
});

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "The name must be more than 2 character." })
    .max(30, { message: "The name must be less than 30 character." }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "description must be more than 2 character." })
    .max(200, { message: "description must be less than 200 character." }),
  price: z.coerce.number().int().min(0, { message: "ราคาต้องมากกว่า 0" }),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    //code
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
