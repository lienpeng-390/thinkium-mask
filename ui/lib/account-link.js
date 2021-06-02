import { createAccountLinkForChain } from '@metamask/etherscan-link';
import { parseInt } from 'globalthis/implementation';

export default function getAccountLink(address, chainId, rpcPrefs) {
  if (rpcPrefs && rpcPrefs.blockExplorerUrl) {
    if(rpcPrefs.blockExplorerUrl.includes('thinkium')) {
      return `${rpcPrefs.blockExplorerUrl}addressDetail?chainId=${parseInt(chainId)-10000}&address=${address}`
    }
    return `${rpcPrefs.blockExplorerUrl.replace(
      /\/+$/u,
      '',
    )}/address/${address}`;
  }

  return createAccountLinkForChain(address, chainId);
}
