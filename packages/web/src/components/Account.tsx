import { useAccount } from 'wagmi';

export function Account() {
  const { address } = useAccount();

  return <p>{address}</p>;
}
