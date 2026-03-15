import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Majestosa Arte',
    short_name: 'Majestosa',
    description: 'Ateliê Artesanal Cristão - Fé, Arte e Amor',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5f0',
    theme_color: '#5D4037',
    icons: [
      {
        src: 'https://i.postimg.cc/mD3m9q8p/heart-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://i.postimg.cc/mD3m9q8p/heart-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
