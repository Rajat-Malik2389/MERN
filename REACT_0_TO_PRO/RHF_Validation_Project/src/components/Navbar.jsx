import Ract from 'react'

const Navbar = ({ setToggle }) => {
    return (
        <div className = 'bg-gray-400 flex justify-between items-center p-4'>
            <div className = 'h-10 w-10 rounded-full overflow-hidden'>
                <img className = "h-full w-full object-cover" src="https://images.unsplash.com/photo-1643209300696-d8468568eedc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Logo" />
            </div >
            <div className = 'flex justify-space-around items-center gap-4'>
                <h1>My Website</h1>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <button onClick={() => setToggle(prev => !prev)} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Create User</button>
        </div>
    )
}

export default Navbar