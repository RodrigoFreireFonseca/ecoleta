import { Request, Response } from 'express';

import knex from '../database/connection';

class ItenControllers {
  async index(request: Request, response: Response) {
    const itens = await knex('itens').select('*');
  
    const serializesItens = itens.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      }
    });
  
    return response.json(serializesItens);
  }
}

export default ItenControllers;