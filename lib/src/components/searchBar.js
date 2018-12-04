import React from 'react'
import { searchBarActions } from '../_actions/searchBar.actions'
import debounce from 'lodash.debounce'
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

  doSearch = debounce(() => {this.props.updateSearchTerm(this.state.searchTerm)}, 400)

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
          placeholder='Search Brah!'
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
    updateSearchTerm: (searchTerm) => {
      return dispatch(searchBarActions.updateSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)