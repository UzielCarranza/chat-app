import {FaUserAlt} from 'react-icons/fa'


export const UserInformation = () => {
    const user = {
        name: "test",
        phoneNumber: "123-456-7890",
    }
    return <div className="w-full bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <div className="flex flex-col items-center pb-10">
            <FaUserAlt className="mb-3 w-24 h-24 rounded-full shadow-lg bg-amber-50 mt-20" src="../imgs/test-img.png"
                 alt="user image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {user.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Phone Number: {user.phoneNumber}</span>
        </div>
    </div>
}