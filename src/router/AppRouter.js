import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CreatePlaylist from '../pages/CreatePlaylist'
import Login from '../pages/Login'
import MyPlaylist from '../pages/MyPlaylist'
import NotFound from '../pages/NotFound'
import RedirectPage from '../pages/RedirectPage'
import { tracksAction } from '../store/tracks-slice'
import { userAction } from '../store/user-slice'
import {getProfile, getUserPlaylist} from '../utils/api'

const AppRouter = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const getPlaylist = useCallback(
    async () => {
      const { data } = await getUserPlaylist()
      dispatch(tracksAction.setUserPlaylist(data.items))      
    },[dispatch])
  
  const getCurrentUser = useCallback(
    async () => {
      const { data } = await getProfile()
      dispatch(userAction.setUser(data))
    },[dispatch])
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    dispatch(userAction.setToken(token))
    
    if(token) {
      getCurrentUser()
      getPlaylist()
    }
  }, [dispatch, getPlaylist, getCurrentUser])

  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route path="/" component={token ? MyPlaylist : Login} exact />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/myplaylist" component={MyPlaylist} />
          <Route path="/create" component={CreatePlaylist} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter