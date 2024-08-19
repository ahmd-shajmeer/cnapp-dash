import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isActive: true,
        name: "",
        chartData: []
    }
}

const getChartFields = () => ({
    id: crypto.randomUUID(),
    isActive: true,
    label: "",
    value: "",
    color: "#00000"
})

export const widgetFormSlice = createSlice({
    name: "addWidgetForm",
    initialState,
    reducers: {
        addChartFields: (state) => {
            state.value.chartData.push(getChartFields());
        },
        updatedFieldValue: (state, action) => {
            const {key, value} = action.payload;
            state.value[key] = value;
        },
        resetWidgetFormState: (state) => {
            state.value = initialState.value;
        },
        updateChartField: (state, action) => {
            const {chartFieldId, key, value} = action.payload;
            const chartData = state.value.chartData.map((field) => {
                if (field.id === chartFieldId) {
                    return {...field, [key]: value };
                }
                return field;
            });
            state.value.chartData = chartData;
        }
    },
});

export const { addChartFields, updatedFieldValue, updateChartField, resetWidgetFormState } = widgetFormSlice.actions;

export default widgetFormSlice.reducer;