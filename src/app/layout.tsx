// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Summer Fashion Boutique - Women's Summer Clothing",
//   description:
//     "Discover elegant women's summer clothing collection. Light fabrics, beachwear, resort wear, and accessories for the perfect summer style.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className={inter.className}>
//         {/* <CartProvider> */}
//         {/* <WishlistProvider> */}

//         {children}
//         {/* </WishlistProvider> */}
//         {/* </CartProvider> */}
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://vastraexports.com"),
  title: "Summer Fashion Boutique - Women's Summer Clothing",
  description:
    "Discover elegant women's summer clothing collection. Light fabrics, beachwear, resort wear, and accessories for the perfect summer style.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
