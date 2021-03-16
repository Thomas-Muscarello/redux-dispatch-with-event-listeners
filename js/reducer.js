// add code snippets from README
//[action -&gt; reducer -&gt; new state]

//Declare State
let state

//pass an action and a previous state to our reducer, the reducer should return the new state.
//Set state to have a default arg
function reducer(state= {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
} 

//We need to assign our state to be the return value of our reducer each time that we call the reducer. 
function dispatch(action){
    state = reducer(state, action);
    //each time we dispatch an action we should have to update our HTML
    render();
} 

//function called render that will place this count on the page
function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

//return our default state and then call render.
dispatch({type: '@@INIT'}) 

//want an action to be dispatched each time a user clicks. So let's attach dispatch execution to a click event.
let button = document.getElementById('button');

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
}) 