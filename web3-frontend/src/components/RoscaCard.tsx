
import { TezosToolkit } from '@taquito/taquito'
import React, { useState } from 'react'
import { useAppName, useContractAddress, useEndpoint, useNetwork } from '../contexts/Settings'

const RoscaCard = (props:any) => {

    const name = useAppName()
    const network = useNetwork()
    const endpoint = useEndpoint()
    const contractAddress = props.contract
    const [info,setInfo] = useState(false)
    
    const ContractData = (props:any) => {
        const handleClick = () =>{
            loadStorage()
        }
        const [{owner,rosca_total,contributing_duration,
            max_participants,participant,paused,pot,participants_count,
            contributors_count,contribute_amount,end_time,receiver,admin},setData] = useState(()=>({
            owner:null,
            rosca_total:null,
            contributing_duration:null,
            max_participants:null,
            participant:null,
            paused: false,
            pot:null,
            participants_count:null,
            contributors_count:null,
            contribute_amount:null,
            end_time:null,
            receiver:null,
            admin:null,      
        }))
        const [storage,setStorage] = useState(null)
        const loadStorage = React.useCallback(async()=>{
          const tezos = new TezosToolkit(endpoint)
          const contract = await tezos.contract.at(contractAddress)
          const contractStorage: any = await contract.storage()
          setData({
            owner: contractStorage.owner,
            rosca_total: contractStorage.rosca_total, 
            contributing_duration: contractStorage.contributing_duration,
            max_participants: contractStorage.max_participants,
            participant: contractStorage.participant,
            paused: contractStorage.paused,
            pot: contractStorage.pot, 
            participants_count: contractStorage.participants_count,
            contributors_count: contractStorage.contributors_count,
            contribute_amount: contractStorage.contribute_amount,
            end_time: contractStorage.end_time,
            receiver: contractStorage.receiver,
            admin: contractStorage.admin,
          }) 
          setStorage(contractStorage)
        },[])
        console.log("Owner: ",JSON.stringify(owner)) 
        console.log("Total Rosca: ",JSON.stringify(rosca_total)) 
        console.log("Duration: ",JSON.stringify(contributing_duration)) 
        console.log("Max Users: ",JSON.stringify(max_participants)) 
        console.log("Participants Array: ",JSON.stringify(participant)) 
        console.log("Is Paused: ",JSON.stringify(paused)) 
        console.log("Pot: ",JSON.stringify(pot)) 
        console.log("Participants Count: ",JSON.stringify(participants_count)) 
        console.log("Contributors Count: ",JSON.stringify(contributors_count)) 
        console.log("Contribute Amount: ",JSON.stringify(contribute_amount)) 
        console.log("End Time: ",JSON.stringify(end_time)) 
        console.log("Receiver: ",JSON.stringify(receiver))  
        console.log("Admin: ",JSON.stringify(admin)) 
        return (
        <div> <button style={{background:'aqua', padding:'10px', margin:'8px'}} onClick={handleClick}>GetInfo</button> 
            <div> 
                <p>Owner: {owner && JSON.stringify(owner)}</p>
                <p>Total Rosca: {rosca_total && JSON.stringify(rosca_total)}</p>
                <p>Duration: {contributing_duration && JSON.stringify(contributing_duration)}</p>
                <p>Max Users: {max_participants && JSON.stringify(max_participants)}</p>
                <p>Participants Array: {participant && JSON.stringify(participant)}</p>
                <p>Is Paused: {paused && Boolean(paused)}</p>
                <p>Pot: {pot && JSON.stringify(pot)}</p>
                <p>Participants Count: {participants_count && JSON.stringify(participants_count)}</p>
                <p>Contributors Count: {contributors_count && JSON.stringify(contributors_count)}</p>
                <p>Contribute Amount: {contribute_amount && JSON.stringify(contribute_amount)}</p>
                <p>End Time: {end_time && JSON.stringify(end_time)}</p>
                <p>Receiver: {receiver && JSON.stringify(receiver)}</p>
                <p>Admin: {admin && JSON.stringify(admin)}</p>
            </div>
        </div>
        )
    }
  return (
    <div>
      <ContractData/>
    </div>
  )
}

export default RoscaCard
