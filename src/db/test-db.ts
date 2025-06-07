/*
  pnpm tsx src/db/test-db.ts to test queries
*/

import 'dotenv/config';
import type { usersTable } from '~/db/schema';
import { createUser } from './queries/insert';
import { getAllUsers, getUserById } from './queries/select';
import { deleteUserById } from './queries/delete';

async function main() {  
  
  // new user every test
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: `johnpogi+${Date.now()}@example.com`,
  };
  
  // create user
  const createdUser = await createUser(user);
  if (!createdUser || !createdUser.success || !createdUser.user) {
    console.error('Failed to create user:', createdUser?.error ?? 'Unknown error');
    return;
  }
  console.log('New user created!', createdUser.user);

  // select all users
  const users = await getAllUsers();
  console.log('Getting all users from the database: ', users);

  if (users[0] === undefined) {
    return console.log('No users found in the database.');
  }
  console.log('Getting first user from the database: ', users[0]);

  // select by id
  const firstUser = await getUserById(users[0].id);
  console.log('Getting first user: ', firstUser);

  // delete by id
  if (firstUser) {
    await deleteUserById(firstUser.id);
    console.log('User deleted with the id: ', firstUser.id);
  } else {
    console.log('User with ID 1 not found, nothing to delete.');
  }
}

main().catch((err) => {
  console.error('Unhandled error in main:', err);
});
