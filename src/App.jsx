import "./App.css"
import Homepage from './components/Homepage.jsx'
import About from './components/About.jsx'
import Viewpastes from './components/Viewpastes.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout.jsx'
import { Toaster } from "react-hot-toast"

function Todo2() {
	const routes = createBrowserRouter([
		{
			path:'/',
			element: <Layout/>,
			children:[
				{
					index: true,
					element:<Homepage/>
				},
				{
					path: "about",
					element:<About/>
				},
				{
					path:"viewpastes",
					element:<Viewpastes/>
				}
			]
		}
	])
	return (
		<div>
			<Toaster/>
			<RouterProvider router={routes} />
		</div>
	)
}

export default Todo2	