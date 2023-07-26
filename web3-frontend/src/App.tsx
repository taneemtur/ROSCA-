import './App.css';
import {useEffect, useState, Fragment} from 'react';
import { WalletInfo } from './components/WalletInfo';
import RoscaCard from './components/RoscaCard';
// import {HiOutlineCollection} from 'react-icons/hi'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [statekeepers, setStatekeepers] = useState<string[]>(["No Statekeepers defined yet."]);
  const [trustedIssuers, setTrustedIssuers] = useState<string[]>(["No Trusted Issuers defined yet."]);
  const [proposals, setProposals] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [contracts, setContracts] = useState(["KT1SWzzbD7YzrtZmJSGeGGmLhUFZnJcMYB4i","KT1Edr28YEyZCq3N9d4Gq14eJFNbWHdQa5cg"])

  async function addTrustedIssuer(address: string) {
    if (0) {

    }else setTrustedIssuers([])
  }

  async function removeTrustedIssuer(did: string) {
    if (0) {

    }else setTrustedIssuers([])
  }

  async function proposeStatekeeperAddition(address: string) {
    if (0) {

    }else setProposals(proposals)
  }

  async function proposeStatekeeperDeletion(address: string) {
    if (0) {

    } else setProposals(proposals)
  }
  return (
    <div className="flex-col flex">
      <header className="bg-[#09427d]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="h-9 w-auto"
                  src="https://images.squarespace-cdn.com/content/v1/611d0b2d86e03a029cd4c0dc/c3ea2a92-79a5-4bfe-bed6-64529221c00c/OCI+Full+Icon2.png?format=1500w"
                  alt=""
                />
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <WalletInfo/>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="py-6">
          <div>
            <h2>

            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex">
            <h1 className="text-2xl font-semibold text-gray-900">ROSCA trusted Cohorts</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-12">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">Cohorts</h1>
                <p className="mt-2 text-sm text-gray-700">
                  A list of Cohorts to be participated on.
                </p>
                    <div>
                      {contracts.map((c)=>{
                      return <RoscaCard contract={c}/>
                      })}
                    </div>
                    <div
                      className="mt-5 relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <div className="flex flex-col items-center">
                        <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#000000"> <path d="M3.05 4.75a.7.7 0 01.7-.7h3.5a.7.7 0 110 1.4h-3.5a.7.7 0 01-.7-.7zM3.75 7.05a.7.7 0 100 1.4h2.5a.7.7 0 100-1.4h-2.5z"></path> <path fill-rule="evenodd" d="M0 3.25A2.25 2.25 0 012.25 1h6.5c.883 0 1.648.51 2.016 1.25h.984c.698 0 1.3.409 1.582 1h.918c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 01-1.75 1.75h-.918c-.281.591-.884 1-1.582 1h-.984A2.25 2.25 0 018.75 15h-6.5A2.25 2.25 0 010 12.75v-9.5zm13.5 8h.75a.25.25 0 00.25-.25V5a.25.25 0 00-.25-.25h-.75v6.5zm-2.5 1v-8.5h.75A.25.25 0 0112 4v8a.25.25 0 01-.25.25H11zM2.25 2.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-6.5z" clip-rule="evenodd"></path> </g> </g>
                        </svg>
                      </div>
                      <span
                        className="mt-2 block text-sm font-medium text-gray-900"> No open cohorts to participate on. </span>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
