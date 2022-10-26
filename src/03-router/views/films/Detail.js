import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function Detail(props) {
  const [list, getList] = useState([])
  const history = useHistory()
  useEffect(() => {
    axios({
      method: 'get',
      url: '/test.json'
    }).then(res => {
      getList(res.data.data.films)
    }).catch(err => {
      alert(err)
    })
  }, [])
  return (
    <div>
      <ul>
        {
          list.map(item =>
            <li key={item.filmId} onClick={() => {
              history.push({ pathname: '/center/', state: { id: item.filmId } })
            }}>{item.name}</li>)
        }</ul>
    </div>
  )
}
