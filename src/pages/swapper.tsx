import { SwapWidget, darkTheme, Theme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

const chainId: number = parseInt(process.env.NEXT_PUBLIC_CHAINID!)

const thixAddress = process.env.NEXT_PUBLIC_THIX_TOKEN!
const USDTAddress = process.env.NEXT_PUBLIC_USDT_TOKEN!
const USDCAddress = process.env.NEXT_PUBLIC_USDC_TOKEN!

const MY_TOKEN_LIST = [
  {
    name: 'Tether USD',
    address: USDTAddress,
    symbol: 'USDT',
    decimals: 6,
    chainId: chainId,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    name: 'USD Coin',
    address: USDCAddress,
    symbol: 'USDC',
    decimals: 6,
    chainId: chainId,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    name: 'ThingsIX Token',
    address: thixAddress,
    symbol: 'THIX',
    decimals: 18,
    chainId: chainId,
  },
]

const customTheme: Theme = {
  ...darkTheme,
  primary: '#fff', // modal title
  secondary: '#f0f0f0', //
  interactive: '#3bb381', // buttons
  onInteractive: '#fff', // text in buttons
  container: '#121212',
  module: '#2b2b2b',
  outline: '#121212', // container border
  dialog: '#2b2b2b', // settings dialog, etc
  accentSoft: '#547bbf', // Main button
  hint: '#8a9c95', // placeholder numbers
  critical: '#ff0000',
  criticalSoft: '#ff0000',
  networkDefaultShadow: '#374152',
  //   activeSoft: '#303030', // token selection bubble hover
  //   scrim: '#ff0000',
  //   onAccent: '#ff0000',
  //   active: '#ff0000',
  //   success: '#ff0000',
}

const Swapper = () => {
  return (
    <div className="flex w-full h-full items-center text-white">
      <div className="Uniswap">
        <SwapWidget
          width={320}
          permit2={true}
          tokenList={MY_TOKEN_LIST}
          defaultInputTokenAddress={USDTAddress}
          defaultOutputTokenAddress={thixAddress}
          defaultChainId={chainId}
          theme={customTheme}
          // provider={provider}
        />
      </div>
    </div>
  )
}

export default Swapper
