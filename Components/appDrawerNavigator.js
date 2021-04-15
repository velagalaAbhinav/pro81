import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import {customSideBarMenu} from './customSideBarmenu'
import SettingsScreen from '../screens /settingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    home:{
        screen:AppTabNavigator,
    },
    settings:{
        screen:SettingsScreen
    }
},
{
    contentComponent:customSideBarMenu
},
{
    intialRouteName:'Home'
})