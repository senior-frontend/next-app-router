export default async function sitemap() {
  const staticRoutes = [
    "",
    "/products",
    "/products/socks",
    "/posts",
    "/login",
    "signup",
  ];
  const shoes = ["nike", "adidas"];

  const shoesPages = shoes.map((shoe: string) => ({
    url: `http://localhost:3000/products/shoes/${shoe}`,
    lastModified: new Date().toISOString(),
  }));
  const staticPages = staticRoutes.map((route: string) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages, ...shoesPages];
}
