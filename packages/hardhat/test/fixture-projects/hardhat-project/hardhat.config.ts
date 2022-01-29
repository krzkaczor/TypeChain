// We load the plugin here.
import '../../../src/index'

import type { HardhatUserConfig } from 'hardhat/types'

const config: HardhatUserConfig = {
  solidity: '0.7.3',
  defaultNetwork: 'hardhat',
}

export default config
