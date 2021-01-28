const state = {
    Menu: true,
};
const getters = {
    isMenu: (state) => {
        return !!state.Menu;
    }
};
const actions = {
    ShowMenu: ({commit}) => {
        commit('ShowMenu');
        console.log('Menu: true');
    },
    HideMenu: ({commit}) => {
        commit('HideMenu');
        console.log('Menu: false');
    }
};
const mutations = {
    ShowMenu: (state) => {
        state.Menu = true;
    },
    HideMenu: (state) => {
        state.Menu = false;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};