import { HOURS } from '../data.js'
import { todayIndex } from '../hooks.js'
export default function Hours() {
  const t = todayIndex()
  return (
    <>
      <table aria-label="Opening hours"><tbody>{HOURS.map((h, i) => (
        <tr key={h[0]} className={'tr' + (i === t ? ' today' : '')}><td>{h[0]}{i === t && ' · Today'}</td><td>{h[1]}<small>closes next morning</small></td></tr>))}</tbody></table>
      <p className="hn">Closing time of 5:00 AM is the morning after the day listed. Times are Pakistan Standard Time.</p>
    </>
  )
}
