import Joi from 'joi';

export const taskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    'string.empty': 'El título es obligatorio',
    'string.min': 'El título debe tener al menos 3 caracteres',
    'string.max': 'El título no puede tener más de 100 caracteres',
    'any.required': 'El título es obligatorio'
  }),
  description: Joi.string().max(500).allow('').messages({
    'string.max': 'La descripción no puede exceder los 500 caracteres',
  }),
  completed: Joi.boolean().messages({
    'boolean.base': 'El campo "completed" debe ser verdadero o falso'
  }),
});
