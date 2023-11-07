import Joi from "joi"
import  {joiPasswordExtendCore} from "joi-password"
const joiPassword = Joi.extend(joiPasswordExtendCore);
export const UserValidator = Joi.object( {
  name: Joi.string().regex(new RegExp('^[a-zA-Z]{3,50}$')).min(3).required(),
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: false } }),
  age: Joi.number().min(18).max(99).required(),
  password: joiPassword
      .string()
      .minOfSpecialCharacters(2)
      .minOfLowercase(2)
      .minOfUppercase(2)
      .minOfNumeric(2)
      .noWhiteSpaces()
      .onlyLatinCharacters()
      .min(8)
      .max(16)
      .required(),
})