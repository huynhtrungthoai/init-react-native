import {navigationRef} from './AppNavigator';

export function getActiveRouteName(state: any): void {
  if (state) {
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  }
}

export const screenTracking = (state: any) => {
  const currentRouteName = getActiveRouteName(state);
  console.log(`====== NAVIGATING to > ${currentRouteName}`);
};

export const navigate = (routerName: string, params?: object | undefined) => {
  navigationRef?.current?.navigate(routerName, params);
};

export const resetToStack = (
  navigation: any,
  stackName: string,
  screenName: string,
  params?: any,
) => {
  navigation.reset({
    index: 0,
    routes: [
      {
        name: stackName,
        state: {
          routes: [{name: screenName}],
        },
        params: params,
      },
    ],
  });
};
