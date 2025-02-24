// import { PrismaClient, User } from '@prisma/client';
// import * as bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// async function main() {
//   const plainPassword = 'password';
//   const saltRounds = 10;

//   // パスワードをハッシュ化
//   const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

//   const currentDate = new Date();
//   const users: User[] = [
//     {
//       id: 1,
//       name: 'サンプルテスト001',
//       email: 'sample01@example.com',
//       password: hashedPassword,
//       createdAt: currentDate,
//       updatedAt: currentDate,
//     },
//     {
//       id: 2,
//       name: 'サンプルテスト002',
//       email: 'sample02@example.com',
//       password: hashedPassword,
//       createdAt: currentDate,
//       updatedAt: currentDate,
//     },
//     {
//       id: 3,
//       name: 'サンプルテスト003',
//       email: 'sample03@example.com',
//       password: hashedPassword,
//       createdAt: currentDate,
//       updatedAt: currentDate,
//     },
//     {
//       id: 4,
//       name: 'サンプルテスト004',
//       email: 'sample04@example.com',
//       password: hashedPassword,
//       createdAt: currentDate,
//       updatedAt: currentDate,
//     },
//     {
//       id: 5,
//       name: 'サンプルテスト005',
//       email: 'sample05@example.com',
//       password: hashedPassword,
//       createdAt: currentDate,
//       updatedAt: currentDate,
//     },
//   ];

//   // 既存のデータをクリアしたい場合は以下をアンコメント
//   // await prisma.user.deleteMany()

//   // データを一括で作成
//   await prisma.user.createMany({
//     data: users,
//     skipDuplicates: true, // 重複をスキップする場合
//   });

//   // Todoデータを追加
//   const todos = [
//     { title: 'ユーザー1のTodo1', description: '詳細1', userId: 1 },
//     { title: 'ユーザー1のTodo2', description: '詳細2', userId: 1 },
//     { title: 'ユーザー1のTodo3', description: '詳細3', userId: 1 },
//     { title: 'ユーザー2のTodo1', description: '詳細1', userId: 2 },
//     { title: 'ユーザー2のTodo2', description: '詳細2', userId: 2 },
//     { title: 'ユーザー3のTodo1', description: '詳細1', userId: 3 },
//   ];

//   await prisma.todo.createMany({
//     data: todos,
//     skipDuplicates: true,
//   });

//   console.log('初期UserデータとTodoデータが作成されました。');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
