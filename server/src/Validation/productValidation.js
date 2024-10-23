const Joi = require('joi');

// MongoDB ObjectId validation
const objectId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

// Product validation schema
const productValidationSchema = Joi.object({
    
  // id: Joi.number().integer().required().messages({
  //   'number.base': '"id" must be a number',
  //   'any.required': '"id" is required'
  // }),

  title: Joi.string().min(3).max(100).required().messages({
    'string.base': '"title" should be a string',
    'string.min': '"title" should have at least 3 characters',
    'string.max': '"title" should have at most 100 characters',
    'any.required': '"title" is required'
  }),

  description: Joi.string().min(10).max(500).required().messages({
    'string.base': '"description" should be a string',
    'string.min': '"description" should have at least 10 characters',
    'string.max': '"description" should have at most 500 characters',
    'any.required': '"description" is required'
  }),
    category: Joi.string().valid().required().messages({
    'any.required': '"category" is required'
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': '"price" must be a number',
    'number.min': '"price" must be at least 0',
    'any.required': '"price" is required'
  }),
  discountPercentage: Joi.number().min(0).max(100).optional().messages({
    'number.base': '"discountPercentage" must be a number',
    'number.min': '"discountPercentage" cannot be less than 0',
    'number.max': '"discountPercentage" cannot be more than 100'
  }),
  rating: Joi.number().min(0).max(5).optional().messages({
    'number.base': '"rating" must be a number',
    'number.min': '"rating" must be at least 0',
    'number.max': '"rating" cannot exceed 5'
  }),
  stock: Joi.number().integer().min(0).required().messages({
    'number.base': '"stock" must be a number',
    'number.min': '"stock" must be at least 0',
    'any.required': '"stock" is required'
  }),
  tags: Joi.array().items(Joi.string()).optional().messages({
    'array.base': '"tags" should be an array of strings'
  }),
  sku: Joi.string().alphanum().required().messages({
    'string.base': '"sku" must be a string',
    'any.required': '"sku" is required'
  }),
  weight: Joi.number().min(0).required().messages({
    'number.base': '"weight" must be a number',
    'number.min': '"weight" must be at least 0',
    'any.required': '"weight" is required'
  }),
  dimensions: Joi.object({
    width: Joi.number().min(0).required().messages({
      'number.base': '"width" must be a number',
      'any.required': '"width" is required'
    }),
    height: Joi.number().min(0).required().messages({
      'number.base': '"height" must be a number',
      'any.required': '"height" is required'
    }),
    depth: Joi.number().min(0).required().messages({
      'number.base': '"depth" must be a number',
      'any.required': '"depth" is required'
    })
  }).required().messages({
    'object.base': '"dimensions" must be an object',
    'any.required': '"dimensions" is required'
  }),
  warrantyInformation: Joi.string().optional().messages({
    'string.base': '"warrantyInformation" should be a string'
  }),
  shippingInformation: Joi.string().optional().messages({
    'string.base': '"shippingInformation" should be a string'
  }),
  availabilityStatus: Joi.string().valid('In Stock', 'Out of Stock', 'Pre-Order').required().messages({
    'any.only': '"availabilityStatus" must be one of ["In Stock", "Out of Stock", "Pre-Order"]',
    'any.required': '"availabilityStatus" is required'
  }),
  returnPolicy: Joi.string().optional().messages({
    'string.base': '"returnPolicy" should be a string'
  }),
  minimumOrderQuantity: Joi.number().integer().min(1).required().messages({
    'number.base': '"minimumOrderQuantity" must be a number',
    'number.min': '"minimumOrderQuantity" must be at least 1',
    'any.required': '"minimumOrderQuantity" is required'
  }),
  images: Joi.array().items(Joi.string().uri()).optional().messages({
    'array.base': '"images" should be an array of valid URIs',
    'string.uri': 'Each "image" must be a valid URL'
  }),
  thumbnail: Joi.string().uri().optional().messages({
    'string.base': '"thumbnail" must be a string',
    'string.uri': '"thumbnail" must be a valid URL'
  }),
  __v: Joi.number().optional()
});

const productIdSchema = Joi.object({
  id: Joi.string().pattern(new RegExp("^[0-9a-fA-F]{24}$")).messages({
    "string.pattern.base":
      "Invalid ID format. Please provide a valid 24-character hexadecimal ID.",
  }),
});

const updateProductSchema = Joi.object({
  title: Joi.string().optional().messages({
    'string.base': 'Title must be a valid string.',
  }),
  description: Joi.string().optional().messages({
    'string.base': 'Description must be a valid string.',
  }),
  price: Joi.number().precision(2).positive().optional().messages({
    'number.base': 'Price must be a valid number.',
    'number.positive': 'Price must be greater than zero.',
  }),
  discountPercentage: Joi.number().precision(2).positive().optional().messages({
    'number.base': 'Discount percentage must be a valid number.',
  }),
  rating: Joi.number().min(0).max(5).optional().messages({
    'number.base': 'Rating must be a valid number between 0 and 5.',
  }),
  stock: Joi.number().integer().positive().optional().messages({
    'number.base': 'Stock must be a valid integer.',
    'number.positive': 'Stock must be greater than zero.',
  }),
  sku: Joi.string().optional().messages({
    'string.base': 'SKU must be a valid string.',
  }),
  weight: Joi.number().positive().optional().messages({
    'number.base': 'Weight must be a valid number.',
  }),
  dimensions: Joi.object({
    width: Joi.number().positive().optional().messages({
      'number.base': 'Width must be a valid number.',
    }),
    height: Joi.number().positive().optional().messages({
      'number.base': 'Height must be a valid number.',
    }),
    depth: Joi.number().positive().optional().messages({
      'number.base': 'Depth must be a valid number.',
    }),
  }).optional(),
  warrantyInformation: Joi.string().optional().messages({
    'string.base': 'Warranty information must be a valid string.',
  }),
  shippingInformation: Joi.string().optional().messages({
    'string.base': 'Shipping information must be a valid string.',
  }),
  availabilityStatus: Joi.string().optional().messages({
    'string.base': 'Availability status must be a valid string.',
  }),
  returnPolicy: Joi.string().optional().messages({
    'string.base': 'Return policy must be a valid string.',
  }),
  minimumOrderQuantity: Joi.number().integer().positive().optional().messages({
    'number.base': 'Minimum order quantity must be a valid integer.',
  }),
  tags: Joi.array().items(Joi.string()).optional(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  thumbnail: Joi.string().uri().optional().messages({
    'string.uri': 'Thumbnail must be a valid URL.',
  })
});

module.exports = { productValidationSchema,productIdSchema,updateProductSchema };
