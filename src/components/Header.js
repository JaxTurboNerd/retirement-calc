import {FaDollarSign} from "react-icons/fa";

const Header = ()=> {
    return (
        <div className="App container mx-auto mt-3 font-thin flex items-center justify-center">
            <h1 className="text-3xl">
                <FaDollarSign className="inline-block text-green-400 align-top"/>
                Retirement Calculator
                <FaDollarSign className="inline-block text-green-400 align-top"/>
            </h1>
        </div>
    )
}

export default Header;