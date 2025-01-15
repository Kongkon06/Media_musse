import { atom } from "recoil";

const stores = [
    {
      id: 1,
      name: "Kongkon Store",
      address: "Komolata Pati, New York, USA",
      src: "/instrumentstorejpg.jpg",
    },
    {
      id: 2,
      name: "Harmony Music Center",
      address: "Downtown Street, Los Angeles, USA",
      src: "/instrument.jpg",
    },
    {
      id: 3,
      name: "Melody Shop",
      address: "Park Avenue, Chicago, USA",
      src: "/streetinstrument.jpg",
    },
    {
      id: 4,
      name: "Symphony Instruments",
      address: "Broadway Lane, Houston, USA",
      src: "/brook.jpg",
    },
    {
      id: 5,
      name: "Orchestra Hub",
      address: "Bay Area, San Francisco, USA",
      src: "/stwewarts.jpg",
    },
  ]; 

interface user{
    name:string,
    email:string,
}
export const Cart = atom({
    key:'Cart',
    default:0
});

export const User = atom<user>({
    key:"User",
    default:{
        name:'',
        email:''
    }
})

export const randomstores = atom({
    key:"randomstores",
    default:stores
})