export const getTaskFromLocalStorge = ()=>{
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks) || [] ;
};

export const getThemeFromLocalStorge = ()=>{
    const theme = localStorage.getItem('theme');
    return theme || 'derk'
}
