import { useEffect, useState } from 'react'
import './Home.scss'

const Home = () => {
    const [userName, setUserName] = useState('')

    const inputNameAdd = (e) => {
        setUserName(e.target.value)
    }

    const handleClick = () => {
        return userName
    }

    useEffect(() => {
        handleClick()
    }, [])
    return (
        <section className='home'>
            <input type="text" placeholder='name' onInput={inputNameAdd}/>
            <br />
            <button className='add__btn' onClick={handleClick}>Add</button>
            <ul>
               {
                handleClick() 
               }
            </ul>
        </section>
    )
}

 export default Home;