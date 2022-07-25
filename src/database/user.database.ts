import { PrismaClient } from "@prisma/client";

const { user } = new PrismaClient();

export const getUsers = () => {
  return user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      created_at: true,
      updated_at: true,
    },
  });
};

export const findUser = (email: string) => {
  return user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = (name: string, email: string, password: string) => {
  return user.create({
    data: {
      name,
      email,
      password,
    },
  });
};
