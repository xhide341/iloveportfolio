import { asc, eq } from "drizzle-orm";
import { db } from "../index";
import { usersTable } from "../schema";
import type { SelectUser } from "../schema";

export async function getAllUsers() {
  return db.select().from(usersTable).orderBy(asc(usersTable.id));
}

export async function getUserById(id: SelectUser["id"]): Promise<
  | {
      id: string;
      name: string;
      email: string;
    }
  | undefined
> {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id));

  return user;
}
