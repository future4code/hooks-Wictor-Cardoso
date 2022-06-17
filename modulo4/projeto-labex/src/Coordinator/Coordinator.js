import {useNavegate} from "react-router-dom"

export const ToHomePage = () => {
    navigate("/")
}

export const ToAdminHomePage = () => {
    navigate("/admin")
}

export const ToApplicationFormPage = () => {
    navigate("/aplication")
}

export const ToCreateTripsPage = () => {
    navigate("/create")
}

export const ToListTripsPage = () => {
    navigate("/list")
}

export const ToLoginPage = () => {
    navigate("/login")
}
