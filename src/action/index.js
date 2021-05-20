import axios from 'axios'

export const changeCount = {
    type: 'changeCount',
}

export const changeCountBySome = payload =>{
    return {
        type:"changeCountBySome",
        payload
    }
}

export const changeCity = payload =>{
    return {
        type:"changeCity",
        payload
    }
}

export const updateMsg = payload =>{
    return {
        type:"updateMsg",
        payload
    }
}

export const deletePhone = () =>{
    return {
        type:"deletePhone",
    }
}

export async function getMusicAsync(){
    let res = await axios.get("http://stitchx.top:3000/personalized")
    return {
        type:"getMusicAsync",
        payload:res.data.result
    }
}