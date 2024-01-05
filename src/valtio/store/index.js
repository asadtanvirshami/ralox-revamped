import { proxy } from "valtio";

 const state = proxy({
  //AuthModalAction
  openAuthModal: false,
  authModalType:'',
});

export default state

