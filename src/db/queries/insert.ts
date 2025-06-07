import { db } from '../index';
import { usersTable } from '../schema';
import type { InsertUser } from '../schema';

export async function createUser(data: InsertUser) {
  try {
    await db.insert(usersTable).values(data).returning();
    return { success: true, user: data };
  } catch (error: any) {
    if (error.code === '23505') {
      return {
        success: false,
        error: 'Email already exists',
      };
    }
    
    console.log('Error creating user:', error);
  }
}

