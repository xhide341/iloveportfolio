import { eq } from 'drizzle-orm';
import { db } from '../index';
import { usersTable } from '../schema';
import type { SelectUser } from '../schema';

export async function deleteUserById(id: SelectUser['id']) {
  await db.delete(usersTable).where(eq(usersTable.id, id));
}