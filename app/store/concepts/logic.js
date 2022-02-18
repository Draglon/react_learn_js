import { createSessionLogic, deleteSessionLogic } from './login/logic';
import profileLogic from './profile/logic';


export default [
  createSessionLogic,
  deleteSessionLogic,
  profileLogic,
];
