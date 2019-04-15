/* global austinTechList */
(function init () {
  function renderList (event) {
    var list = austinTechList

    // Filter list if we receive event value
    if (event && event.target && event.target.value) {
      var name
      var search = event.target.value.toLowerCase()
      list = list.filter(function (entry) {
        name = entry.name.toLowerCase()
        return name.includes(search)
      })
    }

    var create = document.createElement.bind(document)
    var container = document.getElementById('list-container')

    // Remove container contents
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    // Create and add the list of companies
    var outerList = create('ul')
    container.appendChild(outerList)

    // Used to insure that we're displaying
    // company data in the correct order
    var innerListOrder = [
      'name',
      'address',
      'plusCode'
    ]

    // Loop over the list of companies
    // making inner lists of the data
    var innerListWrapper, innerList, listItem, link
    list.forEach(function (entry) {
      innerListWrapper = create('li')
      outerList.appendChild(innerListWrapper)

      innerList = create('ul')
      innerListWrapper.appendChild(innerList)

      innerListOrder.forEach(function (key) {
        listItem = create('li')
        listItem.innerText = entry[key]
        innerList.appendChild(listItem)
      })

      if (entry.homepage) {
        listItem = create('li')
        link = create('a')
        link.innerText = 'Homepage'
        link.href = entry.homepage
        listItem.appendChild(link)
        innerList.appendChild(listItem)
      }

      if (entry.careers) {
        listItem = create('li')
        link = create('a')
        link.innerText = 'Careers'
        link.href = entry.careers
        listItem.appendChild(link)
        innerList.appendChild(listItem)
      }
    })
  }

  document.getElementById('filter-list').oninput = renderList
  document.getElementById('list-count').innerText = 'Entries: ' + austinTechList.length

  renderList()
})()
