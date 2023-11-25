import HomeScreen from "../src/screens/HomeScreen";


export default function HomePage() {
    return <HomeScreen />;
}
// import React from 'react';
// import Link from '../src/components/Link';

// function GlobalStyle() {
//     return (
//         <style jsx>{`
//             body {
//                 font-family: sans-serif;
//             }
        
//         `}
//         </style>
//     )
// }

// function Title({ children, as }) {
//     const Tag = as;
//     return (
//         <React.Fragment>    
//             <Tag>
//                 {children}
//             </Tag>
//             <style jsx>{`
//                 ${Tag} {
//                     color: red;
//                 }
            
            
//             `}
//             </style>
//         </React.Fragment>
//     );
// }

// export default function HomePage() {
//     return (
//         <div>
//             <GlobalStyle/>
//             <Title as="h1">Alura Cases</Title>
//             <Link href="/faq">
//                 Ir para a página do FAQ
//             </Link>
//         </div>
//     )
// }