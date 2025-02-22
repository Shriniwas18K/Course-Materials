
import {Route} from "react-router-dom";
import Active from '../pages/Dashboard/Property/Active';
import NewPost from '../pages/Dashboard/Property/NewPost';
import RemovePost from '../pages/Dashboard/Property/RemovePost';
import Update from '../pages/Dashboard/Profile/Update';
import View from '../pages/Dashboard/Profile/View';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import Notifications from '../pages/Dashboard/Notifications/Notifications';

import Error from "../pages/Error";
export const privateRoutes = (
    <Route path="/dashboard/"id="dashboard" 
    loader={
      async ()=> {
      const res={$id:"",email:"",userId:"",phone:"",name:""}
        return {
          sessionId: res.$id,
          userId:res.userId,
          email:res.email,
          phone:res.phone,
          name:res.name
        }
      }
    }
    element={<DashboardLayout />} errorElement={<Error/>}>
      <Route path="notifications" element={<Notifications />} />
      <Route path="property/view-active-postings" element={<Active />} />
      <Route path="property/post-new-property" element={<NewPost />} />
      <Route path="property/remove-postings" element={<RemovePost />} />
      <Route path="profile/view-profile" element={<View />} />
      <Route path="profile/update-profile" element={<Update />} />
    </Route> 
)