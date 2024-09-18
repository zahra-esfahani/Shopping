const validTitle = (data) => {
  return data.split(" ").slice(0, 3).join(" ");
};

const searchTitle = (chooseProduct, text) => {
  if (!text) return chooseProduct;
  const someTitle = chooseProduct.filter((item) => {
    return item.title.toLowerCase().includes(text);
  });
  return someTitle;
};
const serachCategory = (products, category) => {
  if (!category) return products;
  const someCategory = products.filter((item) => {
    return item.category === category;
  });
  return someCategory;
};

const urlCategorySearch = (currurl, newurl) => {
  if (newurl.category === "all") {
    const { category, ...rest } = currurl;
    return rest;
  }
  if (newurl.text === "") {
    const { text, ...rest } = currurl;
    return rest;
  }
  return { ...currurl, ...newurl };
};
const sumTotalAndItems = (product) => {
  const counterItems = product.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  const totalItems = product.reduce((acc, curr) => {
    return (acc + curr.price * curr.quantity);
  }, 0);
  return {counterItems , totalItems}
};
const chechItemsquantity=(state , id)=>{
const index=state.selectedItems.findIndex((item)=>item.id===id);
if(index===-1)
{
  return 0;
}
else{
  return state.selectedItems[index].quantity;
}


}
export {
  validTitle,
  searchTitle,
  serachCategory,
  urlCategorySearch,
  sumTotalAndItems,
  chechItemsquantity
};
