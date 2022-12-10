export const purpose = (req, res) => {
  const purposelist = ["Education", "Health", "Rent", "Travel"];
  try {
    res.status(200).send(purposelist);
  } catch (error) {
    res.send(error.message);
  }
};
