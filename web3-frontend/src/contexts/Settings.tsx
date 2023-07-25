import { NetworkType } from "@airgap/beacon-sdk";
import constate from "constate";
import { useState } from 'react';

export enum Theme {
  Default,
  Light,
  Dark
}

const switch_theme = (t : Theme, defaultDark : boolean) : Theme => {
  switch (t) {
    case Theme.Default : return defaultDark ? Theme.Light : Theme.Dark
    case Theme.Light   : return Theme.Dark
    case Theme.Dark    : return Theme.Light
  }
}

export const [
  SettingsProvider,
  useTheme,
  useAppName,
  useEndpoint,
  useContractAddress,
  useNetwork,
  useIPFSBrowser,
  // useGitRepo,
  // useHelpUrl,
  useSwitchTheme,
] = constate(
  () => {
    const [settingState, setState] = useState({
      app_name        : 'ROSCA',
      endpoint        : 'https://ghostnet.tezos.marigold.dev/',
      contract        : 'KT1F2PhjjBmKKECZULkWFNB1D2iGp4nGRwsp',
      ipfs_browser    : 'https://gateway.pinata.cloud/ipfs/',
      network         :  NetworkType.GHOSTNET,
      theme           :  Theme.Default,
      // git_repo        : 'https://github.com/completium/poll-dapp/tree/main',
      // help            : 'https://archetype-lang.org/docs/dapps/example/'
    });
    
    const switchTheme = () => { setState(s => { return { ...s, theme : switch_theme(s.theme,true) }}) }
    return { settingState, setters : { switchTheme } };
  },
  v => v.settingState.theme,
  v => v.settingState.app_name,
  v => v.settingState.endpoint,
  v => v.settingState.contract,
  v => v.settingState.network,
  v => v.settingState.ipfs_browser,
  // v => v.settingState.git_repo,
  // v => v.settingState.help,
  v => v.setters.switchTheme
);