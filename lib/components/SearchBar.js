import React from 'react'
import debounce from 'lodash.debounce'
import storeProvider from './storeProvider'

const styles = {
  searchInput:{
    margin: `${2}em`
  }
}

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  }
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm)
  }, 300)
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch()
    })
  }
  
  render() { 
    return (
      <input
        style={styles.searchInput}
        type='search'
        placeholder='Enter Search'
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      /> 
    )
  }
}
 
export default storeProvider()(SearchBar)