import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { GroupsScreen } from './GroupsScreen';
import { ChatScreen } from './ChatScreen';
import { CalendarScreen } from './CalendarScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { ProfileScreen } from './ProfileScreen';

export const HomeNavigation = TabNavigator({
  Groups: {
    screen: GroupsScreen,
    path: '',
  },
  Chat: {
    screen: ChatScreen,
    path: 'chat',
  },
  Calendar: {
    screen: CalendarScreen,
    path: 'calendar',
  },
  Notifications: {
    screen: NotificationsScreen,
    path: 'notifications',
  },
  Profile: {
    screen: ProfileScreen,
    path: 'profile',
  }
}, {
  navigationOptions: { header: null }
});

