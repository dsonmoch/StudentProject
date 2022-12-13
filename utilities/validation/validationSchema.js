const Joi = require("joi");

const studentSchema = Joi.object({
  id: Joi.string().max(4).min(4).alphanum().required(),
  email: Joi.string().email().required(),
});

const updateSchema = Joi.object({
  id: Joi.string().max(4).min(4).alphanum().required(),
  student_name: Joi.string().required(),
});

const deleteSchema = Joi.object({
  id: Joi.string().max(4).min(4).alphanum().required(),
});

const readStudentSchema = Joi.object({
  id: Joi.string().max(4).min(4).alphanum().required(),
});

const loginSchema = Joi.object({
  id: Joi.string().max(4).min(4).alphanum().required(),
  email: Joi.string().email().required(),
});

module.exports = {
  studentSchema,
  updateSchema,
  deleteSchema,
  loginSchema,
  readStudentSchema,
};
