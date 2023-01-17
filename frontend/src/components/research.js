
import "./research.css";

export default function Login() {
    return (
        <form className="login">
            <label>
                <p>Star Wars Rebels Alliance Search System</p>
                <input type="text" />
            </label>
            <div>
                <button type="submit">Search</button>
            </div>
        </form>
    )
}