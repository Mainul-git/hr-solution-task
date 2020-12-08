export const INCREMENT='INCREMENT'
export const DECREMENT ='DECREMENT'

export const increment=(food)=>{
    return {type:INCREMENT,food }
}
export const decrement=()=>{
    return {type:DECREMENT,food }
}