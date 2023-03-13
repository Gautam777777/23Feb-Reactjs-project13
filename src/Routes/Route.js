
let routes = [
    {
        path:"/",
        element:'Home'
    },
    {
        path:"/login",
        element:'Login'
    },
    {
        path:"/contact",
        element:'Contact'
    },
    {
        path:"*",
        element:'NotFound'
    }
];

export default routes