import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Provider} from "react-redux";
import store from "./redux/store";
import TodoSection from './components/TodoSection';
import Sidebar from './components/Sidebar'
import './App.css';


function App() {
  return (
    
        <Provider store={store}>
           
           
            <Grid display='flex' container className='mainWrapper'>
                  <Grid item xs={12} md={3} height={1}>
                    <Sidebar />
                  </Grid>
                  <Grid item  xs={12} md={9}>
                    <TodoSection />
                  </Grid>
              </Grid>
           
        </Provider>
  );
}

export default App;
