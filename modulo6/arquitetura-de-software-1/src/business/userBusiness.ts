import { UserDatabase } from "../data/userDatabase";

export class UserBusiness {
  public async createUser(input: any): Promise<void> {
    const { id, name, email, password } = input;
    console.log(email);
    try {
      if (!name || !email || !password) {
        throw new Error("Please fill all the fields");
      }

      if (email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const userDatabase = new UserDatabase();

      const emailUser = await userDatabase.getUserByEmail(email);

      if (emailUser) {
        throw new Error("Email already exists");
      }

      const id = Date.now().toString();

      await userDatabase.createUser({ id, name, email, password });
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }
}
