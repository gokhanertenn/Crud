import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getCategories, createCategory, getCategoryListings,deleteCategory, updateCategory } from './categories.controller';

const routes = (app: FastifyInstance, options: any, done: () => void) => {
  // Tüm kategorileri getiren yol
  app.get('/categories', async (req: FastifyRequest, reply: FastifyReply) => {
    await getCategories(req, reply);
  });

  // Yeni bir kategori oluşturan yol
  app.post('/post', async (req: FastifyRequest, reply: FastifyReply) => {
    await createCategory(req, reply);
  });

  // Belirli bir kategoriye ait ilanları getiren yol
  app.get('/categories/:id/listings', async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    await getCategoryListings(req, reply);
  });

  app.delete('/categories/:id', async (req:FastifyRequest<{ Params: { id: string } }>, reply) => {
    await deleteCategory(req, reply);
  });

  app.put<{ Params: { id: string } }>('/update/:id', async (request, reply) => {
    await updateCategory(request, reply);
  });
  
  
  

  done();
};

export default routes;
