import axios from 'axios';

const URL = 'http://localhost:8000'; //link of backend server

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add` , data);
    }catch(error){
        console.log("Error while calling add User Api" , error);
    }
}

// export const getUsers = async () => {
//     try{
//         await axios.get(`${URL}/all`);
//     }
//     catch (error) {
//         console.log('Error while calling getUsers API', error);
//     }
// }

export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/all`);
        return response; // Return the response
    } catch (error) {
        console.log('Error while calling getUsers API', error);
    }
}



export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`); // Correct template literal syntax
    } catch(error){
        console.log('Error while calling getUser api', error);
    }
}


export const editUser = async (user , id) => {
    try {
        return await axios.put(`${URL}/$(id)`, user);
    }catch(error){
        console.log('Error while calling editUser api' , error)

    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/$(id)`);
    }catch(error){
        console.log('Error while calling deleteUser api' , error)

    }
}


