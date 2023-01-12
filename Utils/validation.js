import Joi from 'joi';
const luhn10Check = (cardNumber) =>{
    let numSum = 0;
    let value;
    let cardDigits = cardNumber.length;

    for (var i = 0; i < cardDigits; ++i) {
        if (i % 2 == 0) {
            value = 2 * cardNumber[i];
            if (value >= 10) {
                value = (Math.floor(value / 10) + value % 10);
            }
        } else {
            value = +cardNumber[i];
        }
        numSum += value;
    }
    return (numSum % 10 == 0);
} 
const validate=(body)=>{
    let result = Joi.object({
        cardname: Joi.string().min(3).max(20).required(),
        cardnumber: Joi.string().regex(/^[0-9]+$/).min(2).max(19).required(),
        cardlimit: Joi.number().required()
    }).validate(body)
    const validCreditNumber=  luhn10Check(body.cardnumber)
    const invalid = result.error || !validCreditNumber ? true :false
    return invalid;
}

export default validate ;