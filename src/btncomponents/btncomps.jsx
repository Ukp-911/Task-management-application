import { useState } from 'react'
import '../btncomponents/btncomps.css'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updatepaste } from '../pasteslice.jsx'


const btncomps = ({config}) => {

    const dispatch=useDispatch()

    const btnpastes = useSelector((state)=>state.paste.value)
    const reqitem= btnpastes.find(item=>item.id===config.pasteid)

    const [title, settitle] = useState(reqitem.title||"")
    const [content, setcontent] = useState(reqitem.content||"")
    const [titleError, settitleError] = useState(false)
    const [contError, setcontError] = useState(false)

    const notify = () => {
        toast("paste updated", { duration: 1000 })
    }
    const errnotify = () => {
        toast("enter all the fields", { duration: 1000 })
    }
    const nochangenotify=()=>{
        toast("no changes made",{ duration: 1000 })
    }

    const updatedatasdick={
        title,
        content,
        id: config.pasteid,
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
            if (title===reqitem.title && content===reqitem.content){
                nochangenotify()
            }
            else{
                dispatch(updatepaste(updatedatasdick))
                notify()
                config.Close()
            }
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
                    placeholder='Update your title'
                    onChange={handleinpchnge}
                    style={{ borderColor: titleError ? "red" : "" }}
                    disabled={config.view}
                    value={title}
                />
                {config.view ? "" : <button onClick={handlebtn}>Update Paste</button>}
            </div>
            <div className="tex">
                <textarea
                    id='pk'
                    placeholder='Update your content'
                    onChange={handletextchnge}
                    style={{ borderColor: contError ? "red" : "" }}
                    disabled={config.view}
                    value={content}
                />
            </div>
        </div>
    )
}
export default btncomps