import React from 'react'
import debounce from 'lodash.debounce'
import { searchBarActions } from '../_actions/searchBar.actions'
import { connect } from 'react-redux'

const styles = {
  searchInput:{
    margin: `${2}em`
  }
}

class SearchBar extends React.PureComponent {
  state ={
    searchTerm: ''
  }

  doSearch = debounce(() => {
    this.props.setSearchTerm(this.state.searchTerm)
  }, 400)

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value}, () => {
      this.doSearch()
    })
  }
  
  
  render() { 
    return (
      <div>
        <input
          style={ styles.searchInput }
          type='search'
          placeholder='Enter Search'
          value={ this.state.searchTerm }
          onChange={ this.handleSearch }
        /> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { searchBar } = state
  return {
    searchBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      return dispatch(searchBarActions.setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)