import {BiWallet} from 'react-icons/bi';
import {BsFillGridFill} from 'react-icons/bs';
import {BsGraphUp} from 'react-icons/bs';

export const setupItems = [
  {
    id: 1,
    title: 'Wallet',
    icon: <BiWallet />,
    text : "Connect a wallet to Skywave to start buying and selling NFTs. We support all major wallets, including MetaMask, WalletConnect, and more." 
  },
  {
    id: 2,
    title: 'Collections',
    icon: <BsFillGridFill />,
    text : "Browse and discover NFTs from the best creators in the world. Skywave is home to the most popular NFTs in the world, including CryptoPunks, Board Ape Yacht Club, and more."
  },
  {
    id: 3,
    title: 'Buy',
    icon: <BsGraphUp />,
    text : "Buy NFTs with your favorite cryptocurrency. Skywave supports all major cryptocurrencies, including ETH, BTC, and more."
  },
];
