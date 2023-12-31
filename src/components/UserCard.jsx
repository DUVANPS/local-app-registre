

const UserCard = ( {user, deleteUsers, setInfoUpdate} ) => {

    const handleDelete = () =>{
        deleteUsers('/users', user.id)
    }


const handleEdit = () =>{
    setInfoUpdate(user)

}

return (
<article className="card">

    <h3 className="text_card">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>

    <ul className="li_card">

        <li><span>Email: </span><span>{user.email}</span></li>

        <li><span>Birthday: </span><span>{user.birthday}</span></li>

    </ul>
    <button onClick={handleDelete} className="delete">
        Delete
    </button>
    <button onClick={handleEdit}>Edit</button>

</article>

)
}

export default UserCard