import { useCallback, useEffect, useMemo, useState} from "react"
import { useAccountPkh, useConnect, useOnBlock, useTezos } from "../dapp/dapp"
import { NETWORK } from "../dapp/defaults"

export const ConnectionSection =()=>{
    const connect = useConnect()
    const accountPkh = useAccountPkh()
    const tezos = useTezos()
    const [balance,setBalance] = useState(null)
    console.log(useConnect())
    const handleConnect= useCallback(async()=>{
        try {
            await connect(NETWORK, {forcePermission:true})
        } catch (err) {
            console.log(err)
        }
    },[connect])

    const accountPkhPreview = useMemo(()=>{
        if(!accountPkh) return undefined
        else{
            const accPkh = (accountPkh as unknown) as string
            const ln = accPkh.length
            return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`
        }
    },[accountPkh])

    const loadBalance = useCallback(async() => {
        if(tezos){
            const tezosOk = tezos as any
            const bal = await tezosOk.tz.getBalance(accountPkh)
            setBalance(tezosOk.format('mutez', 'tz', bal).toString())
        }
      },
      [tezos,accountPkh,setBalance],
    )

    useEffect(() => {
        loadBalance()
      }, [loadBalance])
      
    // useOnBlock(tezos,loadBalance)
    
    return  <div style={{backgroundColor:'#9c9cff', padding:"10px"}}>
                <div>Connected Account: {accountPkhPreview}</div>
                <div>Your Balance: {balance}</div>
                <div style={{backgroundColor:'yellow', padding:"10px", borderRadius:'10px'}}>
                    <button  onClick={handleConnect}>Connect</button>
                </div>
            </div>
}