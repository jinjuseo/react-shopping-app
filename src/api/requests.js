const requests = {
  fetchAll: "/",
  fetchElectronics: "/category/electronics",
  fetchJewelery: "/category/jewelery",
  fetchMans: "/category/men's clothing",
  fetchWomens: "/category/women's clothing",
  fetchProduct: (id) => "/" + id,
};

export default requests;
