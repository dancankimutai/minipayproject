import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Button from "@/components/common/Button";
import { transferCUSD } from "@/utils/transactions";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { address, isConnected } = useAccount();
  const [externalAddress, setExternalAddress] = useState("");   
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);
 


return (
     <div className="flex flex-cot justify-center items-center w-full">
        <div className="-full flex flex-col justify-center items-start px-7">
        <p className="mx-auto max-w-xl text-lg text-slate-700 leading-8 font-semibold">
          Withdraw CUSD tokens from Minipay to your CUSD compatible wallet address.Standard fee of 0.2 CUSD for all withdrawals.
        </p> 
      {/* Add a text input field to the HTML document to get the withdrawal address from the user. */}
      <input
          type="text"
          placeholder="  Enter Withdrawal address"
          value={externalAddress}
          onChange={(e) => setExternalAddress(e.target.value)}
          className="border -b border-black mt-5 mb-8 rounded-lg w-full h-11 text-center"
        />
      {/* Add a text input field to the HTML document to get the amount from the user. */}
      <input
        type="number"
        placeholder="  Enter Amount e.g 1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border -b border-black mb-2 rounded-lg w-full h-11 text-center"
      />
      <Button 
        text="Withdraw CUSD"
        loading={loading}
        onClick={async()=>{
        setLoading(true);
        await transferCUSD(
           externalAddress,
           address as string,
           amount
           );
      setLoading(false);}}
      />
      </div>
    </div>
   
  );
}

