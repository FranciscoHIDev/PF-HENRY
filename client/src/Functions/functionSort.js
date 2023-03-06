export const sortByPrice = (array) => {
  data.sort((a,b) => {
    if(a.price > b.price)return 1;
    if(b.price > a.price)return -1;
    return 0;
  })
};
