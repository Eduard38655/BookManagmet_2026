import { useState } from "react";
import { useNavigate } from "react-router-dom" 
import { useContext } from "react"; 
import  { UserContext } from "../Context/UserContext";
function LoginPage() {
    const [username, setUsername] = useState("maria.admin@libros.com");
    const [password, setPassword] = useState("$2y$10$adminhash");
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)

    function ValidarUser() {
        fetch("http://localhost:5186/user/finduser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Email: username, PasswordHash: password })

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUser(data.user)
                localStorage.setItem("User_Token", data.token)
            })
    }

    return (
        <>
        <h2>sss</h2>
            <form>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        
                    />

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    onClick={ValidarUser}
                >
                    Login
                </button>
            </form>
        </>
    );
}

export default LoginPage;