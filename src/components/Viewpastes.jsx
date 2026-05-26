import { useState } from 'react'
import './viewpastes.css'
import { useSelector } from 'react-redux'
import Btn from '../btncomponents/btncomps.jsx'

const Viewpastes = () => {
    const dummyPastes = useSelector((state) => state.paste.value)
    const [view, setview] = useState(false)
    const [update,setupdate] = useState('')
    const [pasteid,setpasteid]=useState('')

    const Close =()=>{
        setview(false)
    }
    const config={
        view,
        update,
        pasteid,
        Close,
    }



    return (
        <div className="viewpaste-container">

            {view && (
                <div className="overlay">
                    <div className="modal">
                        <Btn config={config} /> 
                    </div>
                </div>
            )}

            <div className={view ? "blurred" : ""}>
                <h1 className="heading">All Pastes</h1>
                <div className="paste-wrapper">
                    {
                        dummyPastes.map((paste) => (
                            <div className="paste-card" key={paste.id}>
                                <div className="paste-top">
                                    <h2>{paste.title}</h2>
                                    <div className="btn-group">
                                        <button onClick={() => {setview(true),setpasteid(paste.id)}}>View</button>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                                <p>{paste.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Viewpastes