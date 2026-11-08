export const instance = false;



const UserDetailsPagepage = async (params) => {

    const { userId } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${userId}`, { cache: no-store });
    const user = await res.json();
    return (
        <div>
            this is the user details page userId: {userId}
            <p>{user.name} </p>
            <p>{user.email} </p>
        </div>
    );
};

export default UserDetailsPagepage;