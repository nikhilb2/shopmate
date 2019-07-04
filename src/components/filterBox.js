import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'
import theme from '../theme'
import Selection from './select'
import RadioButton from './radioButton'

const styles = {
  root: {},
  container: {
    minWidth: '220px',
    minHeight: '697px',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center'
  },
  margin: {
    margin: '1rem'
  }
}

const FilterBox = props => {
  const {
    classes,
    productCount,
    categories,
    departments,
    clearProducts,
    getCategoriesByDepartment,
    categoriesInSelectedDept,
    getProducts,
    selectedDepartmentName,
    selectDepartmentName,
    loadingCategories
  } = props
  //console.log(departments)
  return (
    <div className={classes.container}>
      <Typography className={classes.margin} variant="h5">
        Total Items {productCount}
      </Typography>
      <Selection
        values={departments}
        name="Select Department"
        label="cat name"
        clearProducts={clearProducts}
        getCategoriesByDepartment={getCategoriesByDepartment}
        selectedDepartmentName={selectedDepartmentName}
        selectDepartmentName={selectDepartmentName}
      />
      {loadingCategories ? (
        <img
          style={{ width: '50%', marginLeft: 'auto', marginLeft: 'auto' }}
          src="static/loading.gif"
          alt="loading"
        />
      ) : (
        <RadioButton
          getProducts={getProducts}
          values={categories}
          categoriesInSelectedDept={categoriesInSelectedDept}
          clearProducts={clearProducts}
        />
      )}
    </div>
  )
}

export default withStyles(styles)(FilterBox)
