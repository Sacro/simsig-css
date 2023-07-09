import { useState } from 'react'
import '../css/trainlist.css'

type TrainListItem = {
  ID: string
  UID: string
  WTT: string
  Dir: string
  Status: string
  Location: string
  Length: string
  PassSig: string
  NonStopNext: string
  Power: string
  Description: string
  DrivingRules: string
  Workstation: string
}

const TrainList = () => {
  const [getTrainList] = useState<TrainListItem[]>([
    {
      ID: '2L45',
      UID: 'P33322',
      WTT: 'Y',
      Dir: 'Dn',
      Status: 'Stopped at Butlers Lane (dep 14:00)',
      Location: 'Butlers Lane',
      Length: '70m',
      PassSig: '',
      NonStopNext: '',
      Power: 'AC',
      Description: '12:55 Redditch-Lichfield City LM (Class 323 (3 Car))',
      DrivingRules: '',
      Workstation: 'Aston',
    },
    {
      ID: '2N52',
      UID: 'P33448S',
      WTT: 'Y',
      Dir: 'Up',
      Status: 'Moving at 30mph',
      Location: 'Blake Stret',
      Length: '70m',
      PassSig: '',
      NonStopNext: '',
      Power: 'AC',
      Description: '13:50 Lichfield Trent Valley HL LM (Class 323 (3 Car))',
      DrivingRules: '',
      Workstation: 'Aston',
    },
    {
      ID: '2P44',
      UID: 'P33807',
      WTT: 'Y',
      Dir: 'Dn',
      Status: 'Stopped at signal AN165',
      Location: 'Lichfield T Valley',
      Length: '70m',
      PassSig: '',
      NonStopNext: '',
      Power: 'AC',
      Description:
        '13:02 Longbridge-Lichfield Trent Valley HL LM (Class 323 (3 Car))',
      DrivingRules: '',
      Workstation: 'Aston',
    },
    {
      ID: '2R51',
      UID: 'P34192A',
      WTT: 'Y',
      Dir: 'Up',
      Status: 'Stopped at Sutton Coldfield (dep 14:01)',
      Location: 'Sutton Coldfield',
      Length: '70m',
      PassSig: '',
      NonStopNext: '',
      Power: 'AC',
      Description: '13:45 Lichfield City-Redditch LM (Class 323 (3 Car))',
      DrivingRules: '',
      Workstation: 'Aston',
    },
    {
      ID: '2U46',
      UID: 'P34560',
      WTT: 'Y',
      Dir: 'Dn',
      Status: 'Stopped at Chester Road (dep 14:01)',
      Location: 'Chester Road',
      Length: '70m',
      PassSig: '',
      NonStopNext: '',
      Power: 'AC',
      Description: '13:22 Longbridge-Four Oaks LM (Class 323 (3 Car))',
      DrivingRules: '',
      Workstation: 'Aston',
    },
  ])

  return (
    <div>
      <table className="text-left text-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>UID</th>
            <th>WTT</th>
            <th>Dir</th>
            <th>Status</th>
            <th>Location</th>
            <th>Length</th>
            <th>Pass Sig</th>
            <th>Non-Stop Next</th>
            <th>Power</th>
            <th>Description</th>
            <th>Driving Rules</th>
            <th>Workstation</th>
          </tr>
        </thead>
        <tbody>
          {getTrainList.map((train, idx) => (
            <tr
              className={idx % 2 === 0 ? 'alternate1' : 'alternate2'}
              key={train.ID}
            >
              <td className="td.tid">{train.ID}</td>
              <td className="td.uid">{train.UID}</td>
              <td className="td.tt">{train.WTT}</td>
              <td className="td.dir">{train.Dir}</td>
              <td className="td.status">{train.Status}</td>
              <td className="td.loc">{train.Location}</td>
              <td className="td.len">{train.Length}</td>
              <td className="td.passsig">{train.PassSig}</td>
              <td className="td.nonstop">{train.NonStopNext}</td>
              <td className="td.power">{train.Power}</td>
              <td className="td.desc">{train.Description}</td>
              <td className="td.rules">{train.DrivingRules}</td>
              <td className="td.wks">{train.Workstation}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <th
            colSpan={13}
          >{`${getTrainList.length} trains shown out of ${getTrainList.length} for this area`}</th>
        </tfoot>
      </table>
    </div>
  )
}

export default TrainList
