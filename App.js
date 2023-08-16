import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TripScreen from "./screens/TripScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ExpensesScreen from "./screens/ExpensesScreen";
import AddExpenseForm from "./components/AddExpenseForm";
import SettleExpenses from "./components/SettleExpenses";
import CreateTripForm from "./components/CreateTripForm";
import TripDetails from "./components/TripDetails";
import Itinerary from "./components/Itinerary";
import AddActivityForm from "./components/AddActivityForm";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EAE2B7", // Soft earthly tone
          },
          headerTintColor: "#333", // Dark text color
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "Forgot Password" }}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Trip"
          component={TripScreen}
          options={{ title: "Trip" }}
        />
        <Stack.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{ title: "Expenses Management" }}
        />
        <Stack.Screen
          name="AddExpenseForm"
          component={AddExpenseForm}
          options={{ title: "Add Expense" }}
        />
        <Stack.Screen
          name="SettleExpenses"
          component={SettleExpenses}
          options={{ title: "Settle Expenses" }}
        />
        <Stack.Screen
          name="CreateTripForm"
          component={CreateTripForm}
          options={{ title: "Create New Trip" }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
          options={{ title: "Trip Details" }}
        />
        <Stack.Screen
          name="Itinerary"
          component={Itinerary}
          options={{ title: "Itinerary" }}
        />
        <Stack.Screen
          name="AddActivityForm"
          component={AddActivityForm}
          options={{ title: "Add Activity" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
