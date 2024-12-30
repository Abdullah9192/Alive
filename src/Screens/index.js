import React from 'react';
import {Router,Routes,Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import { AboutUsScreen } from './AboutUsScreen';
import { FeaturesScreen } from './FeaturesScreen';
import { ClassScreen } from './ClassScreen';
import { ContactScreen } from './ContactScreen';
import { SinglePage } from './SinglePage';

const Index = (props) => {
    return(
        
            <Routes>
                <Route  element={<HomeScreen/>}  exact path="/" >
                </Route>
                <Route  element={<AboutUsScreen/>}  exact path="/aboutus" >
                </Route>
                <Route  element={<FeaturesScreen/>}  exact path="/features" >
                </Route>
                <Route  element={<ClassScreen/>}  exact path="/class" >
                </Route>
                <Route  element={<ContactScreen/>}  exact path="/contact" >
                </Route>
                <Route  element={<SinglePage/>}  exact path="/products" >
                </Route>
            </Routes>

    )}
export default Index;
