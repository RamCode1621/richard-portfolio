
function Reducer(state,action) {
    const {payload,type}=action

    //mainMenuItems || subMenuItems
    switch (type) {
        case 'mainMenuItems':
            // console.log(payload)
            return{
                ...state,
                itemsForMainMenu:payload
            }
            break;
        case 'subMenuItems':
            return{
                ...state,
                itemsForSubMenu:payload
            }
            break;

        case 'selectOptionMainMenu':
                const stateMainMenu=state.itemsForMainMenu.map(item => {
                    if(payload===item.id){
                        item.classSelected=true
                        return item
                    }else{
                        item.classSelected=false
                        return item
                    }
                });
                // console.log(stateMainMenu)
                // console.log(state.itemsForMainMenu)
                return{
                    ...state,
                    itemsForMainMenu:stateMainMenu
                }
            break;

        default:
            return{
                ...state
            }
            break;
    }
}

export default Reducer