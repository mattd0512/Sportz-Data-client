//you NEED to be putting comments in your code. there aren't any in your repo, and if you wanted to come back to this later or show another developer, it'll be hard to follow and find what you need. comment your code!
// make sure you're getting rid of any unused code
// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import NflShow from './components/Sport/NflShow'
import NbaShow from './components/Sport/NbaShow'
import MlbShow from './components/Sport/MlbShow'
import NhlShow from './components/Sport/NhlShow'
import NcaafShow from './components/Sport/NcaafShow'
import NcaabShow from './components/Sport/NcaabShow'
import NflTeam from './components/Team/NflTeam'
import NbaTeam from './components/Team/NbaTeam'
import MlbTeam from './components/Team/MlbTeam'
import NhlTeam from './components/Team/NhlTeam'
import NcaafTeam from './components/Team/NcaafTeam'
import NcaabTeam from './components/Team/NcaabTeam'

const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route
					path='/nfl/teams'
					element={
						
							<NflTeam msgAlert={msgAlert} user={user} />
						}
				/>
							<Route
					path='/nfl'
					element={
						<RequireAuth user={user}>
							<NflShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
								<Route
					path='/nba/teams'
					element={
						
							<NbaTeam msgAlert={msgAlert} user={user} />
						}
				/>
				<Route
					path='/nba'
					element={
						<RequireAuth user={user}>
							<NbaShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
								<Route
					path='/mlb/teams'
					element={
						
							<MlbTeam msgAlert={msgAlert} user={user} />
						}
				/>
				<Route
					path='/mlb'
					element={
						<RequireAuth user={user}>
							<MlbShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route
					path='/nhl/teams'
					element={
						
							<NhlTeam msgAlert={msgAlert} user={user} />
						}
				/>
				<Route
					path='/nhl'
					element={
						<RequireAuth user={user}>
							<NhlShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
								<Route
					path='/ncaaf/teams'
					element={
						
							<NcaafTeam msgAlert={msgAlert} user={user} />
						}
				/>
			<Route
					path='/ncaaf'
					element={
						<RequireAuth user={user}>
							<NcaafShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
								<Route
					path='/ncaab/teams'
					element={
						
							<NcaafTeam msgAlert={msgAlert} user={user} />
						}
				/>
				<Route
					path='/ncaab'
					element={
						<RequireAuth user={user}>
							<NcaabShow msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
