"use server";

interface IFormState {
  success: boolean;
  message: string;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };
}

export const greet = async (
  prevState: IFormState,
  formData: FormData
): Promise<IFormState> => {
  const firstName = formData.get("firstName")?.toString().trim();
  const lastName = formData.get("lastName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString().trim();
  const errors: IFormState["errors"] = {};

  if (!firstName) errors.firstName = "First Name is required";
  if (!lastName) errors.lastName = "Last Name is required";
  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "", errors };
  }

  console.log("Submitted email:", email);

  return {
    success: true,
    message: `Hello, ${firstName} ${lastName}! Thanks for submitting your email.`,
    errors: {},
  };
};
