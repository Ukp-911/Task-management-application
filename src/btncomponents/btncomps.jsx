import { useState } from 'react'
import '../btncomponents/btncomps.css'
import toast from 'react-hot-toast'

const btncomps = ({config}) => {

    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [titleError, settitleError] = useState(false)
    const [contError, setcontError] = useState(false)

    const datas = localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')):[]
    const reqitem= datas.find(item=>item.id===config.pasteid)
    const notify = () => {
        toast("paste updated", { duration: 1000 })
    }
    const errnotify = () => {
        toast("enter all the fields", { duration: 1000 })
    }

    const handleinpchnge = (e) => {
        settitle(e.target.value)
        if (title !== "") {
            settitleError(false)
        }
    }

    const handletextchnge = (e) => {
        setcontent(e.target.value)
        if (content !== "") {
            setcontError(false)
        }
    }

    const handlebtn = (e) => {
        e.preventDefault()
        if (title === "") {
            settitleError(true)
        }
        if (content === "") {
            setcontError(true)  
        }
        if (title !== "" && content !== "") {
            notify()
        } else {
            errnotify()
        }
    }

    return (
        <div className='superdiv'>
            <button className='close-btn' onClick={config.Close}>X</button>
            <div className='hom'>
                <input
                    id='uk'
                    type="text"
                    // placeholder='Update your title'
                    onChange={handleinpchnge}
                    style={{ borderColor: titleError ? "red" : "" }}
                    disabled={config.view}
                    value={reqitem.title}
                />
                {config.view ? "" : <button onClick={handlebtn}>Update Paste</button>}
            </div>
            <div className="tex">
                <textarea
                    id='pk'
                    // placeholder='Update your content'
                    onChange={handletextchnge}
                    style={{ borderColor: contError ? "red" : "" }}
                    disabled={config.view}
                    value={reqitem.content}
                />
            </div>
        </div>
    )
}
export default btncomps