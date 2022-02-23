import { createAction } from '@reduxjs/toolkit';

export const fetchCategoriesRequest = createAction(
  'categories/fetchCategoriesRequest'
)

export const fetchCategoriesSucces = createAction(
  'categories/fetchCategoriesSucces'
)
export const fetchCategoriesError = createAction(
  'categories/fetchCategoriesError'
)

export const addCategoryRequest = createAction(
  'categories/addCategoryRequest'
)
export const addCategorySucces = createAction(
  'categories/addCategorySucces'
)
export const addCategoryError = createAction(
  'categories/addCategoryError'
)