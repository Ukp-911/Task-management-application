import { useState } from 'react'
import './homepage.css'
import { addpaste } from '../pasteslice.jsx'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
const Homepage = () => {

	const [title, settitle] = useState("")
	const [content, setcontent] = useState("")
	const [titleError,settitleError]=useState(false)
	const [contError,setcontError] =useState(false)

	const notify=()=>{
		toast("new paste created")
	}
	const handlecreatepst = (e) => {
		e.preventDefault()
		if (title===""){
			settitleError(true)
		}
		else if (content===""){
			setcontError(true)
		}
		if (title!==""&&content!==""){
			notify()
		}
	}

	const handleinpchnge = (e) => {
		settitle(e.target.value)
		if (title!==""){
			settitleError(false)
		}
	}

	const handletextchnge = (e) => {
		setcontent(e.target.value)
		if (setcontent!==""){
			setcontError(false)
		}
	}
	return (
		<>
			<div className='home'>
				<input id='ukp' type="text" placeholder='Enter your title' onChange={handleinpchnge}
				style={{
					borderColor : titleError ? "red":""
				}}/>
				<button onClick={handlecreatepst}>Create Paste</button>
			</div>
			<div className="text">
				<textarea id='pkp' placeholder='Likh na Maderchod' onChange={handletextchnge}
				style={{
					borderColor : contError? "red":""
				}} />
			</div>
		</>
	)
}
export default Homepage	