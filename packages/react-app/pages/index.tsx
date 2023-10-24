import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Button from "@/components/common/Button";
import { transferCUSD } from "@/utils/transactions";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

return (
     <div className="flex flex-cot justify-center items-center w-full">
        <div className="-full flex flex-col justify-center items-start px-7">
          <div className="h2 text-center mb-4"> 
          Your address: {userAddress.substring(0, 5)}...
      {userAddress.substring (userAddress.length - 4, userAddress.length)}
      </div>
      {/* Add a text input field to the HTML document to get the amount from the user. */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        text="Withdraw CUSD"
        loading={loading}
      onClick={async()=>{
        setLoading(true);
        await transferCUSD(
          "0x52d3b03f31c5aaf3feb670f550a81b01206234bb",//my account
           address as string,
           amount
           );
      setLoading(false);}}
      />
      </div>
    </div>
   
  );
}

