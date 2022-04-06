const getRandomNumber = () => Math.floor(Math.random() * 256);

const getColor = () => {
  const [ R, G, B ] = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
  let dark = 0;
  [R, G, B].forEach(value => {
    if (value < 64) dark++;
    else if (value > 192) dark--;
  });
  return [`rgb(${R}, ${G}, ${B})`, dark <= 0 ? 'black' : 'white'];
};

export default getColor;