import React from 'react';
import Section from './components/section/Section';
import university from './assets/university.json'
import CityList from './components/cityList/CityList';
import TutorList from './components/tutors/TutorList';
// import images from './assets/images.json'
// import images1 from './assets/images.json'
// import Image from './components/image/Image';



// // && ||

// const User = ({ name, avatar, age }) => {
//   console.log(name)
//   return (
//     <div>
//       {}
//       {avatar && <img src={avatar} alt="avatar" width="200px" />}
//       <h3>{name || 'ananym'}</h3>
//       <p>{age}</p>
//     </div>
//   )
// }

// const Container = ({ children }) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// const user = {
//   name: "Bob",
//   avatar: "https://images.unsplash.com/photo-1664189489011-e1506632ac3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   age: 30
// }
// const user2 = {
//   name: "Jhon",
//   age: 25
// }

// const user3 = {
//   avatar: "https://images.unsplash.com/photo-1664189301709-52e9117be13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//   age: 25
// }

// const products = [
//   {
//     name: "bananas",
//     amount: 20
//   },
//   {
//     name: "apples",
//     amount: 5
//   },
//   {
//     name: "oranges",
//     amount: 0
//   }
// ]

// const Product = ({name, amount}) => {

//   if (!amount) return <div><h3>{name}</h3><p>Out of stock</p></div>

//   return (
//     <div>
//       <h3>{name}</h3>
//       {
//         <p>{amount > 10 ? "In stock" : "Few left"}</p>
//       }

//     </div>
//   )
// }


const App = () => {
  return (
    <div>
      <Section title="Cities">
        <CityList cities={university.cities} />
      </Section>
      <Section title="Tutors">
        <TutorList tutors={university.tutors} />
      </Section>

    </div>
  )
}

export default App