import axios from "axios";
import { useReducer } from "react";
import {GlobalContext} from '../MyContext'
import Reducer from "./Reducer";
import {entryPointMenu} from '../Types'

const State=props=>{
    const initialState={
        itemsForMainMenu:[],
        itemsForSubMenu:[]
    }

    const [state, dispatch] = useReducer(Reducer, initialState)


    //Stae of menu
    const getItems=async(items)=>{
        const res=await axios.get(`${entryPointMenu}${items}`) //mainMenuItems || subMenuItems
        // await console.log(res.data[0]) 
        dispatch({
            type:items,
            payload:res.data
        })
    } 
    
    const selectOptionManiMenu=(optionId)=>{
        // console.log(optionId)
        // console.log(state.itemsMainMenu)
        dispatch({
            type:'selectOptionMainMenu',
            payload:optionId
        })
    }

    //End state of menu


    return(
        <GlobalContext.Provider value={{ 
                itemsMainMenu:state.itemsForMainMenu,
                itemsSubMenu:state.itemsForSubMenu,
                getItems,
                selectOptionManiMenu
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default State