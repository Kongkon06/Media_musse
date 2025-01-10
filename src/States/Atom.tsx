import { atom } from "recoil";

interface user{
    name:string,
    email:string,
}
export const Cart = atom({
    key:'Cart',
    default:''
});

export const User = atom<user>({
    key:"User",
    default:{
        name:'',
        email:''
    }
})