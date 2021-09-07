import _ from 'lodash'
import { useState, useEffect } from 'react'

const Pagination = ({ numberOfItems, limit, currentPage, handleLimit, handlePage }) => {
  const limitOptions = [20, 40, 80, 160, 'All']
  const [pages, setPages] = useState(1)

  useEffect(() => {
    setPages(_.ceil(numberOfItems / limit))
  }, [limit])

  return (
    <div className="pagination-container">
      <div className="pagination-select-container">
        <span>Pokemon per page:</span>
        <select value={limit} onChange={(e) => { handleLimit(e.target.value) }}>
          {
            _.map(limitOptions, (opt, index) => {
              return <option key={index} value={_.isNumber(opt) ? opt : 99999}>{opt}</option>
            })
          }
        </select>
      </div>
      <div className="pagination-button-container">
        {
          _.times(pages, (index) => {
            return (
              <button 
                onClick={(e) => { 
                  (Number(currentPage) !== index + 1) && handlePage(e.target.value) 
                }} 
                key={index}
                value={index + 1}
                className={Number(currentPage) === index + 1 ? 'current-page-button' : ''}
              >
                {index + 1}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}
 
export default Pagination