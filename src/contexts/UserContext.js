import React, {useState} from "react";

const UserContext = React.createContext();

const defaultUser = {
    dni: null,
    email: null,
    nombre: null,
    apellido: null,
    telefono: null,
    password: null,
    password_expirada: null,
    imagen_perfil: null
};

export const UserProvider = ({ children, user }) => {

    const [currentUser, setCurrentUser] = useState(
        user || defaultUser
    )

    const changeUser = (user) => {
        setCurrentUser(user)
    }

    return(
        <UserContext.Provider value={{user:currentUser, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserConsumer = UserContext.Consumer;

export default UserContext;