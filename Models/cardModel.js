import mongoose from "mongoose"
const creditCardModel = new mongoose.Schema(
    {
        cardname: {type: String },
        cardnumber: {type: Number},
        cardlimit: {type: Number},
        cardBalance: {type: Number},
        currency: {type: String}
    }
)
export default mongoose.models.creditCard || mongoose.model('creditCard', creditCardModel);