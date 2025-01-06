import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="EmployeesList" />
            <Stack.Screen name="addWorkers" />
            <Stack.Screen name="UpdateEmployee" />
            <Stack.Screen name="attendaceScreen"/>
            <Stack.Screen name="Summary" />
            <Stack.Screen name="summaryReport" />
            <Stack.Screen name="AttendaceReport" />
            <Stack.Screen name="EmployeeDetail" />
            <Stack.Screen name="EmployeeAttendace" />
            <Stack.Screen name="employeeOvertime" />
            <Stack.Screen name="addOvertime" />
            <Stack.Screen name="GenerateReports" />

            

        </Stack>
    );
};

export default Layout;
