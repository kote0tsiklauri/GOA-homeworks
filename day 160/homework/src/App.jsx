import { useState,useEffect,useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent';
import ColorList from './ColorList';


function App() {
  const userNameId = useId();
  const lastNameId = useId();
  const privateNumberId = useId();
  const locationId = useId();

  


  return (
    <>
      <div>1) შექმენი ორი დამოუკიდებელი ფორმა ერთ გვერდზე, თითოეული რამდენიმე input-ით.
გამოიყენე useId თითოეული ფორმისთვის.
გადაამოწმე, რომ ID-ები არ ემთხვევა ერთმანეთში.</div>
      <form>
        <label htmlFor={userNameId}>First Name</label>
        <input id={userNameId} type="text" placeholder="first name" />
        <br />

        <label htmlFor={lastNameId}>Last Name</label>
        <input id={lastNameId} type="text" placeholder="last name" />
        <br />
      </form>

      <form>
        <label htmlFor={privateNumberId}>Private Number</label>
        <input id={privateNumberId} type="number" placeholder="private number" />
        <br />

        <label htmlFor={locationId}>Location</label>
        <input id={locationId} type="text" placeholder="location" />
      </form>


      <div>2) შექმენი კომპონენტი FormField, რომელიც იღებს props-ით id, label და type.
მშობელმა შექმნას ID useId-ით და გადასცეს შვილს.
შვილმა label და input გამოიყენოს ამ ID-ით.</div>
      <Parent />

      <div>3) შექმენი checkbox-ების სია (მაგ. ფავორიტი ფერები).
თითოეული checkbox უნდა ჰქონდეს უნიკალური ID useId-ით.
შენახე useState-ში, რომ რომელ checkbox-ია მარკირებული.
ეკრანზე აჩვენე "Selected: [list of checked items]".</div>
      

      <div>4) შექმენი კომპონენტი, სადაც შეგიძლია დაემატოს ახალი ნივთები (მაგ. ახალი ხილი) სიის ბოლოს.
თითოეულ ახალ ელემენტს უნიკალური ID უნდა ჰქონდეს useId-ის + index-ით.
checkbox + label უნდა იყოს სწორად დაკავშირებული.</div>

      <ColorList />
    </>
  )
}

export default App
