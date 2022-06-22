import { Outlet, Route, Routes } from "react-router-dom"
import { TodoList } from "../todos/TodoList"

export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <>
                {/* <h1 className="title--main">CRUD App</h1> */}
                <TodoList />
                <Outlet />
            </>
        }>

        </Route>
    </Routes>
}

