import Home from './Home.jsx'
import Notifications from './Notifications.jsx'
import ProfileLink from './ProfileLink.jsx'
import CreatePost from './CreatePost.jsx'
import Search from './Search.jsx'

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  )
}


export default SidebarItems;