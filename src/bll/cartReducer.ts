type initStateType = [{},{}]
const initState: initStateType = [{id:0},{невыбранно:true}]

export const cartReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "addDish": {
           
        //    console.log(action.orderedDish);
             
           return {...action.orderedDish}
        }
        // case "false": {
        //     // state={loading:false}
        //     return state;
        // }
        default: return state
    }
}

type actionType = any

export const updateIngridientsAC = (orderedDish: object): actionType => { return { type: "addDish", orderedDish} };
