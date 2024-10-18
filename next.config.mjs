/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Para evitar otimizações de imagem que podem falhar em exportações estáticas
    },
    basePath: '/portfolio', // Ajusta o caminho para funcionar no GitHub Pages
    assetPrefix: '/portfolio/', // Garante que os assets sejam carregados corretamente
  };
  
  export default nextConfig;
  

/* @type {import('next').NextConfig} 
const nextConfig = {};

export default nextConfig;
*/
