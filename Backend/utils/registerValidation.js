const Joi = require("@hapi/joi");
const registerValidation = (data) => {
  const schema = Joi.object({
    username:Joi.string().min(4).max(20),
    name: Joi.string().min(3).max(30),
    surname:Joi.string().min(3).max(30),
    description:Joi.string().min(80).max(120),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(data);
};
const tradingValidation = (data) => {
  const schema = Joi.object({
    bookName: Joi.array().required(),
    finished: Joi.boolean(),
    description:Joi.string().min(60).max(180).required(),
    location:Joi.string(),
    typeOfTrade:Joi.string()
    
  });
  return schema.validate(data);
};
module.exports = {
  registerValidation,
  loginValidation,
  tradingValidation
};