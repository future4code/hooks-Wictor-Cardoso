import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../Router/coordinator"

const useProtectedPage = () => {   

    const navigate = useNavigate()
    goToLoginPage(navigate)

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            goToLoginPage(navigate)
        }
    }, [])

}

export default useProtectedPage