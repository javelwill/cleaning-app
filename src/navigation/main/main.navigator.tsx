import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainDrawerNavigatorParamList} from './main.types';
import HomeStackNavigator from '../home/home.navigator';
import ProfileScreen from '../../features/profile/screens/profile/profile.screen';
import ServiceListScreen from '../../features/services/screens/service-list/service-list.screen';
import NotificationsScreen from '../../features/notifications/screens/notifications/notifications.screen';
import FaqsScreen from '../../features/support/screens/faqs/faqs.screen';
import DashboardScreen from '../../features/provider/screens/dashboard/dashboard.screen';
import PastJobsScreen from '../../features/payments/screens/past-jobs/past-jobs.screen';
import ReviewScreen from '../../features/review/screens/review/review.screen';

const Drawer = createDrawerNavigator<MainDrawerNavigatorParamList>();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ServiceListScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Support" component={FaqsScreen} />
      <Drawer.Screen name="Provider" component={DashboardScreen} />
      <Drawer.Screen name="Payments" component={PastJobsScreen} />
      <Drawer.Screen name="Ratings" component={ReviewScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
