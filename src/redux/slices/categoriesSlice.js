import { createSlice } from '@reduxjs/toolkit';
import categories from "../../data/categories.json";

const initialState = {
    value: categories
}

export const categoriesSlice = createSlice({
    name: 'cspmWidgetForm',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.value.find(cat => cat.id === categoryId);
            if (category) {
                category.widgets.push({id: crypto.randomUUID(), ...widget});
            }
        },
        removeWidget: (state, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.value.find(cat => cat.id === categoryId);
            if (category) {
                const widgetIndex = category.widgets.findIndex(widget => widget.id === widgetId);
                if (widgetIndex !== -1) {
                    category.widgets.splice(widgetIndex, 1);
                }
            }
        },
        updateCategories: (state, action) => {
            const {categories} = action.payload;
            state.value = categories;
        }
    }
})

export const { addWidget, removeWidget, updateCategories } = categoriesSlice.actions

export default categoriesSlice.reducer