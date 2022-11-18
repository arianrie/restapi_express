import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try{
    const users = await prisma.User.findMany();
    res.status(200).json({ status: "OK", data: users });
  }catch(error){
    res.status(400).json({ status: "BAD_REQUEST", message: error.message });
  }
}

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try{
    const user = await prisma.User.findUnique({
      where:{ id: Number(id) }
    });
    res.status(200).json({ status: "OK", data: user });
  }catch(error){
    res.status(400).json({ status: "BAD_REQUEST", message: error.message });
  }
}

export const createUser = async (req, res) => {
  const { email, name } = req.body;
  try{
    const user = await prisma.User.create({
      data:{
        email,
        name
      }
    });
    res.status(201).json({ status: "CREATED", data: user });
  }catch(error){
    res.status(400).json({ status: "BAD_REQUEST", message: error.message });
  }
}

export const updateUser = async (req, res) => {
  const { email, name } = req.body;
  const { id } = req.params;
  try{
    const user = await prisma.User.update({
      where:{ id : Number(id) },
      data:{
        email,
        name
      }
    });
    res.status(200).json({ status: "OK", data: user });
  }catch(error){
    res.status(400).json({ status: "BAD_REQUEST", message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try{
    const user = prisma.User.delete({
      where: { id : Number(id) }
    });
    res.status(200).json({ status: "OK" });
  }catch(error){
    res.status(400).json({ status: "BAD_REQUEST", message: error.message });
  }
}
