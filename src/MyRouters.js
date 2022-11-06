import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Redirect from '/Redirect'
import Repository from './Repository'
import SingleRepo from './SingleRepo'
import RepoList from './RepoList'
import ErrorBoundaryPage from './ErrorBoundaryPage'
import ErrorPage from './ErrorPage'


export default function MyRouters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/repos' element={<Repository/>}>
              <Route path='repoList'element={<RepoList/>}/>
              <Route path='repoList/:name' element={<SingleRepo/>}/>
              <Route index element={<RepoList/>}/>
            </Route>
            <Route path='/errorboundary' element={<ErrorBoundaryPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}
