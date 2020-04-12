import reducer from './reducer';
import view from './views/login';
import logout from './views/logout';

const currentUserInitValue = sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUser")):null;

export {reducer,view,logout,currentUserInitValue}