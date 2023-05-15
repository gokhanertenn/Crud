import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient, Categories } from '@prisma/client';

const prisma = new PrismaClient({ log: ['error', 'info', 'warn', 'query'] });

// Tüm kategorileri getiren işlev
const getCategories = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const categories = await prisma.categories.findMany();
    reply.send(categories);
  } catch (error) {
    console.error(error);
    reply.status(500).send('Server error');
  }
};

// Yeni bir kategori oluşturan işlev
const createCategory = async (req: FastifyRequest, reply: FastifyReply) => {
  const { name, picture } = req.body as { name: string, picture: string };
  try {
    const category = await prisma.categories.create({
      data: { name, picture },
    });
    reply.send(category);
  } catch (error) {
    console.error(error);
    reply.status(500).send('Server error');
  }
};

// İlgili kategoriye ait ilanları getiren işlev
const getCategoryListings = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const categoryId = parseInt( req.params.id as string);

  try {
    const listings = await prisma.listings.findMany({
      where: { category_id: categoryId },
    });
    reply.send(listings);
  } catch (error) {
    console.error(error);
    reply.status(500).send('Server error');
  }
};

const deleteCategory = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const categoryId = parseInt(req.params.id as string);
  
    try {
      const deletedCategory = await prisma.categories.delete({
        where: { id: categoryId },
      });
      reply.send(deletedCategory);
    } catch (error) {
      console.error(error);
      reply.status(500).send('Server error');
    }
  };

  const updateCategory = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const categoryId = parseInt(req.params.id as string);
    const { name } = req.body as {name: string};
  
    try {
      const updatedCategory = await prisma.categories.update({
        where: { id: categoryId },
        data: { name },
      });
      reply.send(updatedCategory);
    } catch (error) {
      console.error(error);
      reply.status(500).send('Error updating category');
    }
  };
  
 
  
  
 
  

  export { getCategories, createCategory, getCategoryListings, deleteCategory,updateCategory };
