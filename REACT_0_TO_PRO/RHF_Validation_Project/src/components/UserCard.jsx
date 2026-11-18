
const UserCard = ({ user}) => {
    return (
        <div className='flex flex-col gap-4 h-full w-60 p-4 m-4 bg-gray-200 rounded-lg shadow-md'>
            <div>
                <img className='h-60 w-90' src={user.productImage} alt='Hero' />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold'>{user.productName}</h1>
                <p className='text-gray-700'>{user.productDescription}</p>
                <p className='text-gray-700'>${user.productPrice}</p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Update</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Delete</button>
            </div>


        </div>
    )
}

export default UserCard