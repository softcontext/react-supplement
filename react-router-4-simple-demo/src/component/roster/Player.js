import React from 'react'
import {Link} from 'react-router-dom'

import PlayerAPI from './api'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10))

  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div>
      <h1>{player.name} (No:{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <h3><Link to='/roster'>Back</Link></h3>
    </div>
  )
}

export default Player

// {
//   "match": {
//     "path": "/roster/:number",
//     "url": "/roster/4",
//     "isExact": true,
//     "params": {
//       "number": "4"
//     }
//   },
//   "location": {
//     "pathname": "/roster/4",
//     "search": "",
//     "hash": "",
//     "key": "e2wsvm"
//   },
//   "history": {
//     "length": 47,
//     "action": "POP",
//     "location": {
//       "pathname": "/roster/4",
//       "search": "",
//       "hash": "",
//       "key": "e2wsvm"
//     }
//   }
// }
