import { Rates } from "../models/exchangerates.js";

export const convertCurrency = async (req, res) => {
  try {
    await Rates.findOne({}).then((data) => res.send(data));
  } catch (error) {
    res.send(error.message);
  }
};
export const exchangeRate = async () => {
  const convert = await new Rates({
    dollarexchangeRate: 80,
  });
  try {
    await convert.save();
  } catch (error) {
    console.log(error + "error");
  }
};
