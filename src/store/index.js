import { proxy } from "valtio";

 const state = proxy({
  //AuthAction
  openAuthModal: false,
  authModalType:''
});

export default state

