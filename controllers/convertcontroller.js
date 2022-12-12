import { Rates } from "../models/exchangerates.js";

export const convertCurrency = async (req, res) => {
  try {
    await Rates.findOne({}).then((data) => res.send(data));
    const exchangeRate = async () => {
      try {
        const convert = await new Rates({
          dollarexchangeRate: 80,
        });
        await convert.save();
      } catch (error) {
        console.log(error + "error");
      }
    };
  } catch (error) {
    res.send(error.message);
  }
};
