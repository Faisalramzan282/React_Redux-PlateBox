const INITIAL_STATE={
    users:[{
        name:"muhammadfaisal",
        email: "muhammadfaisal@gamil.com"
    },
    {
        name:"Ahmar",
        email:"ahmar@gmail.com"
    }

]
}

export default (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case "SET_DATA":
            return({
                ...state,
                users:[...state.users,action.data],
                // users:"zain"
            })
        default:
            return state
    }
   
}